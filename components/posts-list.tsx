import React from 'react';
import { Card} from './ui/card';
import { Badge } from "@/components/ui/badge"
import { POSTS } from '@/utils/posts';
import Image from 'next/image';
import{MessageCircle,Eye} from 'lucide-react'
//import bgphoto from '../public/backgrounddev.jpg'

const postslist = () => {
    return (
        <div className='w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 '>
            {POSTS.map((post)=>(
                <Card key={post.id} 
                className='flex flex-col p-3 gap-1 self-stretch'> 
                    <Image src={'/backgrounddev.jpg'} width={500} height={500}  
                    alt='background post'
                     className='w-full object-cover'/>
                     <div className='flex flex-col h-full justify-between'>
                        <h1 className='text-wrap break-words'>{post.title}</h1>
                        <div>
                            <Badge variant="outline" >{post.category}</Badge>
                        </div>
                        <div className='flex gap-1'>
                            <MessageCircle size={16}/>
                            <p>{post.nbComments}</p>
                            <Eye size={16}/>
                            <p>{post.nbLikes}</p>
                        </div>
                        </div>
                </Card>
            ))}
            
        </div>
    );
};

export default postslist;