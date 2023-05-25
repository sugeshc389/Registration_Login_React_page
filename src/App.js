

import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { myContext } from './components/Context';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const states = { name, setName, password, setPassword, email, setEmail }
  return (
    <BrowserRouter>
      <myContext.Provider value={states}>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
        </Routes  >
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
