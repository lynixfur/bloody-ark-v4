import prisma from "@/libs/db";
import { PrismaClient } from "@prisma/client";


export async function GET(request: Request) {
    const url = new URL(request.url);
    const cluster_filter = url.searchParams.get("cluster");
    const game_filter = url.searchParams.get("game");

    // Find Info Pages and select fields to include/exclude
    const pages = await prisma.server.findMany({
        select: {
            id: true,
            clusterId: true,
            cluster: {
                select: {
                  strId: true, // Include the strId field of the associated Cluster
                  visible: true
                },
            },
            name: true,
            map: true,
            cardBackground: true,
            cardIcon: true,
            ipAddress: true,
            country: true,
            game: true,
            onlinePlayers: true,
            visible: true,
            joinable: true,
            online: true,
            lastUpdated: true,
        },
        where: {
            visible: true,
            cluster: {
                strId: cluster_filter ?? undefined
            }
        },
    });

    if (pages.length === 0) {
        // If no data is found, return a JSON response with a 404 status code and the message "Not Found".
        const notFoundResponse = new Response(JSON.stringify({ msg: "No Servers Available", cluster_filter: cluster_filter }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
        return notFoundResponse;
    }

    // If data exists, return a JSON response with the selected fields.
    const response = new Response(JSON.stringify(pages), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}
