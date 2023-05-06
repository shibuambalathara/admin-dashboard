import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useUsersQuery, useDeleteUserMutation } from "../../utils/graphql";
import { useTable,useSortBy, usePagination, useGlobalFilter } from "react-table";
import SearchUser from "./searchUser";

const ViewUsers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);




  const navigate = useNavigate();

  const { data, loading, error } = useUsersQuery(({variables:{ skip: currentPage * pageSize,take:pageSize, orderBy: {idNo:"desc"}}}));
  const [deleteUserMutation] = useDeleteUserMutation();

  console.log("this is the data from view users11", data);

  const handleViewMore = (id) => {
    navigate(`/view-user/${id}`);
  };
  const paymentDetails = (id) => {
    navigate(`/payment/${id}`);
  };
  const handleDelete = (id) => {
    console.log(id, "delete");
    deleteUserMutation({ variables: { where: { id: id } } });
    navigate("/users");
  };
  const handleBuyingLimit=(id)=>{
    navigate(`/buying-limit/${id}`)
  }
  
  // const handleBids=(id)=>{
  //   navigate(`/bids-user/${id}`)
  // }

  const columns = useMemo(
    () => [
      { Header: "User ID", accessor: "idNo" ,  className: 'w-1/3',  },
      { Header: "First Name", accessor: "firstName" ,  className: 'w-1/3', },
      { Header: "Last Name", accessor: "lastName" ,  className: 'w-1/3', },
      { Header: "Role", accessor: "role",  className: 'w-1/3', },
      { Header: "Mobile", accessor: "mobile",  className: 'w-1/3',   },
      { Header: "State", accessor: "state",  className: 'w-1/3',   },
      { Header: "Status", accessor: "status",  className: 'w-1/3',   },
      //  { Header: "Active Bids Count", accessor: "activeBidsCount",  className: 'w-1/3',   },

      {
        Header: "Active Bids ",
        Cell: ({ row }) => (
          // <button
          //   className="btn btn-primary"
          //   onClick={() => handleBids(row.original.id)}
          // >
          //  {row.original.activeBidsCount}
          // </button>
          <a className="btn btn-primary" href={`/bids-user/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.activeBidsCount}</a>
        ),
      },
       {
        Header: "Current Buying Limit",
        Cell: ({ row }) => (
          <button
            className="btn btn-secondary"
            onClick={() => handleBuyingLimit(row.original.id)}
          >
           {row.original.currentVehicleBuyingLimit.vehicleBuyingLimit}
          </button>
        ),
      },

      {
        Header: "View more",
        Cell: ({ row }) => (
          // <button
          //   className="btn btn-info"
          //   onClick={() => handleViewMore(row.original.id)}
          // >
          //   View More
          // </button>
          <a className="btn btn-info" href={`/view-user/${row.original.id}`} target="_blank" rel="noopener noreferrer">View/Edit</a>

        ),
      },
      {
        Header: "Payment details",
        Cell: ({ row }) => (
          // <button
          //   className="btn btn-warning"
          //   onClick={() => paymentDetails(row.original.id)}
          // >
          //   Payment Details
          // </button>
          <a className="btn btn-warning" href={`/payment/${row.original.id}`} target="_blank" rel="noopener noreferrer">View/Edit</a>

        ),
      },
      // {
      //   Header: "Delete",
      //   Cell: ({ row }) => (
      //     <button
      //       className="btn btn-block"
      //       onClick={() => handleDelete(row.original.id)}
      //     >
      //       Delete
      //     </button>
      //   ),
      // },
    ],
    []
  );
  const tableData = useMemo(() => (data ? data.users : []), [data]);


  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        sortBy: [
          {
            id: "idNo",
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
    <div className="w-full   ">
      <div className=" w-full ">
        <Button
          onClick={() => navigate("/add-user")}
          className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add User
        </Button>
      </div>

      <div className=" max-w-7xl mx-auto h-fit">
        <div className=" flex flex-col justify-center m-auto w-full">
          <div className="mb-4">
            <div className="text-center font-extrabold my-1  text-2xl w-full">
              {" "}
              User Data{" "}
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
            <div className="flex flex-col justify-between mt-4 ">
            <div className="flex justify-center">
          Page{' '}
          <strong>
            {currentPage + 1}
             {/* of {tableInstance.pageOptions.length} */}
         
          </strong>{' '}
        </div>
              <div className="space-x-2">
             
                {currentPage>0 ?  <button className="btn" onClick={(e)=>setCurrentPage(0)}>{" "}{"<<"}</button> :<button disabled></button>}

             {currentPage>0 ?  <button className="btn" onClick={(e)=>setCurrentPage(currentPage-1)}>{" "}{"<"}</button> :<button disabled></button>}
                <button className="btn" onClick={(e)=>setCurrentPage(currentPage+1)}>{" "}{">"}</button> 
         
         
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
