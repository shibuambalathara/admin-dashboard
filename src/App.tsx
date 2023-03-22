import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar';
import Users from './pages/Users';
import { LoginPage } from './pages/login';
import { Home } from './pages/home';
import ProtectedRoutes from './utils/protectedRoute';
import AddEvents from './pages/events';
import AddUser from './components/user/addUser';
import Header from './components/header';
import UserDetails from './pages/userDetails';
import Payments from './pages/payments';
import Emd from './pages/emd';
import Vehicles from './pages/vehicles';
import Bids from './pages/bids';
import EventTypes from './pages/eventTypes';
import LocationsTable from './pages/locationsTable';
import States from './pages/states';
import ExcelUploads from './pages/excelUploads';
import Sellers from './pages/sellers';





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
              <Route path='events' element={<AddEvents />} />
              <Route path='add-user' element={<AddUser />} />
              <Route path='view-user/:id' element={<UserDetails />} />
              <Route path='payment' element={<Payments />} />
              <Route path='emd' element={<Emd />} />
              <Route path='vehicles' element={<Vehicles />} />
              <Route path='bids' element={<Bids />} />
              <Route path='event-types' element={<EventTypes />} />
              <Route path='locations' element={<LocationsTable />} />
              <Route path='states' element={<States />} />
              <Route path='excel-uploads' element={<ExcelUploads />} />
              <Route path='sellers' element={<Sellers />} />
          
            </Route>
          </Routes>
      </div> 
      </Router>
    </div>
  );
}

export default App;
