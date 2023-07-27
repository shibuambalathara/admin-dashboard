import {useState} from 'react'
import { Button } from '@material-tailwind/react'
import React, { useMemo } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useTable,usePagination,useSortBy,useGlobalFilter } from "react-table"
import {useBidDetailsPerVehicleQuery, useDeleteBidMutation,} from '../../utils/graphql'
import SearchUser from '../utils/search'
import format from 'date-fns/format'

import Swal from "sweetalert2";

import { ShowPopup } from '../alerts/popUps';

import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import TableComponent from '../utils/table'
import PaginationComponents from '../utils/pagination'



const BidDetailsPerVehicleComponent = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
    const {id}=useParams()
    const {data,loading,error,refetch}=useBidDetailsPerVehicleQuery({variables:{where:{id}}})
    console.log(data,"bid")
    const [deleteBid]=useDeleteBidMutation()
    const navigate=useNavigate()

   

    const handleDeleteBid=async(id)=>{

      const response = await Swal.fire({
        title: 'Are you sure?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
      });
      if (response.isConfirmed) {
      
        const result=await  deleteBid({variables:{where:{id}}})

        if (result?.data) {
          console.log(result)
          await Swal.fire({
            title: `  deleted Successfully`,
            icon: 'success',
          });
       

      try{

        const result=await deleteBid({variables:{where:{id}}})
        console.log(result,"result")
        ShowPopup("Success!", `successfully Deleted!`,"success", 5000, true);
      }
      catch(err){
        console.log(err)
      }

    }

   
     
      refetch()
    }
  }
    const handleUserDetails=(id)=>{
      navigate(`/view-user/${id}`)
    }



    const handleReport=(report)=>{
      console.log(report,"report")
    const arr=[]
    arr.push(report)
   const take =arr.map((element)=>({
     Auction_No:element.event.eventNo,
     Lot_no:element.vehicleIndexNo,
     RegistrationNumber:element.registrationNumber,
    }))
  
  console.log(take,"repor")
  
       report=report?.userVehicleBids.map((element)=>({
        
       Bidder_First_Name:element.user.firstName,
        Last_Name:element.user.lastName,
        Mobile:element.user.mobile,
        Amount:element.amount,
        Bid_Time:format(new Date (element.createdAt),`dd/MM/yy, HH:mm:ss`)
       
      }))
      report.sort(function(a, b) {
        return b.Amount - a.Amount;
      });
      console.log(report)
      const combined=[...take,...report]
      const convertToExcel = (jsonToExcel) => {
        const worksheet = XLSX.utils.json_to_sheet(combined);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        FileSaver.saveAs(excelData, `Bid-Report of Lot No: ${data?.vehicle?.vehicleIndexNo}.xlsx`);
      }
      
     
      convertToExcel();
     console.log(combined)
     }

    const columns = useMemo(
        () => [
                { Header: "First Name", accessor: "user.firstName" },
                { Header: "Last Name", accessor: "user.lastName" },
                { Header: "Mobile", accessor: "user.mobile" },
              { Header: "Bid Time ", accessor: ({createdAt})=>{return format(new Date( createdAt),`dd/MM/yy, HH:mm:ss`)} },
          { Header: "Amount", accessor: "amount" },
       
                
          {
            Header: "View User",
            Cell: ({ row }) => (
              <button className="btn btn-info" onClick={()=>handleUserDetails(row.original.user.id) }>View User</button>
            )
          },
       
          {
            Header: "Delete Bid",
            Cell: ({ row }) => (
              <button className="btn btn-error" onClick={()=>handleDeleteBid(row.original.id) }>Delete </button>
            )
          },  
         
    
       
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data?.vehicle?.userVehicleBids : []), [data]);
      const tableInstance=useTable({
        columns ,
        data: tableData,
        initialState: {
          sortBy: [
            {
              id: "amount",
              desc: true,
            },
          ],
        },
      },useGlobalFilter,useSortBy,usePagination);
     
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
          setGlobalFilter
        } = tableInstance;
    
        const {globalFilter}=state
    
      if (loading) return <p>Loading...</p>;
      
      refetch()
   
   
  return (
    <div className="flex  flex-col w-full justify-around ">

    
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Bidders Details of Lot No:<span className='text-red-500'> {data?.vehicle?.vehicleIndexNo}</span>  & Auction No:<span className='text-red-500'>{data?.vehicle?.event?.eventNo}</span> </div>
   <div className='flex justify-end space-y-2'>
   
    <div className='space-y-2'>
<h1>Vehicle Event Status :<span className='font-bold'> {data?.vehicle?.vehicleEventStatus}</span></h1>
<h1>Bid Status :<span className='font-bold'> {data?.vehicle?.bidStatus}</span></h1>
<a className='btn bg-sky-600' target="_blank" rel="noopener noreferrer" href={`/edit-vehicle/${data?.vehicle?.id}`}> Change Status</a>
<button className='btn bg-pink-500' onClick={(e)=> handleReport(data?.vehicle)} >Report</button>
    </div>
    </div>
  </div>
  <SearchUser filter={globalFilter} className="  text-white " setFilter={setGlobalFilter}/>
      <TableComponent tableData={tableInstance}/>
<PaginationComponents tableData={tableInstance}/>
  </div>
  </div>
  )
}

export default  BidDetailsPerVehicleComponent 