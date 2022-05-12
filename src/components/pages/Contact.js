import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';


// contact page
function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInput = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setNote(inputValue);
        }
        handleValidation(event)
    };

    const handleValidation = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!name) {
            setErrorMessage('NAme is empty')
        }

    }

    return (

        <div>
            <form name="form1">
                <div className="form-group" >
                    <div className="form-group">
                        <label >Name</label>
                        <input className="form-control" id="exampleInputPassword1" onMouseUp={handleInput} placeholder="Name" value={name} name="name" type="name"></input>
                    </div>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onMouseUp={handleInput} placeholder="Enter email" type='email' name='email' value={email}></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Note</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onMouseUp={handleInput} value={note} name="note" type="note" placeholder="Note"></textarea>
                </div>


                <button type="submit" className="btn btn-primary" >Submit</button>

            </form>
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        </div>
    )
}




export default Contact;