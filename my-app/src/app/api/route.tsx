export async function GET(req: Request) {
  try {
    return new Response(
      JSON.stringify({ data: "Hello world" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ data: "no" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
