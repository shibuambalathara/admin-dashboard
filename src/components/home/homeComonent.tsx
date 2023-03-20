import React from 'react'
import{useCountQuery} from '../../utils/graphql'
import {useNavigate} from 'react-router-dom'

const HomeComonent = () => {
    const navigate=useNavigate()
const{data,loading,error}=useCountQuery()

  return (
    <div className='flex flex-wrap m-10 space-x-5 space-y-5 justify-center'>

    <div className=' w-48 rounded bg-slate-300 p-5 mt-5 ml-5 h-20 ' onClick={()=>navigate('users')}>
    <div className='text-center'>Users Count</div>
    <div className='text-center'>{data?.usersCount}</div>
    </div>

    <div className=' w-48 rounded bg-slate-300 p-5 h-20 ' onClick={()=>navigate('users')}>
    <div className='text-center'>Payments Count</div>
    <div className='text-center'>{data?.paymentsCount}</div>
    </div>

    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>Emd Updates Count</div>
    <div className='text-center'>{data?.emdUpdatesCount}</div>
    </div>

    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>Events Count</div>
    <div className='text-center'>{data?.eventsCount}</div>
    </div>
    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>Vehicles Count</div>
    <div className='text-center'>{data?.vehiclesCount}</div>
    </div>
    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>Bids Count</div>
    <div className='text-center'>{data?.eventsCount}</div>
    </div>

    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>Events Types</div>
    <div className='text-center'>{data?.eventTypesCount}</div>
    </div>
    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>Locations Count</div>
    <div className='text-center'>{data?.locationsCount}</div>
    </div>
    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>States Count</div>
    <div className='text-center'>{data?.statesCount}</div>
    </div>
    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>Execel Uploads </div>
    <div className='text-center'>{data?.excelUploadsCount}</div>
    </div>
    <div className=' w-48 rounded bg-slate-300 p-5 h-20 space-y-1' onClick={()=>navigate('users')}>
    <div className='text-center'>Sellers Count</div>
    <div className='text-center'>{data?.sellersCount}</div>
    </div>



    </div>
  )
}

export default HomeComonent