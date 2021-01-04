import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =() => {
        if(window.innerWidth <=960) {
            setButton(false)
        } else{
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <h1>Privacy Monitoring</h1>
                <Link to="/" className="navbar-logo"></Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Components' className='nav-links' onClick={closeMobileMenu}>
                            Components
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contact us' className='nav-links' onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                    </li>
                 
                    

                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}


            </div>
        </nav>

            
        </>
    )
}

export default Navbar
