import React from 'react';
import Pagecontainer from './page-container';
import { HeaderNavigation } from './header-navigation';
import ProfileButton from './profile-button';
import ResponsiveMenu from './menu-responsive'
import { ToggleTheme } from './toggle-theme';
import Link from 'next/link';

const header = () => {
    return (
        <header className='p-4 border-b'>
            <Pagecontainer>
                <div className='flex items-center justify-between w-full'>

                    <div className='flex items-center gap-2'>
                        <ResponsiveMenu/>
                        <Link href={"/"}>
                        <h1 className='text-2xl font-bold
                        text-transparent bg-clip-text bg-gradient-to-br from-red-400 to to-blue-600'>
                        NextBlog
                        </h1></Link>
                    </div>
                    <HeaderNavigation/>
                    <div className='flex items-center gap-2'>
                        <ToggleTheme/>
                        <ProfileButton/>

                    </div>
                </div>
            </Pagecontainer>
        </header>
    );
};

export default header;