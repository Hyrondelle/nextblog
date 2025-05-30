'use client'

import { useState, SyntheticEvent } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import axios from 'axios'
import { useMutation } from '@tanstack/react-query';
import { Comment } from '@prisma/client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { UseComments } from '@/hooks/useComments';

const Comments = ({postSlug}:{postSlug:string}) => {
    const [commentary, setCommentary] = useState('');
    const {status} = useSession();
    const {data:comments,isFetching,isError} = UseComments(postSlug)
    const sendComment = async(newComment:Partial<Comment>) =>{
        const data = await axios.post("/api/comments",newComment)
        return data;
    }

    const {mutate,isPending}= useMutation({
        mutationFn:sendComment,
        onSuccess(data) {
            console.log("data on success",data);
            
        },
    })
    const handleSubmit = async (e:SyntheticEvent) =>{
        e.preventDefault()
        
        if(commentary!==""&& commentary!==null ){
        await mutate({
            commentary,
            postSlug,
            
            })
        }
    }
    if(isFetching) return <p>Loading</p>
    if(isError) return <p>Error</p>
    return (
        <div className='flex justify-center'>
                <div className='w-11/12 flex flex-col gap-2'>
                    <p className='font-extrabold mt-4 ml-2 text-2xl'>Comments</p>
                    {status==="authenticated" ? (
                        <div>
                    <Textarea onChange={(e)=>setCommentary(e.target.value)} className='mx-auto' placeholder='any comments?'/>
                    <Button onClick={handleSubmit}
                    disabled={commentary==="" || isPending}
                    className='w-2/12 mb-2'>
                        Add your comment
                    </Button>
                    </div>
                    ):(
                        <Link href="/login">
                            you must login for add a comment
                        </Link>
                    )}
                </div>
                {comments.map((comment:Comment)=>(
                    <div key={comment.id}>
                        <p>{comment.createdAt.toLocaleDateString()}</p>
                        <p>{comment.commentary}</p>
                    </div>
                ))}
            </div>
    );
};

export default Comments;