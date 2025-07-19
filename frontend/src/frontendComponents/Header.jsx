import '../frontendCSS/header.css'
import VenturAILogo from '../assets/VenturAILogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            <div className='header-wrapper'>
                <div className='header-content'>
                    <div className='logo-wrapper'>
                        <a href='/'><img src={VenturAILogo} height={60}></img></a>
                    </div>
                    <div className='menu-wrapper'>
                        <h1><a href='/'>Home</a> | <a href='/'>About</a> | <a href='/'>Contact</a></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header