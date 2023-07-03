import React from "react";
import { useParams } from "react-router-dom";
import { useCoupenPerPaymentQuery } from "../../utils/graphql";
import format from 'date-fns/format';
import TableComponent from "./coupenTable";

const CoupensPerPaymentComponent = () => {
  const { id } = useParams();
  const { data, loading, error } = useCoupenPerPaymentQuery({ variables: { where: { id } } });
console.log(data,"payment")
  const columns = React.useMemo(
    () => [
      { Header: "Coupen Number", accessor: "coupenNumber", className: "w-1/3" },
      { Header: "Token Status", accessor: "coupenStatus", className: "w-1/3" },
      {
        Header: "vehicle No",
        Cell: ({ row }) => (
          row.original?.vehicleDetail && (
            <a className="btn btn-secondary" href={`/edit-vehicle/${row.original?.vehicleDetail?.id}`} target="_blank" rel="noopener noreferrer">
              {row.original?.vehicleDetail?.registrationNumber}
            </a>
          )
        )
      },
    ],
    []
  );

  const tableData = React.useMemo(() => (data ? data?.payment.coupenDetail : []), [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="text-center font-extrabold my-1 text-2xl w-full">
         Coupens Of Payment {data?.payment?.amount} From {data?.payment?.user?.firstName} {data?.payment?.user?.lastName}
      </div>
      <TableComponent columns={columns} data={tableData} />
    </div>
  );
};

export default CoupensPerPaymentComponent;