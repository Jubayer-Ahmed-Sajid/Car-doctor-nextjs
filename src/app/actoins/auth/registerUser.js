'use server'

import dbConnect, { collectionName } from "@/lib/dbConnect"
import bcrypt, { hash } from "bcrypt";
export const registerUser = async(payload)=>{
   
    const userCollection = dbConnect(collectionName.USERS)
    // check if user exists
    const existingUser = await userCollection.findOne({ email: payload.email })
    if (!existingUser){
        // create new user
        const hashedPassword = await bcrypt.hash(payload.password, 10);
         payload.password = hashedPassword;
        const user = await userCollection.insertOne(payload)
        return user;
    }
    else return null;

}