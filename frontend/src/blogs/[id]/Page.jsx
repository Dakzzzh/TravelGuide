import {React, useEffect, useState} from 'react'
import Header from '../../frontendComponents/Header'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import blogData from '../../assets/assets.js'
import { set } from 'mongoose'

const Page = () => {
    const {id} = useParams();

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchBlogData = async () => {
        const response = await fetch(`https://travelguide-you9.onrender.com/getBlog/${id}`, {
            method: 'GET',
        })
        const data = await response.json();
        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchBlogData();
    }, []) 

    return(
        <>
            {<Header />}
            <div className='page-wrapper'>
                <div className='background-div'>
                    <h1>{data.title || <Skeleton />}</h1>
                </div>
                <img src={data.image} height={300} className='image-class'></img>
            </div>
            {loading && <Skeleton height={350} width={600} className='skeleton-class'/>}
            {loading ? "" : <div className='invisible-div'></div>}
            <div className='description-div'>
                {loading && <Skeleton count={5} />}
                <ReactMarkdown>{data.description}</ReactMarkdown>
            </div>
        </>
    )
}

export default Page
