import { Button } from '@material-tailwind/react'
import React, { useMemo, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTable,useSortBy,usePagination,useGlobalFilter } from "react-table"
import {usePaymentTableQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'
import format from 'date-fns/format'


const PaymentTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
    const {data,loading,error}=usePaymentTableQuery({variables:{ skip: currentPage * pageSize,take:pageSize, orderBy: { createdAt:"desc"}}})
  
    const navigate=useNavigate()
    
    console.log(data,"payment ")


    
    const  handlePaymentPerUser=(userId)=>{
    
      navigate(`/payment/${userId}`)
    }


    const columns = useMemo(
        () => [
          { Header: "Ref No", accessor: "refNo" },
          { Header: "Amount", accessor: "amount" },
          {
            Header: "Created At",
            accessor: ({ createdAt }) => new Date(createdAt),
            sortType: "datetime",
            Cell: ({ value }) => format(value, "dd/MM/yy, HH:mm"),
          },
          {
            Header: "Updated At",
            accessor: ({ updatedAt }) => new Date( updatedAt),
            sortType: "datetime",
            Cell: ({ value }) => format(value, "dd/MM/yy, HH:mm"),
          },
          { Header: "Payment For ", accessor: "paymentFor" },
          { Header: "Status ", accessor: "status" },
          {Header:"Mobile",accessor:"user.mobile"},
           {Header:"user First Name",accessor:"user.firstName"},
           {Header:"user Last Name",accessor:"user.lastName"},
           {Header:"Created By",accessor:"createdBy.firstName"},

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
          
              <a className="btn btn-warning" href={`/payment/${row.original?.user?.id}`} target="_blank" rel="noopener noreferrer">Payment Details</a>
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
        initialState: {
          sortBy: [
            {
              id: "Updated At",
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
            <div className="flex flex-col justify-between mt-4 ">
            <div className="flex justify-center">
          Page{' '}
          <strong>
            {currentPage + 1}
             {/* of {tableInstance.pageOptions.length} */}
         
          </strong>{' '}
        </div>
              <div className="space-x-2">
             
                {currentPage>0 ?  <button className="btn" onClick={(e)=>setCurrentPage(0)}>{" "}{"<<"}</button> :<button disabled></button>}

             {currentPage>0 ?  <button className="btn" onClick={(e)=>setCurrentPage(currentPage-1)}>{" "}{"<"}</button> :<button disabled></button>}
                <button className="btn" onClick={(e)=>setCurrentPage(currentPage+1)}>{" "}{">"}</button> 
         
         
              </div>
         
            </div>
          </div>
  </div>
  </div>
  )
}

export default PaymentTableComponent