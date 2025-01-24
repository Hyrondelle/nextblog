import Pagecontainer from '@/components/page-container';
import { Button } from '@/components/ui/button';
import { Github,Mails } from 'lucide-react';

const login = () => {
    return (
        
            <Pagecontainer>
                <div className='flex flex-col py-10 mx-auto items-center'>
                    <div className='font-extrabold text-3xl max-w-md mb-4'>
                    Login
                    </div>
                    <div className='flex flex-col gap-4 max-w-md'>
                    <Button>
                        <Github size={16} />Signin With Github
                    </Button>
                    <Button>
                        <Mails size={16} />Signin With Google
                    </Button>
                    </div>
                </div>
            </Pagecontainer>
        
    );
};

export default login;