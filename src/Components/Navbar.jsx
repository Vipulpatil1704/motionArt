import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import navLogo from '../assets/motionarteffect-img2.png'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 selectable">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img className="navbrand-logo" src={navLogo} alt=""/><span className='navbrand-first'>envato</span><span className='navbrand-second'>market</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <Link className="nav-link btn-lg buy-button" to="#">Buy Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}
