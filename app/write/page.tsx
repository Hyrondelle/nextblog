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
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';


const WritePost = () => {
    const router = useRouter()
    const [title, setTitle] = useState('');
    const [image, setImage] = useState<File>();
    const [imagePreview, setImagePreview] = useState<string|null>(null);
    const [contentWhithP, setContent] = useState('');
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
            router.push("/")
        },
    })
    

    const handleSubmit = async (e:SyntheticEvent) =>{
        e.preventDefault()
        const content = contentWhithP.replace('<p>',"").replace('</p>',"")
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
                <div>
                    {imagePreview && <img src={imagePreview} alt="image preview" className='w-20 h-20 rounded-full'/>}
                    <Input type="file" onChange={(e)=>setImage(e.target.files?.[0])}/>
                </div>
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
                <ReactQuill className='my-4' theme="snow" value={contentWhithP} onChange={setContent}/>
                <Button onClick={handleSubmit}>Publish</Button>
            </div>
            
        </Pagecontainer>
    );
};

export default WritePost;