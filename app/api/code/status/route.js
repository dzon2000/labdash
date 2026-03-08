export async function GET() {
  return Response.json({
    status: 'down',
    message: 'Service stopped'
  });
}
