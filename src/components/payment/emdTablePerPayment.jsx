


import { Button } from '@material-tailwind/react'
import React, { useMemo } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useTable,usePagination,useGlobalFilter,useSortBy } from "react-table"
import {useEmdTableQuery, usePaymentDetailsQuery} from '../../utils/graphql'
import SearchUser from '../utils/search'
import format from 'date-fns/format'
import TableComponent from '../utils/table'
import PaginationComponents from '../utils/pagination'


const EmdTablePerPayment = () => {
const{id}=useParams()
    const {data,loading,error}=usePaymentDetailsQuery({variables:{where:{id}}})

   
    
console.log("emd table",data)




    const columns = useMemo(
        () => [
          { Header: "Emd Number", accessor: "emdNo" },
          { Header: "Vehicle buying limit", accessor: "vehicleBuyingLimitIncrement" },
          { Header: "Created At ", accessor: ({createdAt})=>{return format(new Date( createdAt),`dd/MM/yy, HH:mm`)} },
         
          { Header: "Created By ", accessor:"createdBy.firstName"  },
         

         
  
          
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.payment?.emdUpdate : []), [data]);
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
      

  return (
    <div className="flex  flex-col w-full justify-around ">
    {/* <Button
      onClick={() => navigate(`/add-emd`)}
      className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
     Add Emd
    </Button> */}
    
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Emd Data Table Of Payment Ref No <span className='text-red-500'>{data?.payment?.refNo}</span>  </div>
    <SearchUser filter={globalFilter} className="  text-white " setFilter={setGlobalFilter}/>
  </div>
   
      <TableComponent tableData={tableInstance}/>

    <PaginationComponents tableData={tableInstance}/>
  </div>
  </div>
  )
}

export default  EmdTablePerPayment 