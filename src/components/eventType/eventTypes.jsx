


import { Button } from '@material-tailwind/react'
import React, { useEffect, useMemo } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTable,usePagination,useGlobalFilter,useSortBy } from "react-table"
import {useDeleteEventTypeMutation, useEventTypesQuery} from '../../utils/graphql'
import SearchUser from '../utils/search'

import TableComponent from '../utils/table'
import PaginationComponents from '../utils/pagination'
import AddEventType from './eventTypeAdd'



const EventTypesTable = () => {
    const {data,loading,error,refetch}=useEventTypesQuery()
    const [deleteEventType]=useDeleteEventTypeMutation()
    const navigate=useNavigate()

    const handleDelete=(id)=>{
      console.log(id)
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
              <button className="btn btn-error" onClick={() => handleDelete(row.original.id)}>Delete</button>
            )
          }
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.eventTypes : []), [data]);
      const tableInstance = useTable(
        {
          columns,
          data: tableData,
          initialState: {
            sortBy: [
              {
                id: "Name",
                desc: true,
              },
            ],
          },
        },
       
        useGlobalFilter,
        useSortBy,
        usePagination,
        
        
      );
     
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
    
        page,
        prepareRow,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        pageCount,
        gotoPage,
        setPageSize: setTablePageSize,
        state: { pageIndex: tablePageIndex, pageSize: tablePageSize },
        state,
        setGlobalFilter,
      } = tableInstance;
    
      const { globalFilter } = state;


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
    <SearchUser filter={globalFilter} className="  text-white " setFilter={setGlobalFilter}/>

  <TableComponent tableData={tableInstance}/>
      
     
          <PaginationComponents tableData={tableInstance}/>
  </div>


  )
}

export default EventTypesTable
