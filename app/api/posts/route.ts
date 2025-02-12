import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
export const GET = async (req:Request) =>{
    const {searchParams} = new URL(req.url)
    const catSlug = searchParams.get('cat')
    const posts = await prisma.post.findMany({
        where:{
            ...(catSlug && catSlug !== "null" && catSlug !== '' &&{catSlug})
        }
    })
    console.log(posts);
    
    return NextResponse.json(posts,{status:200})
}