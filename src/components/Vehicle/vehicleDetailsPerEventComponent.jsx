


import { Button } from '@material-tailwind/react'
import React, { useMemo,useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useTable,usePagination,useGlobalFilter } from "react-table"
import {useDeleteVehicleMutation, useVehicleDetailsPerEventQuery, useVehicleTableQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'
import format from 'date-fns/format'


const VehicleDetailsPerEventComponent = () => {
    // const [vid,setVid]=useState('')
    const{id}=useParams()
    const navigate=useNavigate()
    const {data,loading,error}=useVehicleDetailsPerEventQuery({variables:{where:{id}}})
    const [DeleteV]=useDeleteVehicleMutation();
console.log(data,"data")

    const handleViewMore=(id)=>{
      console.log("id.........",id)
navigate(`/edit-vehicle/${id}`)
    }
    const handleDelete=(deleteVehicleId)=>{
console.log(deleteVehicleId)
DeleteV({variables:{where:{id:deleteVehicleId}}})

    }
    const handleBidDetails=(id)=>{
      navigate(`/bid-details/${id}`)
    }

    const columns = useMemo(
        () => [
          { Header: "Registration Number", accessor: "registrationNumber" },
          { Header: "Index No", accessor: "vehicleIndexNo" },
          { Header: "State", accessor: "state" },
         { Header: "City", accessor: "city" },
         { Header: "total bids count", accessor: "totalBids" },
         { Header: "Status", accessor: "vehicleEventStatus" },
        //  { Header: "Bid Status", accessor: "bidStatus" },
        //   { Header: "Bid Time Expire", accessor: ({bidTimeExpire})=>{return format(new Date (bidTimeExpire),`dd/MM/yy,  HH:mm:ss`)}  },
         
        {
          Header: "Bid Detais",
          Cell: ({ row }) => (
            <button className="btn btn-accent" onClick={()=>handleBidDetails(row.original.id) }>Bid Details</button>
          )
        },
         
          {
            Header: "Vehicle Details",
            Cell: ({ row }) => (
              <button className="btn btn-info" onClick={()=>handleViewMore(row.original.id) }>View Vehicle</button>
            )
          },
          {
            Header: "Remove",
            Cell: ({ row }) => (
              <button className="btn btn-error" onClick={() => handleDelete(row.original.id)}>Remove</button>
            )
          }
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.event?.vehicles : []), [data]);
      const tableInstance=useTable({
        columns ,
        data: tableData,
      },useGlobalFilter,usePagination);
     
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
          setGlobalFilter
        } = tableInstance;
    
        const {globalFilter}=state
    
      if (loading) return <p>Loading...</p>;
      

  return (
    <div className="flex  flex-col w-full justify-around ">

    
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2 ">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Vehicle Data Table </div>
  
    <div className='flex  justify-evenly'>
    <SearchUser filter={globalFilter} className="  text-white " setFilter={setGlobalFilter}/>
        <label>Number Of  Vehicles <p className='text-red-500'>{data?.event?.vehiclesCount}</p></label>
    
    </div>
  </div>
  
      <table
        className="w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  className="py-3 pl-4"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="py-3 pl-4 text-center" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
<div className="flex justify-center">
      <div className="flex justify-between mt-4">
      <div>
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
        >
          {'<<'}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
        >
          {'<'}
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
          >  {'>'}</button>
          </div>
          </div>
      
    </div>
  </div>
  </div>
  )
}

export default  VehicleDetailsPerEventComponent 

