
import { CATEGORIES } from '@/utils/categories';
import Pagecontainer from './page-container';
import Link from 'next/link';
import { Button } from './ui/button';

const footer = () => {
    return (
        <footer className='p-4 border-t'>
            <Pagecontainer >
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <h1 className='text-2xl font-bold
                        text-transparent bg-clip-text bg-gradient-to-br from-red-400 to to-blue-600'>
                        NextBlog
                    </h1>
                    <div className='flex flex-col md:flex-row gap-2'>
                    {CATEGORIES.map((categories)=>(
                        <div key={categories.id}>
                        <Link 
                        href={'/categories/'+categories.slug}>
                            <Button variant='ghost'>
                            {categories.name}
                            </Button>
                        </Link>
                        </div>
                    ))}
                    <Button variant='ghost'>
                        <Link href='/write'>
                            Write A Post
                        </Link>
                    </Button>
                    </div>
                </div>
            </Pagecontainer>
        </footer>
    );
};

export default footer;