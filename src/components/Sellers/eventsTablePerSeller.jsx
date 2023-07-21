import { Button } from '@material-tailwind/react'
import React, { useMemo } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useTable,useSortBy,usePagination,useGlobalFilter } from "react-table"
import {useEventTableQuery, useEventsPerSellerQuery} from '../../utils/graphql'
import SearchUser from '../utils/search'
import format from 'date-fns/format'

const EventsTablePerSeller = () => {
  const {id}=useParams()
    const {data,loading,error}=useEventsPerSellerQuery({variables:{where:{id}}})




    const navigate=useNavigate()

    const handleViewVehicle=(id)=>{
      navigate(`/view-vehicls/${id}`)
     }

   const handleUploadExcelFile=(id)=>{
    navigate(`/excel-upload/${id}`)
   }
   const handleEditEvent=(id)=>{
    navigate(`/edit-event/${id}`)
   }
   const handleAddVehicle=(id)=>{
    navigate(`/add-vehicle/${id}`)
   }

    const columns = useMemo(
        () => [
          { Header: "Event No", accessor: "eventNo" },
          { Header: "seller Name", accessor: "seller.name" },
          { Header: "Location", accessor: "location.name" },
          { Header: "Event Category ", accessor: "eventCategory" },
          { Header: "Start Date ", accessor: ({startDate})=>{return format(new Date (startDate),`dd/MM/yy, HH:mm:ss`)} },
          { Header: "End Date ", accessor: ({endDate})=>{return format(new Date (endDate),`dd/MM/yy, HH:mm:ss`)} },
          { Header: "Status ", accessor: "status" }, 
          { Header: "Number Of Vehicles", accessor: "vehiclesCount" },
          {
            Header: "View Vehicles",
            Cell: ({ row }) => (
              <button className="btn btn-secondary" onClick={()=>handleViewVehicle(row.original.id) }>View vehicls</button>
            )
          },
         
          {
            Header: "Upload Excel File",
            Cell: ({ row }) => (
              <button className="btn btn-info" onClick={()=>handleUploadExcelFile(row.original.id) }>Upload</button>
            )
          },
          {
            Header: "Add Vehicle",
            Cell: ({ row }) => (
              <button className="btn btn-accent" onClick={()=>handleAddVehicle(row.original.id) }>Add Vehicle</button>
            )
          },
          {
            Header: "View/Edit Event",
            Cell: ({ row }) => (
              <button className="btn btn-warning" onClick={() => handleEditEvent(row.original.id)}>View/Edit</button>
            )
          }
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.seller?.events : []), [data]);
      console.log("this is table data from events",tableData);
      const tableInstance=useTable({
        columns ,
        data: tableData,
      },useGlobalFilter,useSortBy,usePagination);
     
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
    <Button
      onClick={() => navigate("/addevent")}
      className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
     Add Event
    </Button>
    
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Events Data Table of {data?.seller?.name} Seller</div>
    <SearchUser filter={globalFilter} className="  text-white " setFilter={setGlobalFilter}/>
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
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
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

export default EventsTablePerSeller