import Header from './Header.jsx'
import Generator from './Generator.jsx'
import Content from './Content.jsx'
import VideoComponent from './VideoComponent.jsx'
import bgvideo from '../assets/bgVideo.mp4'

const HomePage = () => {
    return(
        <>
            <video loop autoPlay='true' muted className="myVideo">
                <source src={bgvideo} type="video/mp4" />
            </video>
            <VideoComponent />
            <Header />
            <Generator />
            <Content />
            <div className='invisible-div-2'></div>
        </>
    )
}

export default HomePage