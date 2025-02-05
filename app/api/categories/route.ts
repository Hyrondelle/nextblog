import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const GET = async () =>{
   
    const categories = await prisma.category.findMany()
    console.log(categories);
    
    return NextResponse.json(categories,{status:200})
}