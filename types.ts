
export type category ={
    id:number
    name:string
    slug:string
}

export type posts ={
    id:number
    title:string
    url:string
    category:string
    caption:string
    date:string
    minuteToRead:number
    author: string
    nbLikes:number
    nbComments:number
    slug:string
}

export type postsWithCat ={
    id:string
    title:string
    //url:string
    category:string
    //caption:string
    //date:string
    //minuteToRead:number
    //author: string
    //nbLikes:number
    //nbComments:number
    slug:string
    createdAt:Date
    view:number
    nbComments:number
    content:string
    catSlug:string
    cat:category
}