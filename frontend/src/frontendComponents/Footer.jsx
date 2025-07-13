import '../frontendCSS/footer.css'
import VentureLogo from '../assets/VenturAILogo.png'

const Footer = () => {
    return(
        <>
            <div className="footer-wrapper">
                <img src={VentureLogo} height={80} className='LogoClass'></img>
                <div className="footer-text">
                    <p>© 2023 VentureAI. All rights reserved.</p>
                    <p>Made with ❤️ by the VentureAI Team</p>
                    <p>Contact us at: <a href="mailto:dakshdeepsingh014@gmail.com">dakshdeepsingh014@gmail.com</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer