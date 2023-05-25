import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='mdiv'>

            <header>


                <h1 style={{ color: 'gold' }}>Home</h1>

                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link>



            </header>


        </div>
    )
}

export default Home 