import React, { ReactNode } from 'react';

const pagecontainer = ({children}:{children:ReactNode}) => {
    return (
        <div className='mx-auto w-full max-w-7xl'>
           {children} 
        </div>
    );
};

export default pagecontainer;