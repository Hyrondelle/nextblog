
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