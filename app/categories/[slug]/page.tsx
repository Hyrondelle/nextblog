"use client"

import PostCard from '@/components/post-card';
import { UsePosts } from '@/hooks/usePosts';
import { Post } from '@prisma/client';

import { use } from 'react';

const CategoriesPage = ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = use(params)
    const {data:posts,isFetching,isError} = UsePosts(slug)
    if(isFetching) return <p>Loading</p>
    if(isError) return <p>Error</p>
    console.log(posts);
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold mb-4 mt-4'>{slug}</h1>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
            {posts.map((post:Post)=>{
                return<PostCard key={post.id} {...post}/>
            })}
        </div>
        </div>
    );
};

export default CategoriesPage;