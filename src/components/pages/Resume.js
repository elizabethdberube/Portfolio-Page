import React from 'react';

// resume page
function Resume() {
    return (
        <div className='card' >
            <div className='card-body'>


                <h5 className='card-title'>Front-end Proficiences</h5>

                <p className='card-text'>HTML </p>
                <p className='card-text'>CSS </p>
                <p className='card-text'>React </p>
                <p className='card-text'>JavaScript </p>
                <p className='card-text'>JQuery </p>
                <p className='card-text'>Bootstrap </p>

                <p class="lead"></p>
                <hr class="my-4"></hr>
                <h5 className='card-title'>Back-end Proficiences</h5>

                <p className='card-text'>APIs </p>
                <p className='card-text'>Express </p>
                <p className='card-text'>Node </p>
                <p className='card-text'>MySQL, Sequelize </p>
                <p className='card-text'>MongoDB, Mongoose </p>
                <p className='card-text'>GraphQL </p>
                <p className='card-text'>REST </p>
                <p class="lead"></p>
                <hr class="my-4"></hr>
                <h5 className='card-title'>Resume</h5>

                <a href="Berube.pdf" download="Berube" id="resume"
                    class="btn contact">Download my resume</a>
            </div>
        </div>
    )
}

export default Resume;