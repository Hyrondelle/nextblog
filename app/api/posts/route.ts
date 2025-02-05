import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const GET = async () =>{
   
    const posts = await prisma.post.findMany()
    console.log(posts);
    
    return NextResponse.json(posts,{status:200})
}