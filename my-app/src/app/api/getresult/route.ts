import db from "../../../../lib/db";
import AddMAny_St from "../../../../moduls/addmanyst";

export async function POST(req: Request) {
  try {
    await db();
    const data = await req.json();

    const resultinsert = await AddMAny_St.findOne(data);

    if (resultinsert === null) {
      return Response.json({
        data: "Pls Enter valid data",
      });
    }

    return Response.json({
      data: resultinsert,
    });
  } catch (error) {}
}
