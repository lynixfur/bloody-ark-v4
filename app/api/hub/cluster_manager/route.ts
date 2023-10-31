import prisma from "@/libs/db";
import { getCurrentUser } from "@/libs/session";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
    let user = await getCurrentUser();


    if (user?.role !== "SYSTEM" && user?.role !== "ADMIN") {
        // Create a JSON object with the desired message.
        const responseBody = { msg: "Unauthorized Access", success: false };

        // Use the `new Response()` constructor to create an HTTP response object with a 403 status code and the JSON body.
        const response = new Response(JSON.stringify(responseBody), {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });

        return response;
    }

    const clusters = await prisma.cluster.findMany({
        select: {
            id: true,
            strId: true,
            game: true,
            servers: { select: { id: true, online: true, name: false } },
            infos: { select: { id: true } },
        },
    });

    // Loop through each cluster and calculate the global status based on the number of online servers.
    for (const cluster of clusters) {
        let onlineCount = 0;
        for (const server of cluster.servers) {
            if ((server as any).online) {
                onlineCount++;
            }
        }
        if (onlineCount === 0) {
            (cluster as any)["status"] = "Down";
        } else if (onlineCount === cluster.servers.length) {
            (cluster as any)["status"] = "Operational";
        } else {
            (cluster as any)["status"] = "Issues";
        }
    }

    const responseBody = { msg: "Success", success: true, clusters: clusters };
    
    const response = new Response(JSON.stringify(responseBody), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}

export const dynamic = 'force-dynamic';