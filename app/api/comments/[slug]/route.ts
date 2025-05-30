
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
export const GET = async (req:Request,{params}:{params:{slug:string}}) =>{
    const {slug} = params
    const comment = await prisma.comment.findMany({
        where:{postSlug:slug} 
    })
    console.log(comment);
    
    return NextResponse.json(comment,{status:200})
}