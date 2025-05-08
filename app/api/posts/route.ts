import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { getAuthSession } from "@/lib/auth-options"


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

export const POST = async (req:Request) => {
    
    try{
        const session = await getAuthSession()

        if(!session || !session.user){
            return NextResponse.json(
                {message:"Not Authenticated"},
                {status:403}
            )
        }
        const body = await req.json()
        const post = await prisma.post.create({
            data:{...body,userMail:session.user.email}
            
        })
        return NextResponse.json(post,{status:200})
    }
    catch{
        return NextResponse.json(
            {message:"Something went wrong"},
            {status:500}
        )
    }
}
    