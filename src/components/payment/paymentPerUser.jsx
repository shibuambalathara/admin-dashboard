import { Button } from '@material-tailwind/react'
import React, { useEffect, useMemo } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useTable,usePagination,useGlobalFilter } from "react-table"
import {usePaymentOfUserQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'
import format from 'date-fns/format'


const PaymentPerUser = () => {
    const {id}=useParams()
    const {data,loading,error,refetch}=usePaymentOfUserQuery({variables:{where:{id:id}}})
    console.log(data?.user?.firstName,"dataaaaaaa")
    
    const navigate=useNavigate()
    const handleUserDetails=(userId)=>{
    
      navigate(`/view-user/${userId}`)
    }

    const handlePaymentStatus=(paymentId)=>{
console.log(paymentId,"payment id")
navigate(`/update-payment/${paymentId}`)
    }


    const columns = useMemo(
        () => [
           { Header: "Ref No", accessor: "refNo" },
            { Header: "Amount", accessor: "amount" },
            {Header:"Payment For",accessor:"paymentFor"},
           { Header: "Status ", accessor: "status" },
           { Header: "Created At ", accessor: ({createdAt})=>{return format(new Date( createdAt),`dd/MM/yy, HH:mm`)} },
           { Header: "Updated At ",  accessor: ({updatedAt})=>{return format(new Date( updatedAt),`dd/MM/yy, HH:mm`)} },

            {
            Header: "Update Payment",
            Cell: ({ row }) => (
              <button className="btn btn-accent" onClick={() => handlePaymentStatus(row.original?.id)}>Update Payment</button>
            )
          },
    
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.user.payments : []), [data]);
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
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Payment Data Table of {data?.user?.firstName} {data?.user?.lastName} </div>
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

export default PaymentPerUser