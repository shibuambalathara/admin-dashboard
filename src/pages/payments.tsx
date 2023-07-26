import React, { useState } from 'react'
import PaymentTableComponent from '../components/payment/allPayment'
import PaymentByDate from '../components/payment/paymentByDate'
import PaymentBypaymentFor from '../components/payment/paymentBypaymentFor';

const Payments = () => {
  const [paymentDataExists, setPaymentDataExists] = useState(false);

  const handlePaymentData = (hasData:any) => {
    setPaymentDataExists(hasData);
  };

  return (
    <div className='w-full'>
       <div className="text-center font-extrabold my-5 text-lg">
        {" "}
        Payment Data Table{" "}
      </div>
      <div className='space-y-2'>
      <PaymentByDate onDataCheck={handlePaymentData}/>
      <PaymentBypaymentFor onDataCheck={handlePaymentData}/>
       {!paymentDataExists && <PaymentTableComponent/>}
       </div>
    </div>
  )
}

export default Payments