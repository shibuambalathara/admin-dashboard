import React from 'react'
import AddLocation from '../components/Locations/addLocation'
import AddState from '../components/Locations/addState'
import ViewLocationComponent from '../components/Locations/viewLocationComponent'

const ViewLocations = () => {
  return (
    <div className='w-full'>
      <AddLocation/>
      <ViewLocationComponent/>
      </div>
  )
}

export default ViewLocations