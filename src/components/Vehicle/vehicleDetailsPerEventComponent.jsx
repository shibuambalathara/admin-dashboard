


import { Button } from '@material-tailwind/react'
import React, { useEffect, useMemo,useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useTable,useSortBy,usePagination,useGlobalFilter } from "react-table"
import {useBidUserPerVehicleQuery, useCoupensperUserQuery, useDeleteVehicleMutation, useUpdateCoupenMutation, useVehicleDetailsPerEventQuery, useVehiclePerEventQuery, useVehicleTableQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'
import format from 'date-fns/format'
import Swal from "sweetalert2";
import Report from './report'



const VehicleDetailsPerEventComponent = () => {
   
    const{id}=useParams()
  
    const navigate=useNavigate()
    const [userId,setUserId]=useState('0')
    const {data,loading,error,refetch}=useVehicleDetailsPerEventQuery({variables:{where:{id}}})
    const [updateCoupen]=useUpdateCoupenMutation()
    
console.log(data,"dataaa")
    
    const [DeleteVehicle]=useDeleteVehicleMutation();
    const {data:coupens} =useCoupensperUserQuery({variables:{  where: {
      userDetail: {
        id: {
          equals: userId
        },
      
      },
      coupenStatus:{equals:"unclaimed"}
    }
  }})




    const handleDelete=async(deleteVehicleId)=>{
console.log(deleteVehicleId)
const result = await Swal.fire({
  title: 'Are you sure?',
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Yes',
  cancelButtonText: 'Cancel',
});
if (result.isConfirmed) {
  const deleteResult = await DeleteVehicle({variables:{where:{id:deleteVehicleId}}})
console.log(deleteResult,"delete result")
    

    if (deleteResult?.data?.deleteVehicle?.id) {
      await Swal.fire({
        title: `The vehicle deleted Successfully`,
        icon: 'success',
      });
    }
    refetch()
}
    }
    const handleAboutBid=async(bidDetails)=>{
      
      const { currentBidUser, registrationNumber,currentBidAmount      } = bidDetails;
     
      console.log(coupens,"handle..",currentBidUser?.id,"handleuu",userId)
      Swal.fire({
        html: `<div>
            <h1>Current Top Bidder </h1>
            <p> Name: ${currentBidUser?.firstName} ${currentBidUser?.lastName} </p>
            <p>Vehicle Number:${registrationNumber}</p>
            <p>Bid Amount:${currentBidAmount
            }</p>

          </div>`

      })
    }
    const handleCoupen=async(bidDetails)=>{
      const { currentBidUser,id      } = bidDetails;
      setUserId(currentBidUser?.id)
      if(coupens && userId===currentBidUser?.id){
        const { value: input } = await Swal.fire({
          title: 'Select Coupen',
          html:
          '<select id="coupenId" class="swal2-select">'+
          coupens?.coupens.map(coupen => `<option value="${coupen.id}">${coupen.coupenNumber}</option>`).join('') +
          '</select>',
           
            
       
          focusConfirm: false,
          preConfirm: () => {
            return [
            
              document.getElementById('coupenId').value
            ];
          }
        });
        const CoupenId=input[0]
       
        updateCoupen({variables:{where: {"id":CoupenId},
        data: {coupenStatus:"applied",vehicleDetail:{connect:{id}}}
      }}).then(()=>{
        refetch()
      })
      }
    }
  
     
    
    const handleMessage=(vehicleDetails)=>{
      const {currentBidUser,registrationNumber,currentBidAmount,coupenDetail}=vehicleDetails
console.log("message",vehicleDetails)
Swal.fire({
  html: `<div>
      <h1>Message From Team AutoBse </h1>
      
      <p>Dear: ${currentBidUser?.firstName} ${currentBidUser?.lastName},</p>
      <p>You have successfully Applied coupen:'${coupenDetail.coupenNumber}' for the Vehicle No '${registrationNumber}'
      (Bid Amount:${currentBidAmount}).Your current buying limit are ${currentBidUser.currentVehicleBuyingLimit.vehicleBuyingLimit} Vehicles. 
      </p>
      <p>For more Details Please contact Team AutoBse. </p>
      <p>Thank you.</p>
    </div>`

})
    }

    const columns = useMemo(
        () => [
        
          { Header: "Vehicle ID", accessor: "vehicleIndexNo" },
          { Header: "State", accessor: "state" },
         { Header: "City", accessor: "city" },
      
         { Header: "Vehicle Status", accessor: "vehicleEventStatus" },
         
          { Header: "Bid Status", accessor: "bidStatus" },
          { Header: "Bid Start Time", accessor: ({bidStartTime})=>{return format(new Date (bidStartTime),`dd/MM/yy,  HH:mm:ss`)}  },
           { Header: "Bid Time Expire", accessor: ({bidTimeExpire})=>{return format(new Date (bidTimeExpire),`dd/MM/yy,  HH:mm:ss`)}  },

        {
          Header: "Bid Details",
          Cell: ({ row }) => (
            // <button className="btn btn-accent" onClick={()=>handleBidDetails(row.original.id) }>Bid Details</button>
          
    row.original.totalBids !==0 ?        <a className="btn btn-accent" href={`/bid-details/${row.original.id}`} target="_blank" rel="noopener noreferrer"> {row.original.totalBids}</a>:'0'
            )
        },
        {
          Header: "About Bid",
          Cell: ({ row }) => (
            row.original.totalBids !==0 ? <button className="btn btn-info" onClick={() => handleAboutBid(row.original)}>About Bid</button>   :"No Bids"
            )
        },
         
      
          {
            Header: "Apply Coupen",
            Cell: ({ row }) => (
              row.original.totalBids !==0 ? ( row.original.coupenDetail ? <button onClick={()=>handleMessage(row.original)} className='btn bg-yellow-500'>Message to { row.original.currentBidUser.mobile}</button>   : <button className="btn bg-red-500" onClick={() => handleCoupen(row.original)}>Apply Coupen</button>):"0"
              )
          },
         
          {
            Header: "Vehicle Details",accessor: "registrationNumber",
            Cell: ({ row }) => (
              <a className="btn btn-secondary" href={`/edit-vehicle/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.registrationNumber}</a>

              )
          },
          {
            Header: "Remove",
            Cell: ({ row }) => (
              <button className="btn btn-error" onClick={() => handleDelete(row.original.id)}>Remove</button>
            )
          }
          
        ],
        [coupens,userId]
      );

      const tableData=useMemo(() => (data ? data.event?.vehicles : []), [data]);
      const tableInstance=useTable({
        columns ,
        data: tableData,
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

      

  return (
    <div className="flex  flex-col  justify-around ">

    
    <div className=" flex flex-col  justify-center  ">
    <div className="mb-2 ">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Vehicle Data Table of Event No {data?.event?.eventNo} </div>
  
   
     <div className='flex justify-end'>
    <SearchUser filter={globalFilter} className="  text-white " setFilter={setGlobalFilter}/>
    <div className='min-w-fit mr-10'>
    <h1 >Event Status: <span className='font-bold'>{data?.event?.status}</span></h1>
    <h1 >No Of Vehicles: <span className='font-bold'>{data?.event?.vehiclesCount}</span></h1>
        </div>
        </div>
    </div>

  
      <table
        className="w-full divide-y divide-gray-200 "
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
          className="btn"
        >
          {'<<'}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="btn "
        >
          {'<'}
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="btn"
          >  {'>'}</button>
          </div>
          </div>
      
    </div>
  </div>
  </div>
  )
}

export default  VehicleDetailsPerEventComponent 


