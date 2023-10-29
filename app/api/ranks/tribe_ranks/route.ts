import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

    const ranking_data = await knex.table('advancedachievements_tribedata')
    .select('advancedachievements_tribedata.TribeID', 'advancedachievements_tribedata.TribeName', 'advancedachievements_tribedata.DamageScore')
    .leftJoin('advancedachievements_playerdata', 'advancedachievements_playerdata.TribeID', 'advancedachievements_tribedata.TribeID')
    .sum('PlayerKills as Kills')
    .sum('DeathByPlayer as Deaths')
    .sum('DinoKills as DinoKills')
    .sum('PlayTime as PlayTime')
    .whereLike('advancedachievements_tribedata.TribeName', search)
    .groupBy('advancedachievements_tribedata.TribeID')
    //.orderBy(safeFilter, 'desc')
    .orderBy('DamageScore', 'desc')
    .limit(20)
    .offset(20 * current_page)

    const safe_ranking_data = JSON.parse(JSON.stringify(ranking_data, (key, value) =>
        typeof value === 'bigint'
        ? value.toString()
        : value // return everything else unchanged
    ));

    const count = await knex.table('advancedachievements_tribedata').select('TribeName')
    .whereLike('advancedachievements_tribedata.TribeName', search);

    var next_page = null;
    var prev_page = null;

    if (current_page < Math.round(count.length / 20)) {
      next_page = `/api/ranks/tribe_ranks?page=${current_page + 1}`;
    }

    if (current_page > 0) {
      prev_page = `/api/ranks/tribe_ranks?page=${current_page - 1}`;
    }

    // Create a JSON object with the desired message.
    const responseBody = { msg: "Success", success: true, ranks: safe_ranking_data,
    pagination: {
        total_pages: Math.round(count.length / 20),
        current_page: current_page,
        next: next_page,
        prev: prev_page
    } };


    const response = new Response(JSON.stringify(responseBody), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

    return response;
            
    } catch(error: any) {
        const response = new Response(JSON.stringify({"msg": "An unknown error has occured!", success: false}), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    
        return response;
    }
}

export const dynamic = 'force-dynamic';