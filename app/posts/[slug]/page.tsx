"use client"

import Image from 'next/image';
import bgphoto from '@/public/backgrounddev.jpg'
import Pagecontainer from '@/components/page-container';
import { Avatar } from '@/components/ui/avatar';
import { Eye, MessageCircle } from 'lucide-react';
import { UsePost } from '@/hooks/usePost';


const postPage = ({params}:{params:{slug:string}}) => {
    const {slug} = params
    const {data:post,isFetching,error} = UsePost(slug)

    if(isFetching) return <p>Loading</p>
    if(error) return <p>Error</p>
    return (
        <Pagecontainer>
            <div className='w-full relative mt-4'>
                <Image className='rounded-2xl p-2 w-full h-[40vh] object-cover' src={bgphoto} alt='background picture'/>
                <div className='w-1/3 h-2/5 absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 bg-slate-500/80
                rounded-sm p-1 gap-1 flex flex-col justify-center'>
                    <div className='font-bold text-center text-4xl'>{slug}</div>  
                </div>
            </div>

            <div className='flex justify-between border-b p-4'>
                <div className='flex gap-2'>
                    <Avatar className='bg-teal-600 items-center justify-center text-xl ml-4'>
                    {/* {data?.author[0]} */}
                    </Avatar>
                    <div>
                        {/* <div>{post.author}</div> */}
                        <div className='text-slate-400'>posté le {post.createdAt}</div>
                    </div>
                </div>
                <div className='mr-4 flex items-center gap-1'>
                    <MessageCircle size={16}/>
                    {/* <p>{post.nbComments}</p> */}
                    <Eye size={16}/>
                    {/* <p>{post.nbLikes}</p> */}
                </div>
            </div>

            <div className='mt-4 pb-4 border-b'>
                {post.content} 
            </div>

            <div>
                <p className='font-extrabold mt-4'>Comments</p>
                <p className='mt-2'>Login to write a comment</p>
            </div>
        </Pagecontainer>
    );
};

export default postPage;