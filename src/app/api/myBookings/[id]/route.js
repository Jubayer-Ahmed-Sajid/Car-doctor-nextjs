import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Get single bookings
export async function GET(req, { params }) {
  const { id } = await params;
  const serviceCollection = dbConnect(collectionName.BOOKINGS);
  const service = await serviceCollection.findOne({ _id: new ObjectId(id) });
  // Add validation
  const session = await getServerSession(authOptions);
  
  if (service.email !== session?.user?.email) {
    return NextResponse.forbidden({
      message: "You are not authorized to update this booking",
    });
  }
  return NextResponse.json(service);
}

// Update single bookings
export async function PATCH(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  const filter = { _id: new ObjectId(id) };
  const update = { $set: { ...body } };
  const options = { upsert: true };
  const serviceCollection = dbConnect(collectionName.BOOKINGS);
  // Add validation
  const session = await getServerSession(authOptions);
  const currentBooking = await serviceCollection.findOne({
    _id: new ObjectId(id),
  });
  if (currentBooking.email !== session?.user?.email) {
    return NextResponse.forbidden({
      message: "You are not authorized to update this booking",
    });
  }
  const service = await serviceCollection.updateOne(filter, update, options);
  revalidatePath("/myBookings");
  return NextResponse.json(service);
}
