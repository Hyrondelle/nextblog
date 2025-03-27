'use client';
import React, { SyntheticEvent, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Pagecontainer from '@/components/page-container';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseCategories } from '@/hooks/useCategories';
import { Category, Post } from '@prisma/client';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios'


const WritePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [catSlug, setCatSlug] = useState('');

    const sendPost = async(newPost:Partial<Post>) =>{
        const data = await axios.post("/api/posts",newPost)
        return data;
    }

    const {data:session} = useSession();
    const {data:categories,isFetching}= UseCategories();
    const {mutate}= useMutation({
        mutationFn:sendPost,
        onSuccess(data) {
            console.log("data on success",data);
            
        },
    })

    const handleSubmit = async (e:SyntheticEvent) =>{
        e.preventDefault()
        if(title!==""&& title!==null&& content!==""&&content!==null&&catSlug!==""&&catSlug!==null){
        await mutate({
            title,
            content,
            catSlug,
            slug:title.trim().toLocaleLowerCase().replace(" ","-"),
            image:"/backgrounddev.jpg"
        })
    }
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
                <Select onValueChange={(e)=>setCatSlug(e)}>
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
                <Button onClick={handleSubmit}>Publish</Button>
            </div>
            
        </Pagecontainer>
    );
};

export default WritePost;