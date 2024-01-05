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
import ApartmentCreate from './Pages/Apartment/ApartmentCreate/ApartmentCreate';
import ApartmentProfile from './Pages/Apartment/ApartmentProfile/ApartmentProfile';
import ApartmentEdit from './Pages/Apartment/ApartmentEdit/ApartmentEdit';
import ApartmentRent from './Pages/Apartment/ApartmentRent/ApartmentRent';
import RoomEdit from './Pages/Apartment/RoomEdit/RoomEdit';
import RoomView from './Pages/Apartment/RoomView/RoomView';
import ApartmentManage from './Pages/Apartment/ApartmentManage/ApartmentManage';

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
            path='/apartment/:apartmentId/view'
            element={
              <PrivateRoute children={<ApartmentProfile />} />
            }
          />

          <Route
            path='/apartment/:apartmentId/manage'
            element={
              <PrivateRoute children={<ApartmentManage />} />
            }
          />

          <Route
            path='/apartment/:apartmentId/edit'
            element={
              <PrivateRoute children={<ApartmentEdit />} />
            }
          />

          <Route
            path='/room/:roomId/view'
            element={
              <PrivateRoute children={<RoomView />} />
            }
          />

          <Route
            path='/room/:roomId/edit'
            element={
              <PrivateRoute children={<RoomEdit />} />
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
              <AuthorizationRoute children={<ApartmentCreate />} role='owner'/>
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
