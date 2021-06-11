import React from 'react';
import Post from './Post'

const Posts = ({posts}) => {
    return (
        <div>
            {
                posts.map((content,index) => <Post content={content} key={index}/>)
            }
        </div>
    )
}

export default Posts;
