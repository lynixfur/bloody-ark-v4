import prisma from "@/libs/db";
import { getCurrentUser } from "@/libs/session";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
    let user = await getCurrentUser();

    if (!user) {
        // Create a JSON object with the desired message.
        const responseBody = { msg: "Unauthorized Access", success: false };

        // Use the `new Response()` constructor to create an HTTP response object with a 403 status code and the JSON body.
        const response = new Response(JSON.stringify(responseBody), {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });

        return response;
    }
    const url = new URL(request.url);
    const cluster_search = url.searchParams.get("cluster") || ''; // Use default empty string if parameter is null or undefined

    const cluster = await prisma.cluster.findFirst({
        select: {
            id: true,
            strId: true,
            game: true,
            name: true,
            databaseDb: true,
            databaseUrl: true,
            databasePort: true,
            databaseUsername: true,
            databasePassword: true,
            // Uncomment and use these if needed
            // servers: { select: { id: true, online: true } }, 
            // infos: { select: { id: true } },
        },
        where: {
            id: cluster_search ? cluster_search : undefined, // Use `undefined` to omit the filter if `cluster_search` is empty
        }
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

      try {
        await knex.raw('SELECT 1');

        const responseBody = { msg: "Success", success: true };
    
        const response = new Response(JSON.stringify(responseBody), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    
        return response;

      } catch (e: any) {
        const responseBody = { msg: "Cluster Problem Detected", success: false, };
        const response = new Response(JSON.stringify(responseBody), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });

        return response;
      }
}

export const dynamic = 'force-dynamic';