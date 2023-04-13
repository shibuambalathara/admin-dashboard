import React from 'react'
import EventTypesTable from '../components/events/eventTypes'
import AddEventType from '../components/events/eventTypeAdd'

const EventTypes = () => {
  return (
    <div className='w-full'>
      <AddEventType/>
      <EventTypesTable/>
    </div>
  )
}

export default EventTypes