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
    <div className='w-72  bg-slate-600 min-h-screen space-y-3 p-3 pt-10'>
      {Sidebar_items.map((item)=>{
        return(
          <div><button onClick={() => HandleClick(item.path)} className='font-bold text-lg bg-none text-white'> {item.name}</button>  </div>
        )
      })}
    </div>
  )
}

export default Sidebar;
