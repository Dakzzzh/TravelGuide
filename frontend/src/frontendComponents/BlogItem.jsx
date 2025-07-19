import {react, Image} from 'react';
import blogData from '../assets/assets.js'
import { Link } from 'react-router-dom';

const BlogItem = ({title, description, image, id}) => {
    return(
        <>
            <div className='blog-item'>
            <a href={`/blogs/${id}`}><img src={image} height={200} width={350}></img></a>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='read-more'>Read More</div>
                
            </div>
        </>
    )
}

export default BlogItem