import { Button } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar_items from './sideBarData';

const Sidebar = () => {
  const navigate=useNavigate()

  const HandleClick=(path:string)=>{
  navigate(`${path}`)
  }
  return (
    <div className='w-72  bg-slate-600 min-h-screen space-y-2 p-3'>
      {Sidebar_items.map((item)=>{
        return(
          <div><button onClick={() => HandleClick(item.path)} className='font-bold bg-none text-white'> {item.name}</button>  </div>
        )
      })}
    </div>
  )
}

export default Sidebar;
