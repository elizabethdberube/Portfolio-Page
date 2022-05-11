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
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!name) {
            setErrorMessage('NAme is empty')
        }
        setEmail('');
        setName('');
        setNote('');
    }

    return (

        <div>
            <form name="form1">
                <div class="form-group" >
                    <div class="form-group">
                        <label >Name</label>
                        <input class="form-control" id="exampleInputPassword1" placeholder="Name" value={name} name="name" onChange={handleInput} type="name"></input>
                    </div>
                    <label for="exampleInputEmail1">Email address</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type='email' name='email' onChange={handleInput} value={email}></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Note</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={note} name="note" onChange={handleInput} type="note" placeholder="Note"></textarea>
                </div>


                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>

            </form>
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        </div>
    )
}




export default Contact;