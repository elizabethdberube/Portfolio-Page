import React from 'react';

//className='nav-font' 

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className='nav-bar'>
            <div>
                <ul class="navbar-nav">
                    <li>
                        <a href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-font' href="#portfolio">Portfolio</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-font' href="#contact">Contact</a>
                    </li>
                    <li>
                        <a className='nav-font' href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}


export default Navigation;

