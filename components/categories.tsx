import { CATEGORIES } from '@/utils/categories';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const categories = () => {
    return (
        <div className='flex flex-row gap-2'>
            {CATEGORIES.map((categories)=>(
                        <div key={categories.id}>
                        <Link 
                        href={'/categories/'+categories.slug}>
                            <Button variant='outline'>
                            {categories.name}
                            </Button>
                        </Link>
                        </div>
                    ))}
        </div>
    );
};

export default categories;