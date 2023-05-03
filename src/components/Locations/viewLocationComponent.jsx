import { Button } from "@material-tailwind/react";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { useDeleteLocationMutation, useEventTableQuery } from "../../utils/graphql";
import SearchUser from "../users/searchUser";
import { useLocationsQuery } from "../../utils/graphql";
import Swal from "sweetalert2";

const ViewLocationComponent = () => {
  
 
  const { data, loading, error,refetch } = useLocationsQuery();
  const [deleteLOcation]=useDeleteLocationMutation()

  console.log("this is the data from view location",data);
  const handleDelete=async(id)=>{

    const result = await Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      const deleteResult = await deleteLOcation({
        variables: { where: { id } },
      });
  
      if (deleteResult?.data?.deleteLocation?.id) {
        await Swal.fire({
          title: `The Location ${deleteResult?.data?.deleteLocation?.name} deleted Successfully`,
          icon: 'success',
        });
       
        refetch()
      }
    }
  
  }

  const columns = useMemo(
    () => [
      { Header: "City", accessor: "name" }, 
      { Header: "State", accessor: (state) => state?.state?.name },
      { Header: "Country", accessor: "country" },
        
      {
        Header: "Delete",
        Cell: ({ row }) => (
          <button className="btn btn-error" onClick={()=>handleDelete(row.original.id) }>Delete</button>
        )
      },
    ],
    []
  );

  const tableData = useMemo(() => (data ? data.locations : []), [data]);

  console.log("this is the tabledata from view location",tableData);
  
  const tableInstance = useTable(
    {
      columns,
      data: tableData,
    },
    useGlobalFilter,
    usePagination
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
    <div className="w-full  h-full ">
   
      <div className="  max-w-6xl mx-auto h-fit ">
        <div className="   flex flex-col justify-center m-auto w-full">
          <div className="mb-2">
            <div className="text-center font-extrabold my-5 text-lg w-full">
              LOCATIONS{" "}
            </div>
            <SearchUser
              filter={globalFilter}
              className="  text-white "
              setFilter={setGlobalFilter}
            />
          </div>

          <table
            className=" w-full bg-white border-collapse border border-gray-300  table-auto divide-y  text-gray-900"
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

export default ViewLocationComponent;
