import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useUsersQuery, useDeleteUserMutation } from "../../utils/graphql";
import { useTable,useSortBy, usePagination, useGlobalFilter } from "react-table";
import SearchUser from "./searchUser";
import format from 'date-fns/format'
import UserByMobile from "./userByMobile";
import TabbleOfUsersOrUser from "./tabble";

const ViewUsers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);




  const navigate = useNavigate();

  const { data, loading, error,refetch } = useUsersQuery(({variables:{ skip: currentPage * pageSize,take:pageSize, orderBy: {idNo:"desc"}}}));
 

  
  if(loading) return <div>Loading....</div>
  console.log("this is the data from view users.", data);
  

  return (
  
    <div>
      
   {data?.users &&   <TabbleOfUsersOrUser users={data?.users}/>}
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
  );
};

export default ViewUsers;
