"use client"
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { UseCategories } from '@/hooks/useCategories';
import { Category } from '@prisma/client';

const categories = () => {

    const {data:categories,isFetching,isError} = UseCategories()

    if(isFetching) return <p>Loading</p>
    if(isError) return <p>Error</p>
    return (
        <div className='flex flex-row gap-2'>
            {categories.map((categorie:Category)=>(
                        <div key={categorie.id}>
                        <Link 
                        href={'/categories/'+categorie.slug}>
                            <Button variant='outline'>
                            {categorie.slug}
                            </Button>
                        </Link>
                        </div>
                    ))}
        </div>
    );
};

export default categories;