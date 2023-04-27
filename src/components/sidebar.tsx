import { Button } from '@material-tailwind/react';
import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

import Sidebar_items from './sideBarData';
import { log } from 'console';

const Sidebar = () => {
  const navigate=useNavigate()
  const loc=useLocation()
  const pathNm=loc?.pathname.replace(/\//g,"")
  console.log(pathNm,"location")

  const HandleClick=(path:string)=>{
  navigate(`${path}`)
  }
  return (
    <div className='w-72   bg-slate-600 space-y-3 p-3 '>
      {Sidebar_items.map((item)=>{
        return(
          <>{item.path===pathNm?
          <div><button onClick={() => HandleClick(item.path)}  className='btn btn-success  text-start font-bold   w-full '> {item.name}</button>  </div>
          :<div><button onClick={() => HandleClick(item.path)}  className='btn btn-ghos  text-start font-bold   w-full text-white'> {item.name}</button>  </div>
      }
          </>
          )
      })}
    </div>
  )
}

export default Sidebar;
