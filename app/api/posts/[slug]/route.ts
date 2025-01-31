
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const GET = async (req:Request,{params}:{params:{slug:string}}) =>{
    const {slug} = params
    const post = await prisma.post.findFirst({
        where:{slug} 
    })
    console.log(post);
    
    return NextResponse.json(post,{status:200})
}