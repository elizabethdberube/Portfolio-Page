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
                        <a href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >Portfolio</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact</a>
                    </li>
                    <li>
                        <a href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Resume</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}


export default Navigation;

