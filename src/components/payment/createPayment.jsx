import React from 'react'
import { useForm } from "react-hook-form";
import { useParams,useNavigate } from 'react-router-dom';
import{useUserQuery,useCreatePaymentMutation} from '../../utils/graphql'
import { ShowPopup } from '../alerts/popUps';
const CreatePayment = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  console.log(id,"id")
  const { data, loading, error } = useUserQuery({variables: { where: { id: id } }});
  console.log(data,"user")
  const [addAmount]=useCreatePaymentMutation()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async(dataOnSubmit) =>{ console.log(dataOnSubmit)
  const amount={
    amount:+dataOnSubmit?.amount,
    paymentFor:dataOnSubmit?.paymentFor,
    description:dataOnSubmit?.description,
    status:dataOnSubmit.paymentStatus,
    user:{connect:{id:id}}

  }
  
  if(dataOnSubmit.imgForPaymentProof && dataOnSubmit.imgForPaymentProof.length){
   amount["image"] = { upload: dataOnSubmit.imgForPaymentProof[0] }
  }
  try {
    const result = addAmount({variables: {data:amount}})
    if(result){
 

      ShowPopup("Success!", `${dataOnSubmit?.paymentFor} created successfully!`, "success", 5000, true);
      navigate('/payment')
    }
  } catch (error) {
    ShowPopup("Failed!", `${error.message}`, "failed", 5000, true);

  }
  
  
  };

  
  return (
    <div className="flex flex-col space-y-10 justify-center align-middle w-full   py-10">
      <div className='text-center font-bold text-lg'>Create Payment For {data?.user?.firstName} {data?.user?.lastName} </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full my-5 space-y-10">
         <div className="flex space-x-2 justify-around">
          
            <div className="w-1/3">
              <label htmlFor="">User Name</label>
              <input  value={data?.user?.firstName} disabled  type="text" className="input input-bordered input-secondary w-full " {...register("IdNumber", {minLength:8 })}></input>
              <p className="text-red-500"> {errors.IdNumber && <span>Atleast 8 charators required</span>}</p>
            </div>

            <div className="w-1/3">
              <label htmlFor="">User ID</label>
              <input value={data?.user?.username} disabled  type="text" className="input input-bordered input-secondary w-full " {...register("IdNumber", {minLength:8 })}></input>
              <p className="text-red-500"> {errors.IdNumber && <span>Atleast 8 charators required</span>}</p>
            </div>
            
          </div>

          <div className="flex space-x-2 justify-around">
          
          <div className="w-1/3">
            <label htmlFor="">Amount</label>
            <input   type="number" className="input input-bordered input-secondary w-full " {...register("amount", {required:true})}></input>
            <p className="text-red-500"> {errors.amount && <span>Amount Required</span>}</p>
          </div>
          <div className="min-w-[300px] w-1/3">
            <label htmlFor="">Payment For</label>
            <select   className="input input-bordered input-secondary w-full " {...register("paymentFor", {required:true})}>
            <option value=""></option>
      <option value="registrations">Registration</option>
      <option value="emd">EMD</option>
      <option value="refund">Refund</option>
      <option value="other">Other</option>

      
    
    </select>
    <p className="text-red-500"> {errors.paymentFor && <span>This field cannot empty</span>}</p>

          </div>
        </div>

          <div className="flex space-x-2 justify-around">
          
          <div className="w-1/3">
            <label htmlFor="">Description</label>
            <input   type="text" className="input input-bordered input-secondary w-full " {...register("description", { })}></input>
            {/* <p className="text-red-500"> {errors.description && <span>Atleast 8 charators required</span>}</p> */}
          </div>
          <div className="min-w-[300px] w-1/3">
            <label htmlFor="">Payment Status</label>
            <select   className="input input-bordered input-secondary w-full " {...register("paymentStatus", {})}>
            {/* <option value=""></option> */}
      <option value="pending">Pending</option>
      <option value="success">Success</option>
      <option value="failed">Failed</option>
      
    
    </select>
    <p className="text-red-500"> {errors.paymentStatus && <span>Please select Id proof type</span>}</p>

          </div>


          
        </div>
        <div className="flex flex-col space-x-2 justify-center w-1/3 ml-28">

              <label  htmlFor="">Payment proof Image</label>
         
        <div className=" ">
             

              {/* <img
                className="w-full h-36 border py-1"
                src={`https://api.autobse.com${payment?.data?.payment?.image?.url}`}
                alt="No ID proof_Image"
              /> */}
               <input type="file" className="p-1" {...register("imgForPaymentProof", { })}></input>
            </div>
</div>
<div className=" flex justify-center my-5">
          <button
            type="submit" 
            className="btn btn-outline btn-primary px-10"
          >Save </button>
        </div>
        </form>
    </div>
  )
}

export default CreatePayment