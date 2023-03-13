import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import './navbar.css'


const NavBar = () => {
  return (
    <nav>
        <div className='container nav_container'>
            <Link to='/' className='logo'>
                <img src={Logo} alt='nav-logo' />
            </Link> 
        </div> 
    </nav>
  )
}

export default NavBar