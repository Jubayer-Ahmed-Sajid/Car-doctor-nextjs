import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// post booking
export async function POST(req) {
  const body = await req.json();
  const serviceCollection = dbConnect(collectionName.BOOKINGS);
  const service = await serviceCollection.insertOne(body);
  return NextResponse.json(service);
}

// get all bookings
export async function GET(req) {
  // get user info from serverSession
  const session =await getServerSession(authOptions)
  console.log(session);
  const serviceCollection = dbConnect(collectionName.BOOKINGS);
  const services = await serviceCollection.find({email:session?.user?.email}).toArray();
  return NextResponse.json(services);
}
