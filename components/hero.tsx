import React from 'react';
import bgphoto from '../public/backgrounddev.jpg'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';

const hero = () => {
    return (
        <div className='w-full relative'>
            <Image className='p-2 w-full h-[40vh] object-cover' src={bgphoto} alt='background picture'/>
            <div className='w-1/3 h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-500/80'>
                <p>Become A Better React Developper</p>
                <Input type="email" placeholder="Email"/>
                <Button>
                    Subscribe to our Newsletter
                </Button>
            </div>
        </div>
    );
};

export default hero;