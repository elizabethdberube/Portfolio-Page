import React from 'react';

function Navigation() {
    return (
        <nav className='nav-bar'>
            <div>
                <ul class="navbar-nav">
                    <li>
                        <a className='nav-font' href="#resume">Resume</a>
                    </li>
                    <li>
                        <a className='nav-font' href="https://www.linkedin.com/in/elizabeth-berube-b30022190">LinkedIn</a>
                    </li>
                    <li>
                        <a className='nav-font' href="https://github.com/elizabethdberube">GitHub Page</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-font' href="#projects">Recent Projects</a>
                    </li>
                    <li>
                        <a className='nav-font' href="#contact">Contact Information</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}


export default Navigation;

