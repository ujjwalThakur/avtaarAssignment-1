import { ReactComponent as Logo } from './assets/avtaarLogo.svg'
import './Header.css'

const Header = ({ links }) => {

    return <div className='header'>
        <div className='logo'>
            <Logo />
        </div>
        <div className='header-links-container'>
            {
                links.map((link) => <div className='header-link'><a href={link.href}>{link.text.toUpperCase()}</a></div>)
            }
        </div>
    </div>
}

export default Header