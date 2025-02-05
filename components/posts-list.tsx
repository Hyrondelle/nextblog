"use client"
import React from 'react';
import { Card} from './ui/card';
import Image from 'next/image';
import{MessageCircle,Eye} from 'lucide-react'
import Link from 'next/link';
import { UsePosts } from '@/hooks/usePosts';
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
                <Link key={post.id} href={"/posts/"+post.slug}>
                <Card  
                className='flex flex-col p-6 gap-1 self-stretch max-w-md '> 
                    <Image src={'/backgrounddev.jpg'} width={500} height={500}  
                    alt='background post'
                     className='w-full object-cover hover:scale-105'/>
                     <div className='flex flex-col h-full justify-between'>
                        <h1 className='text-wrap break-words'>{post.title}</h1>
                        <div>
                            {/* <Badge variant="outline" >{post.category}</Badge> */}
                        </div>
                        <div className='flex gap-1'>
                            <MessageCircle size={16}/>
                            {/* <p>{post.nbComments}</p> */}
                            <Eye size={16}/>
                            {/* <p>{post.nbLikes}</p> */}
                        </div>
                        </div>
                </Card>
                </Link>
            ))}
            
        </div>
    );
};

export default postslist;