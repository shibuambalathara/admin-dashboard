import { Button } from '@material-tailwind/react'
import React, { useMemo } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTable,useSortBy,usePagination,useGlobalFilter } from "react-table"
import {usePaymentTableQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'


const PaymentTableComponent = () => {
    const {data,loading,error}=usePaymentTableQuery()
  
    const navigate=useNavigate()
    
    console.log(data,"payment ")
    // const handlePaymentStatus=(userId)=>{
    //   navigate(`/update-payment/${userId}`)
    // }

    // const handleUserDetails=(userId)=>{
    
    //   navigate(`/view-user/${userId}`)
    // }

    
    const  handlePaymentPerUser=(userId)=>{
    
      navigate(`/payment/${userId}`)
    }
    // const  handleCreateEmd=(paymentId)=>{
    
    //   navigate(`/add-emd/${paymentId}`)
    // }
    // const  handleViewEmd=(paymentId)=>{
    
    //   navigate(`/emd-payment/${paymentId}`)
    // }

    const columns = useMemo(
        () => [
          { Header: "Ref No", accessor: "refNo" },
          { Header: "Amount", accessor: "amount" },
          { Header: "Payment For ", accessor: "paymentFor" },
          { Header: "Status ", accessor: "status" },
          {Header:"Mobile",accessor:"user.mobile"},
           {Header:"user First Name",accessor:"user.firstName"},
           {Header:"user Last Name",accessor:"user.lastName"},

           {
            Header: "Create Emd",
            Cell: ({ row }) => (
              // <button className="btn btn-secondary" onClick={() => handleCreateEmd(row.original.id)}>Create Emd</button>
              <a className="btn btn-secondary" href={`/add-emd/${row.original.id}`} target="_blank" rel="noopener noreferrer">Create Emd</a>

              )
          },
          {
            Header: "View Emds",
            Cell: ({ row }) => (
         //     <button className="btn btn-accent" onClick={() => handleViewEmd(row.original.id)}>Emds </button>
         <a className="btn btn-accent" href={`/emd-payment/${row.original.id}`} target="_blank" rel="noopener noreferrer">Emd</a>

         )
          },
         
          
           {
            Header: "Payment details",
            Cell: ({ row }) => (
              // <button className="btn btn-warning" onClick={() => handlePaymentPerUser(row.original.user.id)}>Payment Details</button>
          
              <a className="btn btn-warning" href={`/emd-payment/${row.original.id}`} target="_blank" rel="noopener noreferrer">Payment Details</a>
              )
          },
         
           {
            Header: "View User",
            Cell: ({ row }) => (
          //    <button className="btn btn-info" onClick={()=>handleUserDetails(row.original.user.id) }> View User</button>
              <a className="btn btn-info" href={`/view-user/${row.original.user?.id}`} target="_blank" rel="noopener noreferrer"> View User</a>

            )
          },
         
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.payments : []), [data]);
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
 
    
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Payment Data Table </div>
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

export default PaymentTableComponent