


import { Button } from '@material-tailwind/react'
import React, { useEffect, useMemo } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTable,usePagination,useGlobalFilter,useSortBy } from "react-table"
import {useDeleteEventTypeMutation, useEventTypesQuery} from '../../utils/graphql'
import SearchUser from '../utils/search'

import TableComponent from '../utils/table'
import PaginationComponents from '../utils/pagination'
import AddEventType from './eventTypeAdd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'



const EventTypesTable = () => {
    const {data,loading,error,refetch}=useEventTypesQuery()
    const [deleteEventType]=useDeleteEventTypeMutation()
    const navigate=useNavigate()

    const handleDelete=(id)=>{
 const result=deleteEventType({variables:{where:{id}}})
    }

    const columns = useMemo(
        () => [
          { Header: "Name", accessor: "name" },
          // { Header: "Events", accessor: "events.eventNo" },
          // { Header: "Users", accessor: "users.id" },
         

         
        //   {
        //     Header: "View more",
        //     Cell: ({ row }) => (
        //       <button className="bg-green-500 p-2 rounded" onClick={()=>handleViewMore(row.original.id) }>View More</button>
        //     )
        //   },
          {
            Header: "Delete",
            Cell: ({ row }) => (
              <button className="text-2xl" onClick={() => handleDelete(row.original.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            )
          }
          
        ],
        []
      );

    
     
  


      useEffect(()=>{
refetch()
      },[])
    
      if (loading) return <p>Loading...</p>;
      

  return (

   
   
      <div className="  mx-10 ">
 
    <div className='flex justify-end'>
      <AddEventType/>
      </div>
      <div className="text-center font-extrabold my-5 text-lg min-w-full">  Events type Table </div>

  <TableComponent tableData={data?.eventTypes} columns={columns}/>
      
     
        
  </div>


  )
}

export default EventTypesTable
