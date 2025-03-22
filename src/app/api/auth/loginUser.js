"use server"
import dbConnect, { collectionName } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const loginUser =async(payload)=>{
    const userCollection = dbConnect(collectionName.USERS)
    const {email,password} = payload;
    const user = await userCollection.findOne({email})
    if(!user){
        return null;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword){
        return null;
    }
    return user;

}