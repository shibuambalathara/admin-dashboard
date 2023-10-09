import React from 'react'
import { DateConvert } from '../utils/dateFormat'

const UpdateBidTime = ({currentDate,handleChangeStartTime}) => {
   console.log("current",currentDate)

  return (
    <div className=' flex justify-end  '>
        <div className='w-fit modal-box'>
        <h1 className='font-bold'>Update Date and Time</h1>
        <input className='border-red-500 border-2 p-2 rounded-md' type='datetime-local'onChange={(e)=>handleChangeStartTime(e.target.value)} value={DateConvert(currentDate)} />
        </div>
    </div>
  )
}

export default UpdateBidTime