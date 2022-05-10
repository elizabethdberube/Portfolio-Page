import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';
import Portfolio from './pages/Portfolio.js';



export default function Project() {
    const [currentPage, setCurrentPage] = useState('About');
    // method for checking current page and rendering corresponding section
    const renderPage = () => {
        if (currentPage === 'About') {
            return (<div>
                <Header />
                <About />
                <Footer />
            </div>
            );
        }
        if (currentPage === 'Portfolio') {
            return (<div>
                <Header />
                <Portfolio />
                <Footer />
            </div>
            );
        }
        if (currentPage === 'Contact') {
            return (<div>
                <Header />
                <Contact />
                <Footer />
            </div>
            );
        }
        return (<div>
            <Header />
            <Resume />
            <Footer />
        </div>
        );

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}