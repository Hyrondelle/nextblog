'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { signOut, useSession } from 'next-auth/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const logOut = () =>{
    signOut()
}
const ProfileButton = () => {
    const { data: session,status } = useSession();
    if(!session){
        console.log(status)
    return (
        <Link href="/login">
            <Button>
                Login
            </Button>
        </Link>
    );}
    console.log(status)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={session.user?.image || '/avatar.jpg'} />
                    <AvatarFallback>
                        {session.user?.name?.charAt(0)}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className='cursor-pointer' onClick={logOut}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default ProfileButton;