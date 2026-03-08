export async function GET() {
  return Response.json({
    status: 'warning',
    message: 'High CPU usage'
  });
}
