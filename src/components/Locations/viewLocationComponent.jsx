import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter,useSortBy } from "react-table";
import { useDeleteLocationMutation, useEventTableQuery, useUpdateLocationMutation } from "../../utils/graphql";

import { useLocationsQuery } from "../../utils/graphql";
import Swal from "sweetalert2";
import TableComponent from "../utils/table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ViewLocationComponent = () => {
  
 
  const { data, loading, error,refetch } = useLocationsQuery();
  const [deleteLOcation]=useDeleteLocationMutation()
const [updateLocation]=useUpdateLocationMutation()
 


  const handleEditLocation = async (name, id) => {
    
    const { value: input } = await Swal.fire({
      title: 'Enter Location Name',
      html: '<input id="location" class="swal2-select"></input>',
      focusConfirm: false,
      preConfirm: () => {
        return [document.getElementById('location').value];
      },
    });
  
    const newState = input[0];
  
    updateLocation({
      variables: { where: { id }, data: { name: newState } },
    })
      .then((res) => {
       
        Swal.fire({
          icon: 'success',
          title: `Location " ${name} "Changed to "${res?.data?.updateLocation?.name}"`,
        });
        refetch();
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Location Not Updated',
        });
      });
   };


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
        Header: "City",
        Cell: ({ row }) => (
          <button className="btn bg-red-500 text-xl" onClick={()=>handleEditLocation(row.original.name,row.original.id) }><FontAwesomeIcon icon={faPenToSquare} /></button>
        )
      },
        
      // {
      //   Header: "Delete",
      //   Cell: ({ row }) => (
      //     <button className="text-2xl" onClick={()=>handleDelete(row.original.id) }><FontAwesomeIcon icon={faTrashCan} /></button>
      //   )
      // },
    ],
    []
  );


  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :{error}</p>;

  return (
    <div className="w-full  h-full ">
   
      <div className="  max-w-6xl mx-auto h-fit ">
        <div className="   flex flex-col justify-center m-auto w-full">
         
            <div className="text-center font-extrabold my-5 text-lg w-full">
              LOCATIONS{" "}
            </div>
          
      

       
          <TableComponent tableData={data?.locations} columns={columns}/>
       
        
        </div>
      </div>
    </div>
  );
};

export default ViewLocationComponent;
