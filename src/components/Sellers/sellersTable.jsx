import { Button } from "@material-tailwind/react";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter,useSortBy } from "react-table";
import { useDeleteSellerMutation, useEventTableQuery } from "../../utils/graphql";
import SearchUser from "../utils/search";
import { useSellersItemQuery } from "../../utils/graphql";

import Swal from "sweetalert2";
import EditSeller from "./editSeller1";
import AddSeller from "./addSeller";
import TableComponent from "../utils/table";
import PaginationComponents from "../utils/pagination";


const Table = () => {

  const navigate = useNavigate();

  const { data, loading, error,refetch } = useSellersItemQuery();
  const [removeSeller]=useDeleteSellerMutation()
console.log(data,"sellers")
 
// const handleBannedUsers=(id)=>{
// console.log(id,"banned Users")
// navigate(`/banned-users/${id}`)
// }
// const handleEvents=(id)=>{
//   console.log(id,"banned Users")
//   navigate(`/events-seller/${id}`)
//   }

  const handleRemove=async(id)=>{

    const result = await Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      const deleteResult = await removeSeller({
        variables: { where: { id } },
      });
  
      if (deleteResult?.data?.deleteSeller?.id) {
        await Swal.fire({
          title: `The Seller ${deleteResult?.data?.deleteSeller?.name} deleted Successfully`,
          icon: 'success',
        });
       
        refetch()
      }
    }
  
  }
 

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
    
      { Header: "Total Events Conducted", accessor: "eventsCount" },
      {
        Header: "View/Edit Seller",
        Cell: ({ row }) => (
      
      <a className="btn btn-info" href={`/edit-seller/${row.original.id}`} target="_blank" rel="noopener noreferrer"> View/Edit</a>

      )
      },
      {
        Header: "Banned Users ",
        Cell: ({ row }) => (
          // <button className="btn btn-primary" onClick={() => handleBannedUsers(row.original?.id)}>{row.original?.bannedUsersCount}</button>       
          <a className="btn btn-primary" href={`/banned-users/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original?.bannedUsersCount}</a>
          )
      },
      {
        Header: "View Events",
        Cell: ({ row }) => (
          //<button className="btn btn-success" onClick={() => handleEvents(row.original?.id)}>View</button>
          <a className="btn btn-success" href={`/events-seller/${row.original?.id}`} target="_blank" rel="noopener noreferrer"> View/Edit</a>

        )
      },
      {
        Header: "Remove Seller",
        Cell: ({ row }) => (
          <button className="btn btn-error" onClick={() => handleRemove(row.original?.id)}>Remove</button>
        )
      },
    ],
    []
  );


  const tableData=useMemo(() => (data ? data?.sellers : []), [data]);
 


 
  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        sortBy: [
          {
            id: "eventsCount",
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
    <div className=" w-ful flex flex-col ">
      <div className="flex justify-end mr-2 mt-2">
                 <button
      onClick={() => navigate("/add-seller")}
      className="btn btn-outline"
      >
     Add Seller
    </button>
      </div>
      <div className="w-full  max-w-4xl mx-auto h-fit ">
        <div className="   flex flex-col justify-center m-auto w-full">
          <div className="w-full mb-2">
            <div className="text-center font-extrabold my-5 text-lg w-full">
              SELLERS{" "}
            </div>
            <SearchUser
              filter={globalFilter}
              className="  text-white "
              setFilter={setGlobalFilter}
            />
          </div>

       
          <TableComponent  tableData={tableInstance}/>
       
          <PaginationComponents tableData={tableInstance}/>
        </div>
      </div>
    </div>
  );
};

export default Table;
