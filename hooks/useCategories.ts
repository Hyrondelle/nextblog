import { useQuery } from "@tanstack/react-query";

async function getCategories(){
    const data =await fetch(`/api/categories/`)
    
    return data.json()
}

export function UseCategories() {
    return useQuery({
        queryKey:["categories"],
        queryFn:getCategories,
        
    })
}