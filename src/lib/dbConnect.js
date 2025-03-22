import { MongoClient, ServerApiVersion } from 'mongodb';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const collectionName ={
    SERVICES:"test_services",
    USERS : "test_users",
    BOOKINGS:'test_bookings'
}
const dbConnect = (collectionName)=>{
    
    const uri = process.env.NEXT_PUBLIC_MONGO_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })
    return client.db('CarDoctorDB').collection(collectionName)
}
export default dbConnect