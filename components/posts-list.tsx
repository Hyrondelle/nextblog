import React from 'react';
import { Card} from './ui/card';
import { Badge } from "@/components/ui/badge"
import { POSTS } from '@/utils/posts';
import Image from 'next/image';
import{MessageCircle,Eye} from 'lucide-react'
//import bgphoto from '../public/backgrounddev.jpg'

const postslist = () => {
    return (
        <div className='w-full flex flex-row gap-2 '>
            {POSTS.map((post)=>(
                <Card key={post.id} 
                className='w-1/4 flex flex-col p-3 gap-1 self-stretch'> 
                    <Image src={post.url} width={500} height={500}  
                    alt='background post'
                     className='w-full object-cover'/>
                     <div className='flex flex-col h-full justify-between'>
                        <h1 className='text-wrap break-words'>{post.title}</h1>
                        <div>
                            <Badge variant="outline" >React</Badge>
                        </div>
                        <div className='flex'>
                            <MessageCircle size={16}/>
                            <p>8</p>
                            <Eye size={16}/>
                            <p>25</p>
                        </div>
                        </div>
                </Card>
            ))}
            
        </div>
    );
};

export default postslist;