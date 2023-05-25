import React, { useContext, useState } from 'react';
import './Login.css';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';


function Login() {
  const data = useContext(myContext);
  const nav = useNavigate();


  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });

  const { email, password } = inputValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {

    data.email === email && data.password === password ? nav('/') : alert('User Not Found !!!');
    e.preventDefault();
  };

  return (
    <div className='maindiv'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='sm'>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='sm'>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            required
            placeholder='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div><br /><br /><br />
        <button className='btn' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
