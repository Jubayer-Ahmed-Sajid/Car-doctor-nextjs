import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// get service by id
export async function GET(req, { params }) {
  const { id } = await params;
  const serviceCollection = dbConnect(collectionName.SERVICES);
  const service = await serviceCollection.findOne({ _id: new ObjectId(id) });
  return NextResponse.json(service);
}
// delete bookings by id
export async function DELETE(req, { params }) {
  const serviceCollection = dbConnect(collectionName.BOOKINGS);
  const { id } = await params;
  // validate user
  const session = await getServerSession(authOptions);
  const currentBooking = await serviceCollection.findOne({
    _id: new ObjectId(id),
  });
  if (currentBooking.email !== session?.user?.email) {
    return NextResponse.forbidden({
      message: "You are not authorized to delete this booking",
    });
  }

  const service = await serviceCollection.deleteOne({ _id: new ObjectId(id) });
  revalidatePath('/myBookings');
  return NextResponse.json(service);
}
