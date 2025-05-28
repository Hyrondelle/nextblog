import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth-options";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

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
        const comment = await prisma.comment.create({
            data:{...body,userEmail:session.user.email}
            
        })
        return NextResponse.json(comment,{status:200})
    }
    catch{
        return NextResponse.json(
            {message:"Something went wrong"},
            {status:500}
        )
    }
}