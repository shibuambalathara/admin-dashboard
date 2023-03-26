
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
import { useUsersQuery,useDeleteUserMutation } from "../../utils/graphql";

import { useTable,usePagination,useGlobalFilter } from "react-table";
import SearchUser from "./searchUser";


const ViewUsers = () => {
  const [userData,setUserData]=useState([])
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const navigate = useNavigate();

  const { data, loading, error } = useUsersQuery();
  const [deleteUserMutation]=useDeleteUserMutation()
  
  console.log(data,"userssssss")

  const handleViewMore=(id)=>{
 
    navigate(`/view-user/${id}`)
  }
  const paymentDetails=(id)=>{
 
    navigate(`/payment/${id}`)
  }
  const handleDelete=(id)=>{
    console.log(id,"delete")
    deleteUserMutation({variables:{where:{id:id}}})
    navigate('/users')
  }


  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "idNo" },
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Email", accessor: "email" },
      { Header: "Mobile", accessor: "mobile" },
      { Header: "Status", accessor: "status" },
       {Header:"Pancard Number", accessor:"pancardNo"},
      {
        Header: "View more",
        Cell: ({ row }) => (
          <button className="bg-green-500 p-2 rounded" onClick={()=>handleViewMore(row.original.id) }>View More</button>
        )
      },
      {
        Header: "Payment details",
        Cell: ({ row }) => (
          <button className="bg-cyan-500 p-2 rounded" onClick={()=>paymentDetails(row.original.id) }>Payment Details</button>
        )
      },
      {
        Header: "Delete",
        Cell: ({ row }) => (
          <button className="bg-red-600 text-white p-2 rounded" onClick={() => handleDelete(row.original.id)}>Delete</button>
        )
      }
      
    ],
    []
  );
  const tableData=useMemo(() => (data ? data.users : []), [data]);
  const tableInstance=useTable({
    columns,
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
    <div className="flex  flex-col w-full ">
      <Button
        onClick={() => navigate("/add-user")}
        className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
       Add User
      </Button>
      
      <div className=" flex flex-col justify-center m-auto w-full">
      <div className="mb-2">
    <div className="text-center font-extrabold my-5 text-lg w-full">  User Data Table </div>
      <SearchUser filter={globalFilter} className="  text-white " setFilter={setGlobalFilter}/>
    </div>
        <table
          className="w-full divide-y  divide-gray-200"
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
          <tbody className="divide-y divide-gray-200" {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className="py-3 pl-4 text-center" {...cell.getCellProps()}>
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
            {'<<'}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
          >
            {'<'}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
            >  {'>'}</button>
            </div>
            </div>
        
      </div>
    </div>
    </div>
  );
};

export default ViewUsers;
