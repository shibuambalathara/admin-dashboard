
import { Button } from "@material-tailwind/react";
import React, { useMemo, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { useContactUsQuery, useUpdateContactUsMutation} from "../../utils/graphql";
import SearchUser from "../users/searchUser";

import Swal from "sweetalert2";
import format from 'date-fns/format'


const ViewQueries = () => {
 
  const navigate = useNavigate();
  const { data, loading, error,refetch } = useContactUsQuery();
  console.log(data)
  const [updateStatus]=useUpdateContactUsMutation()
  
 
  const handleChangeStatus=async(quiryId)=>{
alert(quiryId)
    const result = await Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      text:"Change status to solved ?",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    });
    if (result.isConfirmed) {
        const Result = await updateStatus({
          variables: { where: { id: quiryId },data:{status:'solved'} },
        });
        alert(Result)
refetch()
 
  
  }
}

  

  const columns = useMemo(
    () => [
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Mobile", accessor: "mobile" },
      { Header: "Created At ", accessor: ({createdAt})=>{return format(new Date( createdAt),`dd/MM/yy, HH:mm`)} },
      { Header: "Updated At ",  accessor: ({updatedAt})=>{return format(new Date( updatedAt),`dd/MM/yy, HH:mm`)} },
      {Header:"Subject",accessor:"subject"},
      {Header:"Message",accessor:"message"},
     
      {
        Header: "Status",
        Cell: ({ row }) => (
    row.original.status==='created' ?     <button className="btn bg-red-500" onClick={() => handleChangeStatus(row.original?.id)}>{row.original.status}</button>:<p className="text-green-500 font-bold">Solved</p> 
        )
      },
      
 
    ],
    []
  );


  const tableData=useMemo(() => (data ? data.contactuses : []), [data]);
  
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
    <div className="w-full  h-full ">
   
    <div className="  max-w-6xl mx-auto h-fit ">
      <div className="   flex flex-col justify-center m-auto w-full">
        <div className="mb-2">
          <div className="text-center font-extrabold my-5 text-lg w-full">
            Enquiries{" "}
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
  )
}

export default ViewQueries