import React from 'react';

type Props ={
    params:{
        slug:string
    }
}

const categoriesPage = async({params}:Props) => {
    const {slug} = params
    return (
        <div>
            categorie {slug}
        </div>
    );
};

export default categoriesPage;