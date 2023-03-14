import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data.js'
import {FaBars} from 'react-icons/fa'
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
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            {/* toggle button menu icon */}
            <button className='nav_toggle-btn'>
                <FaBars/>
            </button>
        </div> 
    </nav>
  )
}

export default NavBar