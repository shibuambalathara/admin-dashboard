

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useUsersQuery, useDeleteUserMutation } from "../../utils/graphql";
import { useTable,useSortBy, usePagination, useGlobalFilter } from "react-table";
import SearchUser from "./searchUser";
import format from 'date-fns/format'
import UserByMobile from "./userByMobile";

const TabbleOfUsersOrUser = ({users}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const navigate = useNavigate();

 

  console.log("this is the data from view ", users);

  const handleViewMore = (id) => {
    navigate(`/view-user/${id}`);
  };
  const paymentDetails = (id) => {
    navigate(`/payment/${id}`);
  };
 
  const handleBuyingLimit=(id)=>{
    navigate(`/buying-limit/${id}`)
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
        Cell: ({ value }) => format(value, "dd/MM/yy, HH:mm"),
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
          row.original.currentVehicleBuyingLimit.vehicleBuyingLimit!==0 &&     <button
            className="btn btn-secondary"
            onClick={() => handleBuyingLimit(row.original.id)}
          >
           {row.original.currentVehicleBuyingLimit.vehicleBuyingLimit}
          </button>
        ),
      },
      {
        Header: "Payment details",
        Cell: ({ row }) => (
     
  row.original.paymentsCount!==0 &&        <a className="btn btn-warning w-16" href={`/payment/${row.original.id}`} target="_blank" rel="noopener noreferrer"> {row.original.paymentsCount}</a>

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
     
          <a className="btn btn-success" href={`/create-payment/${row.original.id}`} target="_blank" rel="noopener noreferrer">Create Payment</a>

        ),
      },
      {
        Header: "User Details",
        Cell: ({ row }) => (
      
          <a className="btn btn-info" href={`/view-user/${row.original.id}`} target="_blank" rel="noopener noreferrer">View/Edit</a>

        ),
      },
    
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
    <div className="w-full   ">
      <div className=" w-full ">
        <Button
          onClick={() => navigate("/add-user")}
          className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add User
        </Button>
      </div>

      <div className=" max-w-7xl mx-auto h-fit">
        <div className=" flex flex-col justify-center m-auto w-full">
          <div className="mb-4">
            <div className="text-center font-extrabold my-1  text-2xl w-full">
              {" "}
              User Data{" "}
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
  
        </div>
      </div>
    </div>
  
  );
};

export default TabbleOfUsersOrUser;
