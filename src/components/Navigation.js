import React from 'react';

function Navigation() {
    return (
        <nav class="nav-bar">
            <div>
                <ul class="navbar-nav">
                    <li>
                        <a class="nav-font item" href="#resume">Resume</a>
                    </li>
                    <li>
                        <a class="nav-font item"
                            href="https://www.linkedin.com/in/elizabeth-berube-b30022190">LinkedIn</a>
                    </li>
                    <li>
                        <a class="nav-font item" href="https://github.com/elizabethdberube">GitHub Page</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-font item" href="#projects">Recent Projects</a>
                    </li>
                    <li>
                        <a class="nav-font item" href="#contact">Contact Information</a>
                    </li>
                </ul>
            </div>
        </nav>


    );
}


export default Navigation;

