import React from 'react';
import blog from './images/blog.jpg'
import movie from './images/movie.jpg'
import practiceroom from './images/practiceroom.jpg'
import tech from './images/tech.jpg'
import notes from './images/notes.jpg'
import weather from './images/weather.jpg'

// portfolio page
function Portfolio() {
    return (
        <div >
            <div className="picture">
                <img src={blog} class="rounded float-start" alt="blog picture"></img>
                <img src={practiceroom} class="rounded float-end" alt="practice room picture" ></img>
                <img src={movie} class="rounded float-end" alt="movie picture" ></img>
            </div>


            <div className="picture2">
                <img src={tech} class="rounded float-end" alt="text editor" ></img>
                <img src={notes} class="rounded float-end" alt="notes image" ></img>
                <img src={weather} class="rounded float-end" alt="weather image" ></img>
            </div>
        </div>
    )
}

export default Portfolio;