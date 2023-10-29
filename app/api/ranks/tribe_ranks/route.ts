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
    //.whereLike('advancedachievements_tribedata.TribeName', search)
    .groupBy('advancedachievements_tribedata.TribeID')
    //.orderBy(safeFilter, 'desc')
    .orderBy('DamageScore', 'desc')
    .limit(20)
    .offset(20 * 1)

    const safe_ranking_data = JSON.parse(JSON.stringify(ranking_data, (key, value) =>
        typeof value === 'bigint'
        ? value.toString()
        : value // return everything else unchanged
    ));

    // Create a JSON object with the desired message.
    const responseBody = { msg: "Success", success: true, ranks: safe_ranking_data };


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