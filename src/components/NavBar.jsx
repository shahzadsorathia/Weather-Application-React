
import { Link } from 'react-router-dom'

import React from 'react'

function NavBar() {
    return (
        <nav id="nav-bar">
            <ul>
                <li>
                    <Link to="/Home"> Home </Link>
                </li>
               
                <li>
                    <Link to="/Weather"> Weather App </Link>
                </li>
                <li>
                    <Link to="/Calculator"> Calculator </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
