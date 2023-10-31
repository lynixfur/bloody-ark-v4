import prisma from "@/libs/db";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {

    try {
        // Get DB Creds
        const cluster = await prisma.cluster.findUnique({
            where: {
            id: "f6365f0c-0bf2-42ae-be08-0d9523f98205",
            },
        });

        const url = new URL(request.url);
        const current_page = Number(url.searchParams.get("page") ? url.searchParams.get("page") : 0);
        let search = url.searchParams.get("search") ? "%" + url.searchParams.get("search")?.toString() + "%" : "%%";    

        if(cluster === null || cluster === undefined) {     
            const response = new Response(JSON.stringify({"msg": "Cluster Not Found!", success: false}), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        const knex = require('knex')({
            client: 'mysql',
            connection: {
              host: cluster?.databaseUrl,
              port: cluster?.databasePort,
              user: cluster?.databaseUsername,
              password: cluster?.databasePassword,
              database: cluster?.databaseDb
            }
          });

        const ranking_data = await knex.table('advancedachievements_playerdata')
        .select('PlayerName', 'TribeName', 'TribeID', 'PlayTime', 'PlayerKills', 'DinoKills', 'WildDinoKills', 'DinosTamed', 'DeathByPlayer', 'DeathByDino', 'DeathByWildDino')
        .select(knex.raw('CASE WHEN DeathByPlayer = 0 THEN PlayerKills ELSE PlayerKills / DeathByPlayer END AS KD')) // WARN [DANGER]: Be careful of SQL INJECTION (In the future)
        .whereLike('PlayerName', `%${search}%`)
        .orderBy('PlayerKills', 'desc')
        .limit(15)
        .offset(20 * current_page);
      
        const safe_ranking_data = JSON.parse(JSON.stringify(ranking_data, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
          ));

        const count = await knex.table('advancedachievements_playerdata').select('PlayerName')
        .whereLike('PlayerName', `%${search}%`);

        var next_page = null;
        var prev_page = null;
    
        if (current_page < Math.round(count.length / 20)) {
          next_page = `/api/ranks/player_ranks?page=${current_page + 1}`;
        }
    
        if (current_page > 0) {
          prev_page = `/api/ranks/player_ranks?page=${current_page - 1}`;
        }

        const responseBody = { msg: "Success", success: true,
        ranks: safe_ranking_data,
        pagination: {
            total_pages: Math.round(count.length / 20),
            current_page: current_page,
            next: next_page,
            prev: prev_page
        }  };
        

        const response = new Response(JSON.stringify(responseBody), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    
        return response;

    } catch (err) {
        const response = new Response(JSON.stringify({msg: err, success: false}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export const dynamic = 'force-dynamic';