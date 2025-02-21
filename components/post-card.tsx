import Link from "next/link";
import { Card } from "./ui/card";
import Image from "next/image";
import { Eye, MessageCircle } from "lucide-react";
import { Post } from "@prisma/client";

const PostCard = (post:Post) => {
    return (
        <Link href={"/posts/"+post.slug}>
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
    );
};

export default PostCard;