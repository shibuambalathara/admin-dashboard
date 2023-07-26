import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { usePaymentDetailsQuery, usePaymentsSearchQuery } from '../../utils/graphql';
import TableComponent from '../utils/table';
import PaymentInputForm from './paymentInputForm';
import PaymentTable from './paymentTable';
import PaginationComponents from '../utils/pagination';
const PaymentByDate = ({onDataCheck}) => {
  const [startDate,setDate]=useState('0')
    const{data,loading}=usePaymentsSearchQuery({variables:{where:{createdAt:{gte:startDate}}}})
  if (data)  {console.log(data,"payment by date")
onDataCheck(true)
}

    const onDateChange =(dateOnSubmit) => {
setDate(dateOnSubmit)

    }
    if(loading)return<div>Loading.......</div>
  return (
    <div className='bg-gray-100'>
      <div className='flex justify-between'>

        <PaymentInputForm onSubmit={onDateChange} />
        {data && <p className='font-bold'>Payment Count: <span className='text-red-500'>{data?.payments?.length}</span></p>}
      </div>
   {  data &&   <PaymentTable data={data}/>}
  
     
            
    </div>
  )
}

export default PaymentByDate