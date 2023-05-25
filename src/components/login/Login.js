import React, { useContext } from 'react';
import './Login.css';
import { myContext } from '../Context';

function Login() {
  const data = useContext(myContext)
  const { name, setName, password, setPassword, email, setEmail } = data
  console.log(name, password, email);

  return (


    <div className='maindiv'>



      <form className='form'>

        <div className='sm'>
          <label htmlFor="email" >Email:</label><br />
          <input
            type="email"
            id="email"

            required

          />
        </div>
        <div className='sm'>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"

            required
            placeholder='password'
          />
        </div><br /><br /><br />
        <button className='btn' type="submit">Login</button>
      </form>
    </div>

  )
}

export default Login