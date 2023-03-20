import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar';
import Users from './pages/Users';
import { LoginPage } from './pages/login';
import { Home } from './pages/home';
import ProtectedRoutes from './utils/protectedRoute';
import AddEvents from './pages/addEvents';
import AddUser from './components/user/addUser';
import Header from './components/header';
import UserDetails from './pages/userDetails';



function App() {
 
  return (
    <div  >

      <Router >

       
   <Header/>
        <div className='flex w-screen ' > 
      <Sidebar />  
          <Routes>
            <Route path='login' element={<LoginPage />} />
        
            <Route element={<ProtectedRoutes />}>
              <Route path='/'  element={<Home />} />
              <Route path='users' element={<Users />} />
              <Route path='add-events' element={<AddEvents />} />
              <Route path='add-user' element={<AddUser />} />
              <Route path='view-user/:id' element={<UserDetails />} />
          
            </Route>
          </Routes>
      </div> 
      </Router>
    </div>
  );
}

export default App;
