import Response from '../components/airesponse.jsx'
import React, { useState } from 'react'

const Itinerary = () => {

    const [dataFromResponse, setDatafromResponse] = useState("")

    return(
        <>
            {dataFromResponse}
        </>
    )
}

export default Itinerary