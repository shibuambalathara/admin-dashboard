import { Button } from "@material-tailwind/react";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { useVehicleTableQuery } from "../../utils/graphql";
import SearchUser from "../users/searchUser";
import format from "date-fns/format";
import Swal from "sweetalert2";

const VehicleTable = () => {
  const { data, loading, error } = useVehicleTableQuery();
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    console.log("id.........", id);
    navigate(`/edit-vehicle/${id}`);
  };
  const handleBidDetails = (id) => {
    navigate(`/bid-details/${id}`);
  };

    const columns = useMemo(
        () => [
          { Header: "Registration Number", accessor: "registrationNumber" },
          { Header: "Vehicle Index No", accessor: "vehicleIndexNo" },
          { Header: "Event Status", accessor: "vehicleEventStatus" }, 
          { Header: "Bid Status", accessor: "bidStatus" }, 
          { Header: "Total bids count", accessor: "userVehicleBidsCount" }, 
          { Header: "Event Category", accessor: "event.eventCategory" }, 
          { Header: "Bid Time Expire", accessor: ({bidTimeExpire})=>{return format(new Date (bidTimeExpire),`dd/MM/yy,  HH:mm`)}  },
         
          {
            Header: "Bid Details",
            Cell: ({ row }) => (
              <button className="btn btn-accent" onClick={()=>handleBidDetails(row.original.id) }>Bid Details</button>
            )
          },
         
          {
            Header: "Vehicle Details",
            Cell: ({ row }) => (
              <button className="btn btn-info" onClick={()=>handleViewMore(row.original.id) }>View Vehicle</button>
            )
          },
      
          
        ],
        []
      );

  const tableData = useMemo(() => (data ? data.vehicles : []), [data]);
  const tableInstance = useTable(
    {
      columns,
      data: tableData,
    },
    useGlobalFilter,
    useSortBy,
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

  const addVechile = () => {
    Swal.fire({
      title: "VEHICLE CAN BE ADDED ONLY BASED ON EVENT",
      text: "DO YOU WANT TO MOVE TO EVENT ?",
      showDenyButton: true,

      confirmButton: {
        text: "Navigate",
        className: "save-btn",
      },
      denyButton: {
        text: `Cancel`,
        className: "dont-save-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          navigate("/events");
        }, 300);
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <div className="flex  flex-col w-full justify-around ">
      <Button
        onClick={() => addVechile()}
        className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Add Vechile
      </Button>

      <div className=" flex flex-col w-full justify-center m-auto ">
        <div className="mb-2">
          <div className="text-center font-extrabold my-5 text-lg min-w-full">
            {" "}
            Vehicle Data Table{" "}
          </div>
          <SearchUser
            filter={globalFilter}
            className="  text-white "
            setFilter={setGlobalFilter}
          />
        </div>
        <table className="w-full divide-y divide-gray-200" {...getTableProps()}>
          <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="py-3 pl-4"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
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
                      <td
                        className="py-3 pl-4 text-center"
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
  );
};

export default VehicleTable;
