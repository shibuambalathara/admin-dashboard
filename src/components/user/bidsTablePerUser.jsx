


import { Button } from '@material-tailwind/react'
import React, { useMemo } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {  useTable,usePagination,useSortBy,useGlobalFilter  } from "react-table"
import {useActiveBidsPerUserQuery, useBidsTableQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'
import format from "date-fns/format";


const BidsTablePerUser = () => {
  const {id}=useParams()
    const {data,loading,error}=useActiveBidsPerUserQuery({variables:{where:{id}}})
    const navigate=useNavigate()

    console.log("bids",data)
    const handleUserDetails=(userId)=>{
navigate(`/view-user/${userId}`)
    }
    const handleVehicleDetails=(vehicleId)=>{
      navigate(`/edit-vehicle/${vehicleId}`)
    }

    const columns = useMemo(
        () => [
          { Header: "Reg Number", accessor: "registrationNumber" },
           { Header: "Start Price", accessor: "startBidAmount" },
           { Header: "Current Bid Amount", accessor: "currentBidAmount" },
           
           { Header: "Bid Status", accessor: "bidStatus" },
          //  { Header: "bidTimeExpire",  accessor: ({bidTimeExpire})=>{return format(new Date (bidTimeExpire), `dd/MM/yy,  HH:mm`)} },
          {
            Header: "Bid End Time",
            accessor: ({ bidTimeExpire }) => new Date(bidTimeExpire),
            sortType: "datetime",
            Cell: ({ value }) => format(value, "dd/MM/yy, HH:mm"),
          },    
         
          // {
          //   Header: "User Details",
          //   Cell: ({ row }) => (
          //     <button className="btn btn-info w-24" onClick={()=>handleUserDetails(row.original.user.id) }>{row.original.user.firstName} {row.original.user.lastName}</button>
          //   )
          // },
          {
            Header: "Vehicle Details/Change Status",
            Cell: ({ row }) => (
              <button className="btn btn-secondary" onClick={() => handleVehicleDetails(row.original.id)}>{row.original.registrationNumber}</button>
            )
          }
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.user.activeBids : []), [data]);
      const tableInstance=useTable({
        columns ,
        data: tableData,
        initialState: {
          sortBy: [
            {
              id: "Bid End Time",
              desc: true,
            },
          ],
        },
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
      

    
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Bids Data Table Of {data?.user?.firstName} {data?.user?.lastName} </div>
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

export default  BidsTablePerUser