

import { useQuery } from "@tanstack/react-query";

async function getPosts(slug:string|null=null){
    const data =await fetch(`/api/posts?cat=${slug}`)
    
    return data.json()
}

export function UsePosts(slug:string|null=null) {
    return useQuery({
        queryKey:["posts"],
        queryFn:()=>getPosts(slug),
        
    })
}