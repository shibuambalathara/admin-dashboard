import { Button } from "@material-tailwind/react";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { useDeleteSellerMutation, useEventTableQuery } from "../../utils/graphql";
import SearchUser from "../utils/searchUser";
import { useSellersItemQuery } from "../../utils/graphql";

import Swal from "sweetalert2";
import EditSeller from "./editSeller1";
import AddSeller from "./addSeller";


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

  if (error) return <p>Error :{error}</p>;

  return (
    <div className=" w-ful flex flex-col ">
      <div>
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

          <table
            className="w-full  mt-5 bg-white border-collapse border border-gray-300  table-auto divide-y  text-gray-900"
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
                          className="py-3 pl-4 text-center border  border-1 text-center border-gray-200"
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

export default Table;
