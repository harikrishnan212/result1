import db from "../../../lib/db";
import Result from "../../../moduls/stdetail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await db();  
    const data = await req.json();

    const stadd = new Result(data);

    await stadd.save();

    
    return NextResponse.json({ stadd });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Failed to save data" },
      { status: 500 }
    );
  }
}
