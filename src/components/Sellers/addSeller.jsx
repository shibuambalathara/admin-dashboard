import React from 'react'

const AddSeller = () => {
  return (
    <div className='w-28  m-10 space-y-10'>

     


     
<label htmlFor="my-modal" className="btn  btn-outline btn-secondary">Add Seller</label>

{/* Put this part before </body> tag */}
<input type="checkbox"  id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
 
        <div className='flex flex-col'>
            <label>Seller Name</label>
            <input className="input input-bordered input-secondary  " type="text"/>
        </div>
        <div className=" flex justify-center space-x-5 my-5">
          <button
            type="submit" 
            className="btn btn-outline btn-secondary"
          >Add Seller</button>
           <button
            type="submit" 
            className="btn btn-outline btn-accent"
          >Cancel</button>
        </div>
  </div>
</div>
      



      
    </div>
  )
}

export default AddSeller