

import React, { useMemo, } from "react";
import { useLocation } from "react-router-dom";
import { useTable,useSortBy, usePagination, useGlobalFilter } from "react-table";
import SearchUser from "../utils/search";
import Swal from "sweetalert2";
import TableComponent from "../utils/table";
import PaginationComponent from "../utils/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import  { ConvertToExcel } from "../utils/excelFormat";
import { FormatDate } from "../utils/dateFormat";

const TabbleOfUsersOrUser = ({users}) => {
 

 
  const location = useLocation();
  const currentPageStartWith = location.pathname
  // const {data:signIn}=useUserauthenticationQuery()



 

const handleMessage=(coupen)=>{
  const {coupenDetail,firstName,lastName,   currentVehicleBuyingLimit }=coupen
  console.log(coupen,"coupen")
  Swal.fire({
    html: `<div>
        <h1>Message From Team AutoBse</h1>
        
        <p>Dear: ${firstName} ${lastName},</p>
        <p>Thank you for partipating the auction</p>
        <p>You have ${currentVehicleBuyingLimit.vehicleBuyingLimit} Buying Limit </p>
       
        <p>Coupons are ${coupenDetail.map((coupen, index) => {
            return `<p>${index + 1}. ${coupen.coupenNumber}</p>`;
        }).join('')}</p>
        <p>For more details, please contact Team AutoBse.</p>
        <p>Thank you.</p>
      </div>`
});
}



  const columns = useMemo(
    () => [
      { Header: "User ID", accessor: "idNo" ,  className: 'w-1/3',  },
      { Header: "First Name", accessor: "firstName" ,  className: 'w-1/3', },
      { Header: "Last Name", accessor: "lastName" ,  className: 'w-1/3', },
      { Header: "Role", accessor: "role",  className: 'w-1/3', },
      { Header: "Mobile", accessor: "mobile",  className: 'w-1/3',   },
      { Header: "State", accessor: "state",  className: 'w-1/3',   },
      { Header: "Status", accessor: "status",  className: 'w-1/3',   },
      {
        Header: "Created At",
        accessor: ({ createdAt }) => new Date( createdAt),
        sortType: "datetime",
        Cell: ({ value }) => FormatDate(value),
      },

      {
        Header: "Active Bids ",
        Cell: ({ row }) => (
    
          row.original.activeBidsCount!==0 &&     <a className="btn btn-primary" href={`/bids-user/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.activeBidsCount}</a>
        ),
      },
       {
        Header: "Current Buying Limit",
        Cell: ({ row }) => (
          row.original.currentVehicleBuyingLimit.vehicleBuyingLimit!==0 &&     
           <a  className="btn btn-secondary" href={`/buying-limit/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.currentVehicleBuyingLimit.vehicleBuyingLimit}</a>
        ),
      },
      {
        Header: "Payment details",
        Cell: ({ row }) => (
     
  row.original.paymentsCount!==0 &&        <a className="btn  bg-rose-700 w-10" href={`/payment/${row.original.id}`} target="_blank" rel="noopener noreferrer"> {row.original.paymentsCount}</a>

        ),
      },
      {
        Header: "View Coupens",
        Cell: ({ row }) => (
     
          row.original.coupenDetailCount  &&   <a className="btn bg-red-500 w-16" href={`/coupenPerUser/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.coupenDetailCount}</a>

        ),
      },

   
      {
        Header: "Create Payment",
        Cell: ({ row }) => (
     
     <a className="text-xl" href={`/create-payment/${row.original.id}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCreditCard} /></a>

        ),
      },
      {
        Header: "User Details",
        Cell: ({ row }) => (
      
          <a className=" text-2xl" href={`/view-user/${row.original.id}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faUserPen} /></a>






        ),
      },
      
      ...(currentPageStartWith === '/users' ? [] : [  {
  Header: "Message",
  Cell: ({ row }) => (
      <button className="btn bg-yellow-500" onClick={() => handleMessage(row.original)}>
      Message To {row.original.mobile}
    </button>
  )
     
}
])
    
    ],
    [users]
  );
  const tableData = useMemo(() => (users? users : []), [users])


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


  

  return (
    <div className="w-full    ">
    

      <div className=" max-w-7xl mx-auto h-fit">
        <div className=" flex flex-col justify-center m-auto w-full">
          <div className="flex">
      

       { users && users.length>1 &&    <SearchUser
              filter={globalFilter}
              className="  text-white "
              setFilter={setGlobalFilter}
            />  }
      
  

          </div> 
          <div className="flex justify-end text-end space-x-2">
           <p className="font-bold">Count:<span>{users.length}</span></p><span className="text-red-500"> <button onClick={()=>ConvertToExcel(users)}> <FontAwesomeIcon icon={faFileArrowDown} size="xl"/></button></span>
         </div>
          <TableComponent tableData={tableInstance} />
          { users && users.length>10 && <PaginationComponent tableData={tableInstance}/>}
        </div>
      </div>
    </div>
  
  
  );
};

export default TabbleOfUsersOrUser;
