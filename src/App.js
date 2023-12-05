import './App.css'


import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import About from './Pages/About/About';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={<Home />}
          />


          <Route 
            path='/login' 
            element={<Login />}
          />

          <Route 
            path='/register' 
            element={<Register />}
          />

          <Route 
            path='/about' 
            element={<About />}
          />

          <Route
            path='*'
            element={<Error />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
