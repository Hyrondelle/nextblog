import Image from 'next/image';
import bgphoto from '@/public/backgrounddev.jpg'
import Pagecontainer from '@/components/page-container';

type props ={
    params:{
        slug:string
    }
}
const post = {
    
        id: 1,
        category: 'TypeScript',
        title: 'Introduction à TypeScript',
        caption: 'Découvrez comment TypeScript peut améliorer votre développement JavaScript.',
        date: '2023-10-01',
        minuteToRead: 5,
        author: 'Jean Dupont',
        nbLikes: 120,
        nbComments: 10,
        slug: 'introduction-a-typescript',
        url: 'https://example.com/introduction-a-typescript',
        content:"JavaScript est un langage de script, multi-plateforme et orienté objet. C'est un langage léger qui doit faire partie d'un environnement hôte (un navigateur web par exemple) pour qu'il puisse être utilisé sur les objets de cet environnement.JavaScript contient une bibliothèque standard d'objets tels que Array, Date, et Math, ainsi qu'un ensemble d'éléments de langage tels que les opérateurs, les structures de contrôles et les instructions. "
    }

const postPage = ({params}:props) => {
    const {slug} = params
    return (
        <Pagecontainer>
            <div className='w-full relative'>
                <Image className='p-2 w-full h-[40vh] object-cover' src={bgphoto} alt='background picture'/>
                <div className='w-1/3 h-2/5 absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 bg-slate-500/80
                rounded-sm p-1 gap-1 flex flex-col justify-center'>
                    <div className='font-bold text-center text-4xl'>{slug}</div>  
                </div>
            </div>

            <div className=''>

            </div>
        </Pagecontainer>
    );
};

export default postPage;