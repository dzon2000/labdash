export async function GET() {
  // Simulate random status for demonstration
  const statuses = ['online', 'online', 'online', 'warning']; // 75% online
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  return Response.json({
    status: randomStatus,
    message: randomStatus === 'online' ? 'Active' : 'Slow response'
  });
}
