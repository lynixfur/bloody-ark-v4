import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const url = new URL(request.url);
    const game_filter = url.searchParams.get("game");
    const page_filter: any = url.searchParams.get("page") ? url.searchParams.get("page") : "";
    const cluster_filter = url.searchParams.get("cluster");

    // TODO: Make a better filter!
    let prismaGameFilter: any = game_filter === "ArkASE" ? "ArkASE" : "ArkASA";

    // Find Info Pages and select fields to include/exclude
    const pages = await prisma.info.findMany({
        select: {
            id: true,
            strId: true,
            clusterId: true,
            game: true,
            name: true,
            icon: true,
            description: true,
            content: true
        },
        where: {
            visible: true,
            game: prismaGameFilter,
        }
    });

    if (pages.length === 0) {
        // If no data is found, return a JSON response with a 404 status code and the message "Not Found".
        const notFoundResponse = new Response(JSON.stringify({ msg: "Not Found" }), {
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
