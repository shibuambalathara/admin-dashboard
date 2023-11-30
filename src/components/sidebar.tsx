import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

import Sidebar_items from './sideBarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleLeft, faCircleRight, } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate=useNavigate()
  const loc=useLocation()
  const pathNm=loc?.pathname.replace(/\//g,"")
 

  const HandleClick=(path:string)=>{
  navigate(`${path}`)
  }

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };


  return (
    <div>
   {sidebarVisible ? 
   <div className='w-56 min-h-full bg-gray-700 space-y-5 pl-3 pt-3 pr-1 shadow-xl'>
<div className='bg-none flex justify-end shadow-inherit'  >  
  <button onClick={toggleSidebar} className='  bg-none text-white '>
  <FontAwesomeIcon icon={faBars} style={{ fontSize:24 }} />
  
      </button>
      </div>
      
      {Sidebar_items.map((item)=>{
        return(
          <>{item.path===pathNm?
          <div><button onClick={() => HandleClick(item.path)}  className='text-lg  text-start font-bold text-red-700  w-full '> {item?.iconType} {item.name}</button>  </div>
          :<div><button onClick={() => HandleClick(item.path)}  className='text-lg  text-start font-bold   w-full text-white'> {item?.iconType} {item.name}</button>  </div>
      }
          </>
          )
      })}
    </div>:
    <div className='bg-black h-full shadow-xl px-1' >  
    <div className='flex justify-end'>
     
    <button onClick={toggleSidebar} className='  bg-none text-white my-1 md:block hidden  '>
    <FontAwesomeIcon icon={faBars}  style={{ fontSize:24 }} />
   
        </button>
        </div>
        {Sidebar_items.map((item)=>{
         
        return(
          < div  >

          {item.path===pathNm?
          
          <div  className='my-5'><button onClick={() => HandleClick(item.path)}  className='  text-start font-bold text-red-500  w-full '>  {item?.iconType}</button>  </div>
          :<div  className='my-5 '><button onClick={() => HandleClick(item.path)}  className=' btn-ghost  text-start font-bold   w-full text-white'>   {item?.iconType}</button>  </div>
      }
          </div>
          )
      })}
        </div>
    }
    </div>
  )
}

export default Sidebar;
