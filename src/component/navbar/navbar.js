import React from 'react'
import Logo from '../../assets/logo512.png'
import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid navbar-box">
                    <div className='d-flex align-items-center'>
                        <div className='logo-wrapper me-2'>
                            <img src={Logo} alt="" />
                        </div>
                        <a className="navbar-brand logo-title" href="#">React</a>
                    </div>
                    <div className="">
                        <p className='m-0 john-wick'>John Wick</p>
                        <p className='m-0 dev'>Developer</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
