import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown'
import api from "../api.js"
import PromptBar from './PromptBar.jsx';
import '../frontendCSS/response.css'
import '../frontendCSS/itinerary.css'

const AiResponse = () => {
    const [text, setText] = useState("");

    const fetchResponse = async () => {
        const response = await api.get('/response')
        setText(response.data);
    }

    const searchResponse = async (prompt) => {
        await api.post('/search', { prompt : prompt });
        fetchResponse();
    }

    useEffect(() => {
        text
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if (text !== ""){setText("")}
    }


    if (text==""){
    return(
         <>
            <PromptBar searchResponse={searchResponse}/>
         </>
    )}
    return (
        <>
            <div className='itinerary-wrapper'>
                <button onClick={handleClick} className='close-button'>x</button>
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </>
    )
}

export default AiResponse