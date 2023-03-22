


import { Button } from '@material-tailwind/react'
import React, { useMemo } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTable,usePagination,useGlobalFilter } from "react-table"
import {useBidsTableQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'


const BidsTable = () => {
    const {data,loading,error}=useBidsTableQuery()
    const navigate=useNavigate()

    const columns = useMemo(
        () => [
          { Header: "Bids Name", accessor: "name" },
          { Header: "Amount", accessor: "amount" },
            { Header: "User Id", accessor: "user.username" },
         

         
        //   {
        //     Header: "View more",
        //     Cell: ({ row }) => (
        //       <button className="bg-green-500 p-2 rounded" onClick={()=>handleViewMore(row.original.id) }>View More</button>
        //     )
        //   },
        //   {
        //     Header: "Delete",
        //     Cell: ({ row }) => (
        //       <button className="bg-red-600 text-white p-2 rounded" onClick={() => handleDelete(row.original.id)}>Delete</button>
        //     )
        //   }
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.bids : []), [data]);
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
    <Button
      onClick={() => navigate("/add-user")}
      className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
     Add User
    </Button>
    
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Bids Data Table </div>
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

export default  BidsTable