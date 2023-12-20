import './App.css'


import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import About from './Pages/About/About';
import Profile from './Pages/Profile/Profile';

import PrivateRoute from './Components/Routes/PrivateRoute';
import AuthenticationRoute from './Components/Routes/AuthenticationRoute'
import Logout from './Pages/Authentication/Logout';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={
              <PrivateRoute children={<Home />} />
            }
          />


          <Route 
            path='/login' 
            element={
              <AuthenticationRoute children={<Login />}/>
            }
          />

          <Route 
            path='/register' 
            element={
              <AuthenticationRoute children={<Register />}/>
            }
          />

          <Route 
            path='/logout' 
            element={
              <Logout />
            }
          />

          <Route 
            path='/about' 
            element={<About />}
          />


          <Route
            path='/profile/:profileId'
            element={
              <PrivateRoute children={<Profile />} />
            }
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
