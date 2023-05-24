

import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
      </Routes  >
    </BrowserRouter>
  );
}

export default App;
