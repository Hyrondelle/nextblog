import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const GET = async () =>{
   
    const post = await prisma.post.findMany()
    console.log(post);
    
    return NextResponse.json(post,{status:200})
}