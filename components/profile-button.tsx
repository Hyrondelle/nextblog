import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const profileButton = () => {
    return (
        <Link href="/login">
            <Button>
                Login
            </Button>
        </Link>
    );
};

export default profileButton;