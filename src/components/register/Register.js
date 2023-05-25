import React, { useState } from 'react'
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Submitted:', { name, email, password });
    };

    return (
        <div className='maindiv'>

            <form onSubmit={handleSubmit} className='form'>
                <div className='sm'>
                    <label htmlFor="name">Name:</label> <br/>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='name'
                    />
                </div>
                <div className='sm'>
                    <label htmlFor="email" >Email:</label><br/>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        
                    />
                </div>
                <div className='sm'>
                    <label htmlFor="password">Password:</label><br/>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='password'
                    />
                </div><br/><br/><br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register