
import { Button } from "@material-tailwind/react";
import React, { useMemo, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { useDeleteStateMutation, useEventTableQuery ,useStatesQuery} from "../../utils/graphql";
import SearchUser from "../users/searchUser";
// import { useStatesQuery } from "../../utils/graphql";
import Swal from "sweetalert2";


const ViewStates = () => {
 
  const navigate = useNavigate();
  const { data, loading, error } = useStatesQuery();
  const [deleteState]=useDeleteStateMutation({variables:{where:{}}})
  const {  refetch } = useStatesQuery(); // get the data from the server
  const handleRemoveState=async(stateId)=>{
    // const confirm=window.confirm("are you sure?")
    // if(confirm){

    //   const result=await  deleteState({variables:{where:{id:stateId}}})
    
    // if(result?.data?.deleteState?.id){
     
    //   alert(`the state ${result?.data?.deleteState?.name} deleted Successfully`)
    //   window.location.reload()
    // }
    // }
    const result = await Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      const deleteResult = await deleteState({
        variables: { where: { id: stateId } },
      });
  
      if (deleteResult?.data?.deleteState?.id) {
        await Swal.fire({
          title: `The state ${deleteResult?.data?.deleteState?.name} deleted Successfully`,
          icon: 'success',
        });
       
        refetch()
      }
    }
  
  }
 

  

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Users", accessor:  (user) => user.users.map(user =><span className=" "> { user.firstName},</span>) },
      { Header: "Locations", accessor:(location) => location.locations.map(location => location.name).join(', ') },
      {
        Header: "Remove State",
        Cell: ({ row }) => (
          <button className="btn btn-error" onClick={() => handleRemoveState(row.original?.id)}>Remove</button>
        )
      },
    ],
    []
  );


  const tableData=useMemo(() => (data ? data.states : []), [data]);
  
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
            STATES{" "}
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
  )
}

export default ViewStates