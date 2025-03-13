'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Pagecontainer from '@/components/page-container';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseCategories } from '@/hooks/useCategories';
import { Category } from '@prisma/client';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Button } from '@/components/ui/button';

const WritePost = () => {
    const {data:session} = useSession();
    const {data:categories,isFetching}= UseCategories();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () =>{

    }
    
    if(!session){
        redirect('/login');
    }
    return (
        <Pagecontainer>
            <div className='flex flex-col justify-center p-10'>
                <h1 className='font-extrabold text-3xl self-center mb-4'>Write a post</h1>
                <input type="text" 
                name="title" 
                placeholder='title' 
                className='my-4'
                onChange={(e)=>setTitle(e.target.value)}/>
                {isFetching?<p>Loading</p>:
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Choisi une Catégorie"/>
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((categorie:Category)=>(
                            <SelectItem key={categorie.id} value={categorie.slug}>{categorie.title}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>}
                <ReactQuill className='my-4' theme="snow" value={content} onChange={setContent}/>
                <Button onAuxClick={handleSubmit}>Publish</Button>
            </div>
            
        </Pagecontainer>
    );
};

export default WritePost;