import {useState} from 'react'

const PromptBar = ({ searchResponse }) => {
    const [city, setCity] = useState('');
    const [duration, setDuration] = useState('');
    const [travellers, setTravellers] = useState('');

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city, duration, travellers) {
            prompt = ("Generate me an itinerary to visit " + city + " for " + duration + " day(s) with " + travellers + " traveller(s) in markdown format")
            searchResponse(prompt)
            setCity('');
        }
    }

    return(
        <>
            <div className='prompt-bar-wrapper'>
                <form onSubmit={handleSubmit} className='form-element'>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='📍 Enter the city' required className='input-box'></input>
                    <input type='number' value={duration} onChange={(e) => setDuration(e.target.value)} placeholder='🕒 Enter the amount of duration' className='input-box'></input>
                    <input type='number' value={travellers} onChange={(e) => setTravellers(e.target.value)} placeholder='🚶Enter the number of travellers' className='input-box'></input>
                    <button type="submit" className='submit-button'>Generate the perfect plan!</button>
                </form>
            </div>
        </>
    )
}

export default PromptBar