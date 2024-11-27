import React from 'react';
import bgphoto from '../public/backgrounddev.jpg'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';

const hero = () => {
    return (
        <div className='w-full relative'>
            <Image className='p-2 w-full h-[40vh] object-cover' src={bgphoto} alt='background picture'/>
            <div className='w-1/3 h-2/5 absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 bg-slate-500/80
            rounded-sm p-1 gap-1 flex flex-col'>
                <div className='font-extrabold text-center'>Become A Better React</div>
                <div className='font-extrabold text-center'>Developper</div>
                <Input type="email" placeholder="Email"
                className='bg-slate-50'/>
                <Button className='text-xs'>
                    Subscribe to our Newsletter
                </Button>
            </div>
        </div>
    );
};

export default hero;