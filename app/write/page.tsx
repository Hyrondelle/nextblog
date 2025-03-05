'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
const WritePost = () => {
    const {data:session} = useSession();
    console.log(session);
    
    if(!session){
        redirect('/login');
    }
    return (
        <div>
            write a post
        </div>
    );
};

export default WritePost;