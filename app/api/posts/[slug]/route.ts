
import { POSTS } from "@/utils/posts"
import { NextResponse } from "next/server"

export const GET = async (req:Request,{params}:{params:{slug:string}}) =>{
    const post = await POSTS.find((poste)=>poste.id==parseInt(params.slug))
    console.log(post);
    
    return NextResponse.json(post,{status:200})
}