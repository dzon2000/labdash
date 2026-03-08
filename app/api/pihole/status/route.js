export async function GET() {
  try {
    const response = await fetch(
      `http://${process.env.PIHOLE_HOST}/admin/api.php?summary&auth=${process.env.PIHOLE_API_KEY}`,
      {
        cache: 'no-store',
        signal: AbortSignal.timeout(5000), // 5 second timeout
      }
    );
    if (!response.ok) {
      return Response.json({ status: 'down' });
    }
    const data = await response.json();
    return Response.json({
      status: data.status === 'enabled' ? 'online' : 'warning',
      message: data.status === 'enabled' ? 'Active' : 'Disabled'
    });

  } catch (error) {
    console.error('Pi-hole status check failed:', error);
    return Response.json({
      status: 'down',
      message: 'Unreachable'
    });
  }
}
