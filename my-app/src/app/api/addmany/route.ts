import db from "../../../../lib/db";
import AddMAny_St from "../../../../moduls/addmanyst";

export async function POST(req: Request) {
  try {
    await db();
    const data = await req.json();


    if (data.length === 0) {
      return Response.json({
        success: false,
        message: "Please provide at least one student record.",
      });
    }


    const validStudents = data.filter((student: any) =>
      student &&
      typeof student.roll_number === "string" &&
      student.roll_number.trim() !== "" &&
      typeof student.stname === "string" &&
      student.stname.trim() !== ""
    );

    if (validStudents.length === 0) {
      return Response.json({
        success: false,
        message: "No valid student records found. Please check your data.",
      });
    }

    
    const queryConditions = validStudents.map((student: any) => ({
      roll_number: student.roll_number,
      sub_code: student.sub_code,
    }));

    const existingStudents = await AddMAny_St.find({ $or: queryConditions });

    if (existingStudents.length > 0) {
      return Response.json({
        success: false,
        message: "Some students already exist",
        duplicates: existingStudents,
      });
    }


    await AddMAny_St.insertMany(validStudents);

    return Response.json({
      success: true,
      message: "Students added successfully",
    });

  } catch (error) {
    console.error("Error while adding students:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
