import React from 'react';
import photo from './images/photo.png';
import '../AboutMe.css';

const styles = {
    aboutStyle: {
        color: 'black'
    }
}

function Section() {

    return (<div className="media about">
        <div className="media-body">
            <h5 className="about" style={styles.aboutStyle}>About me</h5>
            <p style={styles.aboutStyle}> As an energetic, talented self-starter, I enjoy solving technical problems. As a New England native, I
                understand the unique challenges of the competitive business landscape of Greater Boston. Recently, I've
                been fortunate that my love of learning has allowed me to successfully teach myself a number of new
                technologies, and I look forward to each new challenge.</p>
        </div>
        <img src={photo} className="liz-img" alt="logo" />
    </div>
    )

}


export default Section;
