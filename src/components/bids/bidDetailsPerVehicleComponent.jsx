import {useState} from 'react'
import { Button } from '@material-tailwind/react'
import React, { useMemo } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useTable,usePagination,useSortBy,useGlobalFilter } from "react-table"
import {useBidDetailsPerVehicleQuery, useDeleteBidMutation,} from '../../utils/graphql'
import SearchUser from '../users/searchUser'
import format from 'date-fns/format'

import Swal from "sweetalert2";

import { ShowPopup } from '../alerts/popUps';

import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';



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
    {/* <Button
      onClick={() => navigate("/addvehicle")}
      className="m-5 justify-end w-fit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
     Add Vechile
    </Button> */}
    
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Bidders Details of Lot No:<span className='text-red-500'> {data?.vehicle?.vehicleIndexNo}</span>  & Auction No:<span className='text-red-500'>{data?.vehicle?.event?.eventNo}</span> </div>
   <div className='flex justify-end space-y-2'>
    <SearchUser filter={globalFilter} className="  text-white " setFilter={setGlobalFilter}/>
    <div className='space-y-2'>
<h1>Vehicle Event Status :<span className='font-bold'> {data?.vehicle?.vehicleEventStatus}</span></h1>
<h1>Bid Status :<span className='font-bold'> {data?.vehicle?.bidStatus}</span></h1>
<a className='btn' target="_blank" rel="noopener noreferrer" href={`/edit-vehicle/${data?.vehicle?.id}`}> Change Status</a>
<button className='btn btn-warning' onClick={(e)=> handleReport(data?.vehicle)} >Report</button>
    </div>
    </div>
  </div>
      <table
        className="w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
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
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
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
                    <td className="py-3 pl-4 text-center" {...cell.getCellProps()}>
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
          {'<<'}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
        >
          {'<'}
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md mr-2"
          >  {'>'}</button>
          </div>
          </div>
      
    </div>
  </div>
  </div>
  )
}

export default  BidDetailsPerVehicleComponent 