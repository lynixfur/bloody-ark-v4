import prisma from "@/libs/db";
import { getCurrentUser } from "@/libs/session";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
    let user = await getCurrentUser();


    if(user?.role !== "SYSTEM" && user?.role !== "ADMIN") {
        // Create a JSON object with the desired message.
        const responseBody = { msg: "Unauthorized Access", success: false};

        // Use the `new Response()` constructor to create an HTTP response object with a 403 status code and the JSON body.
        const response = new Response(JSON.stringify(responseBody), {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });

        return response;
    }

    const servers = await prisma.server.findMany({
        select: {
            id: true,
            name: true,
            map: true,
            ipAddress: true,
            joinable: true,
            online: true,
            onlinePlayers: true,
            visible: true,
            cluster: {
                select: {
                  id: true,
                  strId: true, // Include the strId field of the associated Cluster
                },
            },
            game: true
        },
    });
    const clusters = await prisma.cluster.findMany({
        select: {
            id: true,
            strId: true,
            game: true
        },
    });
     
    const response = new Response(JSON.stringify({msg: "Success", success: true, servers: servers, clusters: clusters}), {
        status: 403,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}

export const dynamic = 'force-dynamic';