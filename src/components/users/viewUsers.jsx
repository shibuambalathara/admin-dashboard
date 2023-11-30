import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsersQuery } from "../../utils/graphql";
import TabbleOfUsersOrUser from "./tableData";
import LimitedDataPaginationComponents from "../utils/limitedDataPagination";


const ViewUsers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  


  const navigate = useNavigate();

  const { data, loading, error,refetch } = useUsersQuery(({variables:{ skip: currentPage * pageSize,take:pageSize, orderBy: {idNo:"desc"}}}));
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  

  
  if(loading) return <div>Loading....</div>
  

  return (
  
    <div className="bg-gray-100 ">
 
   {data?.users &&   <TabbleOfUsersOrUser users={data?.users}/>}

   <LimitedDataPaginationComponents   

          currentPage={currentPage}
      
        onPageChange={handlePageChange}/>
    </div>
  );
};

export default ViewUsers;
