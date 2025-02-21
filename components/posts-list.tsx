"use client"

import { UsePosts } from '@/hooks/usePosts';
import PostCard from '@/components/post-card'
import { Post } from '@prisma/client';


//import bgphoto from '../public/backgrounddev.jpg'

const postslist = () => {

    const {data:posts, isLoading, isError} = UsePosts()

    if(isLoading) return <p>Loading</p>
    if(isError) return <p>Something went wrong</p>
    console.log(posts);
    
    return (
        <div className='w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center'>
            {posts.map((post:Post)=>(
                <PostCard key={post.id} {...post}/>
            ))}
            
        </div>
    );
};

export default postslist;