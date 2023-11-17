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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendarCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";


const Table = () => {

  const navigate = useNavigate();

  const { data, loading, error,refetch } = useSellersItemQuery();
  const [removeSeller]=useDeleteSellerMutation()
 


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
 useEffect(()=>{
refetch()
 },[])

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
    
      { Header: "Total Events Conducted", accessor: "eventsCount" },
      {
        Header: "View/Edit Seller",
        Cell: ({ row }) => (
      
      <a className="btn bg-orange-500 text-xl" href={`/edit-seller/${row.original.id}`} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faBuilding} /></a>

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
          <a className="btn bg-cyan-500 text-xl" href={`/events-seller/${row.original?.id}`} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faCalendarCheck} /></a>

        )
      },
      // {
      //   Header: "Remove Seller",
      //   Cell: ({ row }) => (
      //     <button className="text-2xl" onClick={() => handleRemove(row.original?.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
      //   )
      // },
    ],
    []
  );


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
           
          </div>

       
          <TableComponent  tableData={data?.sellers} columns={columns}/>
       
        
        </div>
      </div>
    </div>
  );
};

export default Table;
