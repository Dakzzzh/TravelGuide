import { useEffect, useState } from 'react';
import Header from './Header.jsx'
import '../frontendCSS/admin.css'

import axios from 'axios';

const url = "http://localhost:5000/blogging"

const TryoutBlog = () => 
{
    const [image, setImage] = useState( {image : ""} );
    const [displayImage, setDisplayImage] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescripiton] = useState("");
    const [form, setForm] = useState([]);


    const [tab, setTab] = useState("adding");

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/blogging', {
            method:"POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await response.text();
        console.log(form)
        alert("Blog added successfully");
        setTitle("");
        setDescripiton("");
        setImage({image: ""});
        setForm([]);
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        console.log(base64)
        setForm({
            ...form,
            title: title,
            description: description,
            image: base64
        })
        console.log(form)
    }

    const getData = async () => {
        const response = await fetch('http://localhost:5000/getData', {
            method:'GET',
        })
        const data = await response.json()
        setDisplayImage(data)
    }

    useEffect(() => {
        getData()
    }, [displayImage])

    if (tab === "adding") {
        return(
        <>
            <Header />
            <div className='admin-wrapper'>
                <div className='admin-side'>Admin Panel
                    <ul>
                        <li onClick={() => {setTab("adding")}} className={tab === "adding" ? "active" : ""}>Add Blog</li>
                        <li onClick={() => {setTab("deleting")}} className={tab === "deleting" ? "active" : ""}>Delete Blog</li>
                    </ul>
                </div>
                <div className='admin-form'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='title' onChange={(e) => {setTitle(e.target.value)}} className='form-input' placeholder='Enter the title of the blog'></input>
                        <textarea name='description' onChange={(e) => {setDescripiton(e.target.value)}} placeholder='Enter the contents of the blog' className='text-area'></textarea>
                        <input type="file" name='image' accept='.jpeg, .png, .jpg' onChange={(e) => {handleFileUpload(e)}} className='file-submit'></input>
                        <button type='submit' className='submit-button'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
    }
    else if (tab === "deleting"){
        return(<>
            <Header />
            <div className='admin-wrapper'>
                <div className='admin-side'>Admin Panel
                    <ul>
                        <li onClick={() => {setTab("adding")}} className={tab === "adding" ? "active" : ""}>Add Blog</li>
                        <li onClick={() => {setTab("deleting")}} className={tab === "deleting" ? "active" : ""}>Delete Blog</li>
                    </ul>
                </div>
                <div className='delete-form'>
                    <h1>Delete Blog</h1>
                    <div className='delete-list'>
                        {displayImage.map((item, index) => {
                            return(
                                <div key={index} className='delete-item'>
                                    <img src={item.image} height={100} width={100} alt="Blog Image"></img>
                                    <h3>{item.title}</h3>
                                    <button className='delete-button' onClick={async () => {
                                        const response = await fetch(`http://localhost:5000/deleteBlog/${item._id}`, {
                                            method: 'DELETE',
                                        })
                                        const data = await response.json();
                                        console.log(data);
                                        getData();
                                    }}>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>)
    }

    
}

export default TryoutBlog

function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
}