
import React, { useEffect, useMemo, useState } from "react";
import format from 'date-fns/format'
import { useNavigate,useParams } from "react-router-dom";
import { useTable,useSortBy, usePagination, useGlobalFilter } from "react-table";
 import SearchUser from "../utils/search";

import Swal from "sweetalert2";
import {   useEmdUpdatesPerPaymentQuery } from "../../utils/graphql";
import TableComponent from "../utils/table";
import PaginationComponents from "../utils/pagination";


const EmdDetails = () => {
  const {id}=useParams()
  console.log(id,"id")
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const { data, loading, error,refetch } =useEmdUpdatesPerPaymentQuery({variables:{ where: {payment:{id: {equals:id}}}}});
 // const [changeStatus]=useMutationTokenDetailMutation()

 console.log("this is the data from view users11", data);


const handleMessage=(emdUpdates)=>{
  console.log(emdUpdates,"coupen")
  const {user,payment,vehicleBuyingLimitIncrement,}=emdUpdates
  const formatedDate=format(new Date(payment.coupenDetail[0].createdAt),`dd/MM/yy, HH:mm`)
  console.log(formatedDate,"ff")
  Swal.fire({
    html: `<div>
        <h1>Message From Team AutoBse</h1>
        
        <p>Dear: ${user.firstName} ${user.lastName},</p>
        <p>You have ${vehicleBuyingLimitIncrement} Buying Limit against the payment of Rs.${payment.amount}. Created at ${formatedDate}</p>
       
        <p>Coupons are ${payment.coupenDetail.map((coupen, index) => {
            return `<p>${index + 1}. ${coupen.coupenNumber}</p>`;
        }).join('')}</p>
        <p>For more details, please contact Team AutoBse.</p>
        <p>Thank you.</p>
      </div>`
});
}



  


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
           
             
               <button className="btn bg-teal-500" onClick={()=>handleMessage(row.original) }>Message to:{row.original.user.mobile}</button>
    
    
  
 
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
          
          <TableComponent tableData={tableInstance}/>
         <PaginationComponents tableData={tableInstance}/>
        </div>
      </div>
    </div>
  );
};

export default EmdDetails;


