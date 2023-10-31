const os = require('os');

const memoryUsage = process.memoryUsage();
const totalMemoryInGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2); // Convert to GB and round to 2 decimal places
const freeMemoryInGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2); // Convert to GB and round to 2 decimal places
const cpuUsage = process.cpuUsage();

export async function GET(request: Request) {
    // Create a JSON object with the desired message.
    const responseBody = { msg: "Evolved Sequence Completed : Ascension Imminent : ARK Survival Ascended Respawn Timer Initiated : Recharge Mode Engaged : Sleep well, Survivors, Nighty Night x", success: true, version_data: {
        version: "4.2.24",
        codename: "BloodyASA_4.2.24",
        release_date: "2023-10-29",
    }, resources: {
        memory: {
            total: totalMemoryInGB + "GiB",
            free: freeMemoryInGB + "GiB",
            usage: memoryUsage,
        },
        cpu: {
            usage: cpuUsage,
        }
    }};

    // Use the `new Response()` constructor to create an HTTP response object with a 403 status code and the JSON body.
    const response = new Response(JSON.stringify(responseBody), {
        status: 403,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}

export const dynamic = 'force-dynamic';