import React from 'react'
import AddSeller from '../components/Sellers/addSeller'
import Table from '../components/Sellers/table'

const Sellers = () => {
  return (
    <div className='w-full'>
      <AddSeller/>
      <Table/>
    </div>
  )
}

export default Sellers