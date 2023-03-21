import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar px-2 navbar-expand-lg navbar-light bg-dark">
                    <Link className="navbar-brand text-light" to="/">ISKCON Shirpur</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/join">Join Us</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar
