import { useQuery } from "@tanstack/react-query";

async function getComments(slug:string){
    const data =await fetch(`/api/comments${slug}`)
    
    return data.json()
}

export function UseComments(slug:string) {
    return useQuery({
        queryKey:["comments"],
        queryFn:()=>getComments(slug),
        
    })
}