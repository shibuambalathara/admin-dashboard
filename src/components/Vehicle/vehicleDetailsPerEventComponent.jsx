



import React, {  useMemo,useState } from 'react'
import { useParams} from 'react-router-dom'
import { useCoupensperUserQuery, useDeleteVehicleMutation, useUpdateCoupenMutation, useUpdateVehicleMutation, useVehicleDetailsPerEventQuery} from '../../utils/graphql'
import format from 'date-fns/format'
import Swal from "sweetalert2";

import TableComponent from '../utils/table'
import UpdateBidTime from './updateBidTime';
import { FormatDate } from '../utils/dateFormat';
import { ConfirmationAlert, SweetalertSuccess } from '../utils/sweetalert';




const VehicleDetailsPerEventComponent = () => {
   
    const{id}=useParams()
  

    const [userId,setUserId]=useState('0')
    const [updateDate,setUpdateDate]=useState({date:null,id:null,updateItem:null})
    console.log("up",updateDate)
    
    const {data,loading,error,refetch}=useVehicleDetailsPerEventQuery({variables:{where:{id}}})
    const [updateBidTime]=useUpdateVehicleMutation()
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

const handleChangeStartTime=async(update)=>{
   const isodate=new Date(update).toISOString()
 console.log()
  const result=await ConfirmationAlert()
  if(updateDate?.updateItem==='startTime' && result?.isConfirmed)
  {
      updateBidTime({variables:{where:{id:updateDate?.id},data:{bidStartTime:isodate}}})
     
    }
    if(updateDate?.updateItem==='endtime' && result?.isConfirmed)
    {
        updateBidTime({variables:{where:{id:updateDate?.id},data:{bidTimeExpire:isodate}}})
       
      }
    refetch()
    setUpdateDate({data:null,id:null,updateItem:null})
}



    const handleDelete=async(deleteVehicleId)=>{
console.log(deleteVehicleId)
const result = await ConfirmationAlert()
if (result.isConfirmed) {
  const deleteResult = await DeleteVehicle({variables:{where:{id:deleteVehicleId}}})

    

    if (deleteResult?.data?.deleteVehicle?.id) {
    
      SweetalertSuccess()
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
          {
            Header: "Vehicle Details",accessor: "registrationNumber",
            Cell: ({ row }) => (
              <a className="btn bg-sky-500 w-24" href={`/edit-vehicle/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.registrationNumber}</a>

              )
          },
          { Header: "State", accessor: "state" },
         { Header: "City", accessor: "city" },
      
         { Header: "Vehicle Status", accessor: "vehicleEventStatus" },
         
          { Header: "Bid Status", accessor: "bidStatus" },
          { Header: "Bid Start Time", accessor: ({bidStartTime,id})=>{return <button onClick={()=>setUpdateDate({date: bidStartTime,id,updateItem:'startTime'})} className='btn bg-rose-500'> {format(new Date (bidStartTime),`dd/MM/yy,  HH:mm:ss`)}</button>}  },
          
           { Header: "Bid Time Expire", accessor: ({bidTimeExpire,id})=>{return <button onClick={()=>setUpdateDate({date: bidTimeExpire,id,updateItem:'endtime'})} className='btn bg-orange-500'>{format(new Date (bidTimeExpire),`dd/MM/yy,  HH:mm:ss`)}</button>   }},

        {
          Header: "Bid Details",
          Cell: ({ row }) => (
            // <button className="btn btn-accent" onClick={()=>handleBidDetails(row.original.id) }>Bid Details</button>
          
    row.original.totalBids !==0 ?        <a className="btn btn-primary" href={`/bid-details/${row.original.id}`} target="_blank" rel="noopener noreferrer"> {row.original.totalBids}</a>:'0'
            )
        },
        {
          Header: "About Bid",
          Cell: ({ row }) => (
            row.original.totalBids !==0 ? <button className="btn bg-teal-500" onClick={() => handleAboutBid(row.original)}>About Bid</button>   :"No Bids"
            )
        },
         
      
          {
            Header: "Apply Coupen",
            Cell: ({ row }) => (
              row.original.totalBids !==0 ? ( row.original.coupenDetail ? <button onClick={()=>handleMessage(row.original)} className='btn bg-yellow-500'>Message to { row.original.currentBidUser.mobile}</button>   : <button className="btn bg-red-500" onClick={() => handleCoupen(row.original)}>Apply Coupen</button>):"0"
              )
          },
         
     
          {
            Header: "Vehicle",
            Cell: ({ row }) => (
              <button className="btn btn-error" onClick={() => handleDelete(row.original.id)}>Remove</button>
            )
          }
          
        ],
        [coupens,userId]
      );

     
 
    
    
    
      if (loading) return <p>Loading...</p>;

      

  return (
    <div className="flex  flex-col  justify-around ">

    
    <div className=" flex flex-col  justify-center  ">
    <div className="mb-2 ">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Vehicle Data Table of Event No {data?.event?.eventNo} </div>
  
   
     <div className='flex justify-between'>
      <div>

      </div>
    <div className='h-1 font-bold'>Seller Name :{data?.event?.seller?.name}</div>
    <div className='min-w-fit '>
    <h1 >Event Status: <span className='font-bold'>{data?.event?.status}</span></h1>
    <h1 >No Of Vehicles: <span className='font-bold'>{data?.event?.vehiclesCount}</span></h1>
    <h1>Event Category: <span className='font-bold'>{data?.event?.eventCategory}</span></h1>
        </div>
        </div>
    </div>
{updateDate?.date &&<UpdateBidTime currentDate={updateDate?.date} handleChangeStartTime={handleChangeStartTime}/>}

      <TableComponent tableData={data.event?.vehicles} columns={columns} sortBy='Bid Time Expire'/>

  </div>
  </div>
  )
}

export default  VehicleDetailsPerEventComponent 


