import React, { useContext } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { myContext } from '../Context';

function Home() {
    const user = useContext(myContext)
    console.log(user);
    return (
        <div className='mdiv'>
            {
                user.name !== '' ?


                    <div>
                        <header>

                            <h1 style={{ color: 'gold' }}>Home</h1>
                            <Link to={'/register'}>Register</Link>
                            <Link to={'/login'}>Login</Link>

                        </header>
                        <h1>Welcome,{user.name}</h1></div>
                    :
                    <header>

                        <h1 style={{ color: 'gold' }}>Home</h1>
                        <Link to={'/register'}>Register</Link>
                        <Link to={'/login'}>Login</Link>

                    </header>}


        </div>


    )
}

export default Home






