"use client"

import Image from 'next/image';
import Pagecontainer from '@/components/page-container';
import { Avatar } from '@/components/ui/avatar';
import { Eye, MessageCircle } from 'lucide-react';
import { UsePost } from '@/hooks/usePost';
import { use } from 'react';
import Comments from '@/components/comments';
const PostPage = ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = use(params)
    const {data:post,isFetching,error} = UsePost(slug)

    const transformDate = (date:string) =>{
        const updateDate = new Date(date).toLocaleDateString()
        return updateDate
    }
    
    if(isFetching) return <p>Loading</p>
    if(error) return <p>Error</p>
    return (
        <Pagecontainer>
            <div className='mx-[10vw] w-[80vw] h-[40vh] relative mt-4'>
                <div>
                <Image className=' rounded-2xl p-2 w-full h-[40vh] object-cover' fill
                src={post.image} alt='background picture'/>
                </div>
                <div className='w-1/3 h-2/5 absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 bg-slate-500/80
                rounded-sm p-1 gap-1 flex flex-col justify-center'>
                    <div className='font-bold text-center text-4xl'>{slug}</div>  
                </div>
            </div>

            <div className='flex justify-between border-b p-4'>
                <div className='flex gap-2'>
                    <Avatar className='bg-teal-600 items-center justify-center text-xl ml-4'>
                    {post.userMail[0]}
                    </Avatar>
                    <div>
                        <div>{post.userMail}</div> 
                        <div className='text-slate-400'>posté le {transformDate(post.createdAt)}</div>
                    </div>
                </div>
                <div className='mr-4 flex items-center gap-1'>
                    <MessageCircle size={16}/>
                    {post.nbComments}
                    <Eye size={16}/>
                    {post.view}
                </div>
            </div>

            <div className='mt-4 ml-3 pb-4 border-b'>
                {post.content} 
            </div>

            <Comments postSlug={slug}/>
        </Pagecontainer>
    );
};

export default PostPage;