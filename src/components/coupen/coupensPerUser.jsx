import React from "react";
import { useParams } from "react-router-dom";
import { useCoupensperUserQuery } from "../../utils/graphql";
import format from 'date-fns/format';
import TableComponent from "./coupenTable";

const CoupensperUser = () => {
  const { id } = useParams();
  const { data, loading, error } = useCoupensperUserQuery({ variables: { where: { userDetail: { id: { equals: id } } } } });

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

  const tableData = React.useMemo(() => (data ? data?.coupens : []), [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="text-center font-extrabold my-1 text-2xl w-full">
        Coupens Of {data?.coupens[0]?.userDetail?.firstName} {data?.coupens[0]?.userDetail?.lastName}
      </div>
      <TableComponent columns={columns} data={tableData} />
    </div>
  );
};

export default CoupensperUser;