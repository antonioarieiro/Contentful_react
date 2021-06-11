import React from 'react';
import './post.css';

const Post = ({content}) => {
    console.log(content)
    const { defaultImage, description, name } = content.fields
    return (
        <div className="container-post">
                <h1>{name}</h1>
                <img src={defaultImage.fields.file.url} />
                <p>{description}</p>
        </div>
    )
}

export default Post;
