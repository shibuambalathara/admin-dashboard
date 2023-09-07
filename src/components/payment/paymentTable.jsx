import React, { useMemo,} from "react";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

import SearchUser from "../utils/search";
import TableComponent from "../utils/table";
import PaginationComponent from '../utils/pagination'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faEye, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { FormatDate } from "../utils/dateFormat";
const PaymentTable = ({data}) => {


  
  const navigate = useNavigate();


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
        Cell: ({ value }) => FormatDate(value),
      },
      {
        Header: "Updated At",
        accessor: ({ updatedAt }) => new Date(updatedAt),
        sortType: "datetime",
        Cell: ({ value }) => FormatDate(value),
      },
      {
        Header: "Registration Expire",
        accessor: ({ RegistrationExpire }) =>
          RegistrationExpire && new Date(RegistrationExpire),

    Cell: ({ value }) => ( value ?   FormatDate(value) : "-"),
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
        Header: "Create Buying Limit",
        Cell: ({ row }) => {
          if (
            row.original.emdUpdateCount === 0
            &&
            row.original.paymentFor === 'emd' &&
            row.original.status === 'success'
          ) {
            return (
              <a
                className="  text-2xl"
                href={`/add-emd/${row.original.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
               <FontAwesomeIcon icon={faCirclePlus} />
              </a>
            );
          }
           else {
            return(
              <>
              Increment by:{ row.original?.emdUpdate[0]?.vehicleBuyingLimitIncrement ??'0'},
              <br /> Status: {row.original.status}
              </>
              );
          }
        }
      },
      {
        Header: "View Emds",
        Cell: ({ row }) => (
      row.original.emdUpdateCount!==0 &&     <a
            className="text-2xl"
            href={`/emd-payment/${row.original.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
          <FontAwesomeIcon icon={faEye} />
          </a>
        ),
      },

      {
        Header: "Payment details",
        Cell: ({ row }) => (
          <a
            className="  text-2xl"
            href={`/payment/${row.original?.user?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
           <FontAwesomeIcon icon={faMoneyBill1} />
          </a>
        ),
      },

      {
        Header: "View User",
        Cell: ({ row }) => (
          <a
            className="text-2xl"
            href={`/view-user/${row.original.user?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faUserPen} />
          </a>
        ),
      },
    
    ],
    []
  );

  const tableData = useMemo(() => (data ? data : []), [data]);
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
{data?.length>10 && <PaginationComponent tableData={tableInstance}/>}

  </div>
  )
}

export default PaymentTable