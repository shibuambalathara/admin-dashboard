
import { Button } from "@material-tailwind/react";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

import SearchUser from "../utils/search";
import format from "date-fns/format";
import TableComponent from "../utils/table";
import PaginationComponent from '../utils/pagination'
const PaymentTable = ({data}) => {


  const navigate = useNavigate();

  console.log(data, "payment.. ",data?.payments.length);

  const handlePaymentPerUser = (userId) => {
    navigate(`/payment/${userId}`);
  };
  // const deleteHandler=(id)=>{
  //   deletePayment({variables:{where:{id}}})
  //   refetch()
  // }

  const columns = useMemo(
    () => [
      { Header: "Ref No", accessor: "refNo" },
      { Header: "Amount", accessor: "amount" },
      {
        Header: "Created At",
        accessor: ({ createdAt }) => new Date(createdAt),
        sortType: "datetime",
        Cell: ({ value }) => format(value, "dd/MM/yy, HH:mm"),
      },
      {
        Header: "Updated At",
        accessor: ({ updatedAt }) => new Date(updatedAt),
        sortType: "datetime",
        Cell: ({ value }) => format(value, "dd/MM/yy, HH:mm"),
      },
      {
        Header: "Registration Expire",
        accessor: ({ RegistrationExpire }) =>
          RegistrationExpire && new Date(RegistrationExpire),

    Cell: ({ value }) => ( value ?  format(value, "dd/MM/yy, HH:mm") : "-"),
    className:"bg-red-100", 
      },
      { Header: "Payment For ", accessor: "paymentFor" },
      { Header: "Status ", accessor: "status" },
      { Header: "Mobile", accessor: "user.mobile" },
      { Header: "user First Name", accessor: "user.firstName" },
   //   { Header: "user Last Name", accessor: "user.lastName" },
      {
        Header: "Created By",
        accessor: (data) =>
          data.createdBy ? data.createdBy.firstName : "self",
      },

      {
        Header: "Update Buying Limit",
        Cell: ({ row }) => (
          <a
            className="btn btn-secondary"
            href={`/add-emd/${row.original.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Update
          </a>
        ),
      },
      {
        Header: "View Emds",
        Cell: ({ row }) => (
          <a
            className="btn btn-accent"
            href={`/emd-payment/${row.original.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Emd
          </a>
        ),
      },

      {
        Header: "Payment details",
        Cell: ({ row }) => (
          <a
            className="btn btn-warning"
            href={`/payment/${row.original?.user?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Payment Details
          </a>
        ),
      },

      {
        Header: "View User",
        Cell: ({ row }) => (
          <a
            className="btn btn-info"
            href={`/view-user/${row.original.user?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            View User
          </a>
        ),
      },
      // {
      //   Header:"Delete Payment",
      //   Cell:({row})=>(
      //     <button onClick={()=>deleteHandler(row.original.id)}>Delete</button>
      //   )
      // }
    ],
    []
  );

  const tableData = useMemo(() => (data ? data.payments : []), [data]);
  const tableInstance = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        sortBy: [
          {
            id: "Updated At",
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { state, setGlobalFilter } = tableInstance;

  const { globalFilter } = state;





  return (
    <div>
    <SearchUser
      filter={globalFilter}
      className="  text-white "
      setFilter={setGlobalFilter}
    />

    <TableComponent tableData={tableInstance} />
{data?.payments?.length>10 && <PaginationComponent tableData={tableInstance}/>}

  </div>
  )
}

export default PaymentTable