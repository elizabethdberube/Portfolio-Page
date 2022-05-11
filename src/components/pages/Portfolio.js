import React from 'react';
import blog from './images/blog.jpg'
import cinema from './images/cinema.jpg'
import editor from './images/editor.jpeg'
import music from './images/music.jpg'
import notes from './images/notes.png'
import weather from './images/weather.jpg'

// portfolio page
function Portfolio() {
    return (

        <div>
            <div className="picture">
                <div className="card text-white">
                    <img src={blog} className="card-img" alt="tech"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-3">Technically a Blog</h5>
                        <a href="https://technically-a-blog-2.herokuapp.com/" target="_blank" rel="noreferrer" className="links">Visit application here</a>
                        <a href="https://github.com/elizabethdberube/Technically-a-Blog" target="_blank" rel="noreferrer" className="links">Visit GitHub Repo </a>
                    </div>
                </div>
                <div className="card  text-white ">
                    <img src={cinema} className="card-img" alt="movie "></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-3">Movie Review</h5>

                        <a href="https://elizabethdberube.github.io/Movie-Review/" target="_blank" rel="noreferrer" className="links">Visit application here</a>
                        <a href="https://github.com/elizabethdberube/Movie-Review" target="_blank" rel="noreferrer" className="links">Visit GitHub Repo </a>
                    </div>
                </div>
                <div className="card text-white ">
                    <img src={editor} className="card-img" alt="tech "></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-3">J.A.T.E Text Editor</h5>

                        <a href="https://vast-sea-43373.herokuapp.com/" target="_blank" rel="noreferrer" className="links">Visit application here</a>
                        <a href="https://github.com/elizabethdberube/Slightly-Edited" target="_blank" rel="noreferrer" className="links">Visit GitHub Repo </a>

                    </div>
                </div>
            </div>
            <div className="picture2">
                <div className="card text-white">
                    <img src={music} className="card-img" alt="headphones"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-3">Practice Room</h5>

                        <a href="https://immense-savannah-04794.herokuapp.com/" target="_blank" rel="noreferrer" className="links">Visit application here</a>
                        <a href="https://github.com/elizabethdberube/PracticeRoom" target="_blank" rel="noreferrer" className="links">Visit GitHub Repo </a>
                    </div>
                </div>
                <div className="card  text-white">
                    <img src={notes} className="card-img" alt="note book"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-3">Taking Note</h5>

                        <a href="https://intense-cove-80644.herokuapp.com/" target="_blank" rel="noreferrer" className="links-2">Visit application here</a>
                        <a href="https://github.com/elizabethdberube/Taking-Note" target="_blank" rel="noreferrer" className="links-2">Visit GitHub Repo </a>
                    </div>
                </div>
                <div className="card  text-white">
                    <img src={weather} className="card-img" alt="weather"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-3">Weather Dashboard</h5>

                        <a href="https://elizabethdberube.github.io/Weather-Project/" target="_blank" rel="noreferrer" className="links">Visit application here</a>
                        <a href="https://github.com/elizabethdberube/Weather-Project" target="_blank" rel="noreferrer" className="links">Visit GitHub Repo </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;