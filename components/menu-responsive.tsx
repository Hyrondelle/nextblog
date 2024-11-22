import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { CATEGORIES } from '@/utils/categories';

const menuresponsive = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='h-6 w-6 md:hidden'/>
            </SheetTrigger>
            <SheetContent side={'left'}>
                <div className='flex flex-col gap-4'>
                    <Link href="/write">
                        <Button variant="ghost">
                            Write A Post
                        </Button>
                    </Link>
                    <p>Catégories</p>
                    {CATEGORIES.map((category)=>(
                        <Link href={"/categories/"+category.slug}
                            key={category.id}
                            className='block px-2 py-1 text-lg'
                        ><Button variant='ghost'>{category.name}</Button></Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default menuresponsive;