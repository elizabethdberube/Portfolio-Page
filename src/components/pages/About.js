import React from 'react';
import photo from './images/photo.png';


function Project() {
    return (
        <div className='card' >
            <div className='card-body'>
                <h5 className='card-title'>About</h5>
                <p className='card-text'>As an energetic, talented self-starter, I enjoy solving technical problems. As a New England native, I
                    understand the unique challenges of the competitive business landscape of Greater Boston. Recently, I've
                    been fortunate that my love of learning has allowed me to successfully teach myself a number of new
                    technologies, and I look forward to each new challenge. </p>
                <img src={photo} className="liz-img" alt="logo" />
            </div>
        </div>
    )
}

export default Project;