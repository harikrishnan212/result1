import db from "../../../../lib/db";
import StResult from "../../../../moduls/result";

export async function POST(req: Request) {
  try {
    await db();
    const data = await req.json();

    const resultinsert = await StResult.findOne(data)

    return Response.json({
      data: resultinsert,
    });
  } catch (error) {}
}