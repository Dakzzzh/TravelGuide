import react from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import blogData from '../assets/assets'
import { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import '../frontendCSS/content.css'

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const response = await fetch('https://travelguide-you9.onrender.com/getData', {
            method:'GET',
        })
        const data = await response.json()
        setBlogs(data)
        setLoading(false);
    }

    useEffect(() => {
        getData()
    }, [blogs])
    
    return(
        <>
            <div className='blog-list'>
                {loading && blogData.map((item, index) => {
                    return (<>
                    <Skeleton key={index} height={450} width={350} className='skeleton-item'/>
                    <Skeleton count={5}/>
                    </>)
                })}
                {blogs.map((item, index) => {
                    return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description}/>
                })}
            </div>
        </>
    )
}

export default BlogList
