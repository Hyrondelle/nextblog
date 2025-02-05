

import { useQuery } from "@tanstack/react-query";

async function getPosts(){
    const data =await fetch(`/api/posts/`)
    
    return data.json()
}

export function UsePosts() {
    return useQuery({
        queryKey:["posts"],
        queryFn:getPosts,
        
    })
}