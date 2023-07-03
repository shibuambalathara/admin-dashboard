
import React, { useEffect, useMemo, useState } from "react";
import format from 'date-fns/format'
import { useNavigate,useParams } from "react-router-dom";
import { useTable,useSortBy, usePagination, useGlobalFilter } from "react-table";
 import SearchUser from "../users/searchUser";

import Swal from "sweetalert2";
import {   useEmdUpdatesPerPaymentQuery } from "../../utils/graphql";


const EmdDetails = () => {
  const {id}=useParams()
  console.log(id,"id")
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

const handleMessage=(coupen)=>{
  console.log(coupen,"coupen")
  const {user,payment,coupenDetail,vehicleBuyingLimitIncrement,}=coupen
  const formatedDate=format(new Date(coupenDetail[0].createdAt),`dd/MM/yy, HH:mm`)
  Swal.fire({
    html: `<div>
        <h1>Message From Team AutoBse</h1>
        
        <p>Dear: ${user.firstName} ${user.lastName},</p>
        <p>You have ${vehicleBuyingLimitIncrement} Buying Limit against the payment of Rs.${payment.amount}. Created at ${formatedDate}</p>
       
        <p>Coupons are ${coupen.coupenDetail.map((coupen, index) => {
            return `<p>${index + 1}. ${coupen.coupenNumber}</p>`;
        }).join('')}</p>
        <p>For more details, please contact Team AutoBse.</p>
        <p>Thank you.</p>
      </div>`
});
}


   const navigate = useNavigate();

   const { data, loading, error,refetch } =useEmdUpdatesPerPaymentQuery({variables:{ where: {payment:{id: {equals:id}}}}});
  // const [changeStatus]=useMutationTokenDetailMutation()

  console.log("this is the data from view users11", data);

  


  const columns = useMemo(
    () => [
      
      { Header: "Emd No", accessor: "emdNo",  className: 'w-1/3', },
       { Header: "vehicle BuyingLimit", accessor: "vehicleBuyingLimitIncrement" ,  className: 'w-1/3', },
      // { Header: "Last Name", accessor: "lastName" ,  className: 'w-1/3', },
      // { Header: "Mobile", accessor: "mobile",  className: 'w-1/3',   },

      // { Header: "Emd", accessor: "emd",  className: 'w-1/3',   },
      // { Header: "No Of Tokens", accessor: "noOfTokens",  className: 'w-1/3',   },
      {
        Header: "Message",
        Cell: ({ row }) => (
           
             
               <button className="btn bg-yellow-500" onClick={()=>handleMessage(row.original) }>Message to:{row.original.user.mobile}</button>
    
    
  
 
        )
      },
      {
        Header: "View Token status ",
        Cell: ({ row }) => (
    
          <a className="btn btn-primary w-24" href={`/coupenPerPayment/${row.original.payment.id}`} target="_blank" rel="noopener noreferrer">View status</a>
        ),
      },
     
    ],
    []
  );
  const tableData = useMemo(() => (data ? data.emdUpdates : []), [data]);


  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        sortBy: [
          {
            id: "idNo",
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}</p>;
  

  return (

    <div className="w-full   ">
      {/* <div className=" w-full ">
        <Button
          onClick={() => navigate("/add-user")}
          className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add User
        </Button>
      </div> */}

      <div className=" max-w-7xl mx-auto h-fit">
        <div className=" flex flex-col justify-center m-auto w-full">
          <div className="mb-4">
            <div className="text-center font-extrabold my-1  text-2xl w-full">
              {" "}
              Emd of Amount {data?.emdUpdates[0]?.payment?.amount} of {data?.emdUpdates[0]?.user?.firstName} {data?.emdUpdates[0]?.user?.lastName} {" "}
            </div>
            <SearchUser
              filter={globalFilter}
              className="  text-white "
              setFilter={setGlobalFilter}
            />
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
            <div className="flex flex-col justify-between mt-4 ">
            <div className="flex justify-center">
          Page{' '}
          <strong>
            {tablePageIndex + 1} of {tableInstance.pageOptions.length}
         
          </strong>{' '}
        </div>
              <div className="space-x-2">
                <button
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  className="btn "
                >
                  {"<<"}
                </button>
               
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className="btn"
                >
                  {"<"}
                </button>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className="btn"
                >
                  {" "}
                  {">"}
                </button>
                <button className="btn" onClick={() => gotoPage(pageCount - 1)}  disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmdDetails;


