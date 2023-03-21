import React from 'react'

const SearchUser = ({filter,setFilter}) => {
  return (
    <div className=' flex w-full'>
    <span className='text-black w-full'>
        Search:{' '}
        <input className='w-60 p-1 rounded bg-slate-200 border-red' type="text"  value={filter || ''} onChange={(e)=>setFilter(e.target.value)}/>
    </span>
    </div>
  )
}

export default SearchUser   