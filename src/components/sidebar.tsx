import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

import Sidebar_items from './sideBarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleLeft, faCircleRight, } from '@fortawesome/free-regular-svg-icons';
const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate=useNavigate()
  const loc=useLocation()
  const pathNm=loc?.pathname.replace(/\//g,"")
  console.log(pathNm,"location")

  const HandleClick=(path:string)=>{
  navigate(`${path}`)
  }

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };


  return (
    <div>
   {sidebarVisible ? <div className={`w-64 min-h-full bg-gray-700 space-y-5 pl-3 pt-3`}>
<div className='bg-none flex justify-end'  >  
  <button onClick={toggleSidebar} className='  bg-none text-white '>
  <FontAwesomeIcon icon={faCircleLeft} style={{ fontSize:24 }} />
  
      </button>
      </div>
      
      {Sidebar_items.map((item)=>{
        return(
          <>{item.path===pathNm?
          <div><button onClick={() => HandleClick(item.path)}  className='text-lg  text-start font-bold text-red-500 my-2 w-full '> {item.name}</button>  </div>
          :<div><button onClick={() => HandleClick(item.path)}  className='text-lg  text-start font-bold my-2  w-full text-white'> {item.name}</button>  </div>
      }
          </>
          )
      })}
    </div>:
    <div className='bg-black h-full' >  
    <div className='flex justify-end'>
     
    <button onClick={toggleSidebar} className='  bg-none text-white my-3'>
    <FontAwesomeIcon icon={faCircleRight} style={{ fontSize:24 }} />
   
        </button>
        </div>
        {Sidebar_items.map((item)=>{
         
        return(
          < div  className='space-y-20'>

          {item.path===pathNm?
          
          <div  className='my-8'><button onClick={() => HandleClick(item.path)}  className='  text-start font-bold text-red-500  w-full '>  {item?.iconType}</button>  </div>
          :<div  className='my-8'><button onClick={() => HandleClick(item.path)}  className=' btn-ghost  text-start font-bold   w-full text-white'>   {item?.iconType}</button>  </div>
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
