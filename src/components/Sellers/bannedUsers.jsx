

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import {  useBannedUsersQuery } from "../../utils/graphql";
import { useTable,useSortBy, usePagination, useGlobalFilter } from "react-table";
import SearchUser from "../utils/search";

const BannedUsersComponent = () => {
 const {id}=useParams()
 
  const navigate = useNavigate();

   const { data, loading, error } = useBannedUsersQuery({variables:{where:{id:{equals:id}}}});
 

   console.log("this is the data from view users11", data?.sellers[0].name);

  const handleViewMore = (id) => {
    console.log(id,"id")
    navigate(`/view-user/${id}`);
  };
 

  const columns = useMemo(
    () => [
   { Header: " User Name", accessor: "username" ,  className: 'w-1/3',  },
       { Header: "First Name", accessor: "firstName" ,  className: 'w-1/3', },
       { Header: "Last Name", accessor: "lastName" ,  className: 'w-1/3', },


   

      {
        Header: "View more",
        Cell: ({ row }) => (
          <button
            className="btn btn-primary"
            onClick={() => handleViewMore(row.original.id)}
          >
            View More
          </button>
        ),
      },

    ],
    []
  );
   const tableData = useMemo(() => (data ? data?.sellers[0]?.bannedUsers : []), [data]);
 

  const tableInstance = useTable(
    {
      columns,
      data: tableData,
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
    <div className="w-full  h-fit  ">
  

      <div className=" max-w-7xl mx-auto h-fit">
        <div className=" flex flex-col justify-center m-auto w-full">
          <div className="mb-4">
            <div className="text-center font-extrabold my-1  text-2xl w-full">
              {" "}
              {data?.sellers[0].name} {"Banned Users "}
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
            <div className="flex justify-between mt-4">
              <div>
                <button
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
                >
                  {"<<"}
                </button>
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
                >
                  {"<"}
                </button>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
                >
                  {" "}
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BannedUsersComponent;
