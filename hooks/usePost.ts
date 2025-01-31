import { posts } from "@/types";
import { Post } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

async function getPostBySlug(slug:string){
    const data =await fetch(`/api/posts/${slug}`)
    return data.json()
}

export function UsePost(slug:string) {
    return useQuery({
        queryKey:["post",slug],
        queryFn:() => getPostBySlug(slug),
        enabled: !!slug
    })
}