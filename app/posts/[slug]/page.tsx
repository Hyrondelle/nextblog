import React from 'react';

type props ={
    params:{
        slug:string
    }
}
const postPage = ({params}:props) => {
    const {slug} = params
    return (
        <div>
            post {slug}
        </div>
    );
};

export default postPage;