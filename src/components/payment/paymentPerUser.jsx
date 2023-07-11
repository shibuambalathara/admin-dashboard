import { Button } from '@material-tailwind/react'
import React, { useEffect, useMemo } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useTable,useSortBy, usePagination, useGlobalFilter } from "react-table";
import {usePaymentOfUserQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'
import format from 'date-fns/format'
import Swal from "sweetalert2";

const PaymentPerUser = () => {
    const {id}=useParams()
    const {data,loading,error,refetch}=usePaymentOfUserQuery({variables:{where:{id:id}}})
    
    
    const navigate=useNavigate()
    const handleUserDetails=(userId)=>{
    
      navigate(`/view-user/${userId}`)
    }

    const handlePaymentStatus=(paymentId)=>{
console.log(paymentId,"payment id")
navigate(`/update-payment/${paymentId}`)
    }
    const handleMessage=(payment)=>{
      console.log(payment,"payment",data,"dddddd")
      const {registrationNumber,currentBidAmount,amount,paymentFor,createdAt}=payment
      const formatedDate=format(new Date( createdAt),`dd/MM/yy, HH:mm`)
     const  {firstName,lastName}=data.user
     
      Swal.fire({
        html: `<div>
            <h1>Message From Team AutoBse </h1>
            
            <p>Dear: ${firstName} ${lastName},</p>
           <p>Thank You for the payment of Rs.${amount}.Created at ${formatedDate}.  for ${paymentFor}. </p>
            <p>For more details please contact our team . </p>
            <p>Thank you.</p>
          </div>`
      
      })
    }


    const columns = useMemo(
        () => [
           { Header: "Ref No", accessor: "refNo" },
            { Header: "Amount", accessor: "amount" },
            {Header:"Payment For",accessor:"paymentFor"},
           { Header: "Status ", accessor: "status" },
           { Header: "Created At ", accessor: ({createdAt})=>{return format(new Date( createdAt),`dd/MM/yy, HH:mm`)} },
           { Header: "Updated At ",  accessor: ({updatedAt})=>{return format(new Date( updatedAt),`dd/MM/yy, HH:mm`)} },
            { Header: "Created By ",  accessor: data => data.createdBy ? data.createdBy.firstName : "self" },
            {
            Header: "Update Payment",
            Cell: ({ row }) => (
              <button className="btn btn-accent" onClick={() => handlePaymentStatus(row.original?.id)}>Update Payment</button>
            )
          },
          {
            Header: "Emd Details",
            Cell: ({ row }) => (
     row.original.emdUpdateCount!==0 &&         <a className="btn btn-secondary" href={`/emdDetails/${row.original.id}`} target="_blank" rel="noopener noreferrer">Emd Details </a>
            )
          },
          {
            Header: "Create Buying Limit",
            Cell: ({ row }) => {
              if (
                row.original.emdUpdateCount === 0 &&
                row.original.paymentFor === 'emd' &&
                row.original.status === 'success'
              ) {
                return (
                  <a
                    className="btn btn-secondary"
                    href={`/add-emd/${row.original.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Increase Buying Limit
                  </a>
                );
              }
               else {
                return(
                  <>
                  Increment by:{ row.original.emdUpdate[0]?.vehicleBuyingLimitIncrement ??'0'},
                  <br /> Status: {row.original.status}
                  </>
                  );
              }
            }
          },
          {
            Header: "Payment Message",
            Cell: ({ row }) => {
              
    if(row.original.status==='success' ){return(   <button className="btn bg-yellow-500" onClick={() => handleMessage(row.original)}>Message To:{data?.user?.mobile}</button>)}
    else {
      
      return row.original.status;}
        
    }
          },
    
          
        ],
        [data]
      );

      const tableData=useMemo(() => (data ? data.user.payments : []), [data]);
      const tableInstance=useTable({
        columns ,
        data: tableData,
        initialState: {
          sortBy: [
            {
              id: "createdAt",
              desc: true,
            },
          ],
        },
      },  useGlobalFilter,
      useSortBy,
      usePagination,);
     
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
            className="w-full  bg-white border-collapse border  border-1 border-gray-300  divide-y   text-gray-900"
            {...getTableProps()}

          >
            <thead className="bg-gray-50 relative ">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      scope="col"
                      className="py-2 px-2  border  border-10 "
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
            <tbody
              className="divide-y divide-gray-200"
              {...getTableBodyProps()}
            >
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className="px-2 py-2 text-md  border  border-1 text-center border-gray-200"
                          {...cell.getCellProps()}
                        >
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