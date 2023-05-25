import React, { useContext } from 'react'
import './Register.css';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';

function Register() {
    const data = useContext(myContext)
    const nav = useNavigate()
    const { name, setName, password, setPassword, email, setEmail } = data

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Submitted:', { name, email, password });
    };

    return (
        <div className='maindiv'>

            <form onSubmit={handleSubmit} className='form'>
                <div className='sm'>
                    <label htmlFor="name">Name:</label> <br />
                    <input
                        type="text"
                        id="name" register
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='name'
                    />
                </div>
                <div className='sm'>
                    <label htmlFor="email" >Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required

                    />
                </div>
                <div className='sm'>
                    <label htmlFor="password">Password:</label><br />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='password'
                    />
                </div><br /><br /><br />
                <button onClick={() => nav('/login')} type="submit">Register</button>

            </form>
        </div>
    );
}

export default Register