import {z} from "zod"

export const PostSchema =z.object({
    id:z.string(),
    title:z.string(),
    slug: z.string()
})

export const PostsSchema = z.array(PostSchema)

export const PostsResponseSchema = z.object({
    posts:PostsSchema
})

export const PostResponseSchema = z.object({
    post:PostSchema
})