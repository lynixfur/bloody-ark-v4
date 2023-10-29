export async function GET(request: Request) {
    // Create a JSON object with the desired message.
    const responseBody = { msg: "Unauthorized Access", success: false };

    // Use the `new Response()` constructor to create an HTTP response object with a 403 status code and the JSON body.
    const response = new Response(JSON.stringify(responseBody), {
        status: 403,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}

export const dynamic = 'force-dynamic';