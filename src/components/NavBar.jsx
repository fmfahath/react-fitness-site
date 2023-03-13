import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data.js'
import './navbar.css'


const NavBar = () => {
  return (
    <nav>
        <div className='container nav_container'>
            {/* Logo */}
            <Link to='/' className='logo'>
                <img src={Logo} alt='nav-logo' />
            </Link> 

            {/* nav links */}
            <ul className='nav_links'>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div> 
    </nav>
  )
}

export default NavBar