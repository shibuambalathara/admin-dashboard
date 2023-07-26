
import { Button } from "@material-tailwind/react";
import React, { useMemo, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter,useSortBy } from "react-table";
import { useDeleteStateMutation,useStatesQuery, useUpdateStateMutation} from "../../utils/graphql";
import SearchUser from "../utils/search";

import Swal from "sweetalert2";
import TableComponent from "../utils/table";
import PaginationComponents from "../utils/pagination";


const ViewStates = () => {
 
  const navigate = useNavigate();
  const { data, loading, error,refetch } = useStatesQuery();
  const [updateState]=useUpdateStateMutation()
  console.log(data,"state")
  const [deleteState]=useDeleteStateMutation()
 
  const handleRemoveState=async(stateId)=>{

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
  const handleEditState = async (state, id) => {
    const { value: input } = await Swal.fire({
      title: 'Enter State Name',
      html: '<input id="state" class="swal2-select"></input>',
      focusConfirm: false,
      preConfirm: () => {
        return [document.getElementById('state').value];
      },
    });
  
    const newState = input[0];
  
    updateState({
      variables: { where: { id }, data: { name: newState } },
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'State Name Updated Successfully',
        });
        refetch();
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'State name Not Updated',
        });
      });
  };
  
 

  

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
    //  { Header: "Users", accessor:  (user) => user.users.map(user =><span className=" "> { user.firstName},</span>) },
      { Header: "Locations", accessor:(location) => location.locations.map(location => location.name).join(', ') },
      {
        Header: "Edit State",
        Cell: ({ row }) => (
          <button className="btn bg-red-500" onClick={() => handleEditState(row.original?.name,row.original?.id)}>Edit State</button>
        )
      },
      // {
      //   Header: "Remove State",
      //   Cell: ({ row }) => (
      //     <button className="btn btn-error" onClick={() => handleRemoveState(row.original?.id)}>Remove</button>
      //   )
      // },
    ],
    []
  );


  const tableData=useMemo(() => (data ? data.states : []), [data]);
  

 
  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        sortBy: [
          {
            id: "name",
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
    <div className="w-full  h-full ">
   
    <div className="  max-w-6xl mx-auto h-fit ">
      <div className="   flex flex-col justify-center m-auto w-full">
       
          <div className="text-center font-extrabold my-5 text-lg w-full">
            STATES{" "}
          </div>
          <SearchUser
            filter={globalFilter}
            className="  text-white "
            setFilter={setGlobalFilter}
          />
       

   
        <TableComponent tableData={tableInstance}/>
  
          <PaginationComponents tableData={tableInstance}/>
      </div>
    </div>
  </div>
  )
}

export default ViewStates