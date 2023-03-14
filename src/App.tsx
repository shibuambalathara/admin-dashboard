import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar';
import Users from './pages/Users';
import { LoginPage } from './pages/login';
import { Home } from './pages/home';
import PrivateRoutes from './utils/protectedRoute';
import AddEvents from './pages/addEvents';
import AddUser from './components/users/addUser';
import Header from './components/header';



function App() {
  return (
    <div  >

      <Router >

       
      <Header/>
        <div className='flex w-screen ' > 
      <Sidebar />  
          <Routes>
        
            <Route element={<PrivateRoutes />}>
              <Route path='/'  element={<Home />} />
              <Route path='users' element={<Users />} />
              <Route path='add-events' element={<AddEvents />} />
              <Route path='add-user' element={<AddUser />} />
          
            </Route>
            <Route path='login' element={<LoginPage />} />
          </Routes>
      </div> 
      </Router>
    </div>
  );
}

export default App;
