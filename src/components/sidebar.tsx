import { Button } from '@material-tailwind/react';
import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

import Sidebar_items from './sideBarData';


const Sidebar = () => {
  const navigate=useNavigate()
  const loc=useLocation()
  const pathNm=loc?.pathname.replace(/\//g,"")
  console.log(pathNm,"location")

  const HandleClick=(path:string)=>{
  navigate(`${path}`)
  }
  return (
    <div className='w-72  min-h-screen  bg-gray-700 space-y-5 p-3  '>
      {Sidebar_items.map((item)=>{
        return(
          <>{item.path===pathNm?
          <div><button onClick={() => HandleClick(item.path)}  className='btn bg-white text-start font-bold text-orange-500  w-full '> {item.name}</button>  </div>
          :<div><button onClick={() => HandleClick(item.path)}  className='btn btn-ghost  text-start font-bold   w-full text-white'> {item.name}</button>  </div>
      }
          </>
          )
      })}
    </div>
  )
}

export default Sidebar;
