export async function GET(request) {
    try {
        const response = await fetch(
            `http://${process.env.PIHOLE_HOST}/admin/api.php?summary&auth=${process.env.PIHOLE_API_KEY}`,
            { cache: "no-store" }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch from Pi-hole");
        }
        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        console.log("Pi-hole API error:", error);
        return Response.json(
            { error: "Failed to fetch Pi-hole data." },
            { status: 500 }
        )
    }
}
