import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";

export async function GET() {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const data = await db.query.challenges.findMany();

  return NextResponse.json(data);
}

export const POST = async (req: Request) => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  console.log("challenge_body", body);

  const data = await db
    .insert(challenges)
    .values({
      ...body,
    })
    .returning();

  console.log("challenge_data", data);

  return NextResponse.json(data[0]);
};
