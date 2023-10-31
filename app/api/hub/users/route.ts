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

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            image: true,
            role: true,
        },
    });

    const responseBody = { msg: "Success", success: true, users: users };
    
    const response = new Response(JSON.stringify(responseBody), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}

export const dynamic = 'force-dynamic';