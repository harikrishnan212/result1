import db from "../../../../lib/db";
import AddMAny_St from "../../../../moduls/addmanyst";

export async function POST(req: Request) {
  try {
    await db();

    const data = await req.json();

    // Check if data is an object and not empty
    if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
      return Response.json({
        success: false,
        message: "Please enter valid data",
      });
    }

    // Find one matching document
    const resultInsert = await AddMAny_St.findOne(data);

    if (!resultInsert) {
      return Response.json({
        success: false,
        message: "No matching student found",
      });
    }

    return Response.json({
      success: true,
      data: resultInsert,
    });

  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
