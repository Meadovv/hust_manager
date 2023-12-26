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
import AuthorizationRoute from './Components/Routes/AuthorizationRoute';
import Logout from './Pages/Authentication/Logout';
import Create from './Pages/Create/Create';
import ApartmentView from './Pages/ApartmentProfile/ApartmentView';
import { ApartmentEdit } from './Pages/ApartmentEdit/ApartmentEdit';
import ApartmentRent from './Pages/ApartmentRent/ApartmentRent';

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
            path='/admin'
            element={
              <PrivateRoute children={<Profile />} />
            }
          />

          <Route
            path='/apartment/:apartmentId'
            element={
              <PrivateRoute children={<ApartmentView />} />
            }
          />

          <Route
            path='/apartment/:apartmentId/edit'
            element={
              <PrivateRoute children={<ApartmentEdit />} />
            }
          />

          <Route
            path='/apartment/:apartmentId/rent'
            element={
              <PrivateRoute children={<ApartmentRent />} />
            }
          />

          <Route
            path='/apartment/create'
            element={
              <AuthorizationRoute children={<Create />} role='owner'/>
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
