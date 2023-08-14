


import {
  useDeletePaymentMutation,
  usePaymentTableQuery,
} from "../../utils/graphql";

import LimitedDataPaginationComponents from "../utils/limitedDataPagination";
import PaymentTable from "./paymentTable";
import { useState } from "react";

const AllPaymentComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize=10;
  const { data, loading } = usePaymentTableQuery({
    variables: {
      skip: currentPage * pageSize,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    },
  });

   const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
   }

  if (loading) return <p>Loading...</p>;
  return (
    <div className="bg-gray-100">
      
     <PaymentTable data={data?.payments}/>
       <LimitedDataPaginationComponents
      currentPage={currentPage}
      onPageChange={handlePageChange}
    /> 
    </div>
  );
};

export default AllPaymentComponent;
