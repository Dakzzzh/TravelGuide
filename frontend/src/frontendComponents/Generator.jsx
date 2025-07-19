import '../frontendCSS/generator.css'
import Response from '../components/airesponse.jsx'
import { useState } from 'react'

const Generator = () => {
    const [clicked, setClicked] = useState(false)

    const changeClicked = () => {
        setClicked(!clicked)
    }
    return(
        <>
            {clicked ? <div className='generator-wrapper'>
                <Response />
            </div> : <div className='landing-button'>
                   <h1>Travel the world, perfectly.</h1>
                    <button onClick={changeClicked} className='button-travelgen'>Go to TravelGen</button>
                    </div>}
            
        </>
    )
    }

export default Generator