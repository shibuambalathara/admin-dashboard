import React from 'react'
import { useForm } from "react-hook-form";
import { useParams,useNavigate } from 'react-router-dom';
import{useUserQuery,useCreatePaymentMutation} from '../../utils/graphql'
import { ShowPopup } from '../alerts/popUps';
import { formStyle, h2Style, headerStyle, inputStyle, labelAndInputDiv, pageStyle } from '../utils/style';
import { SelectInput } from '../utils/formField';
import { paymentsFor } from '../utils/constantValues';
const CreatePayment = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const { data,} = useUserQuery({variables: { where: { id: id } }});
  const [addAmount]=useCreatePaymentMutation()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async(dataOnSubmit) =>{ 
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
    <div className={`${pageStyle.data}`}>
     <div className={`${headerStyle.data}`}>
          <h2 className={`${h2Style.data}`}>
          Create Payment For {data?.user?.firstName} {data?.user?.lastName}</h2>
          </div>
      <form onSubmit={handleSubmit(onSubmit)} >
      <div className={`${formStyle.data}`}>

      
          
      <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">User Name</label>
              <input  value={data?.user?.firstName} disabled  type="text" className={`${inputStyle.data}`} {...register("IdNumber", {minLength:8 })}></input>
              <p className="text-red-500"> {errors.IdNumber && <span>Atleast 8 charators required</span>}</p>
            </div>

            <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">User ID</label>
              <input value={data?.user?.username} disabled  type="text" className={`${inputStyle.data}`} {...register("IdNumber", {minLength:8 })}></input>
              <p className="text-red-500"> {errors.IdNumber && <span>Atleast 8 charators required</span>}</p>
            </div>
            
     

         
          
            <div className={`${labelAndInputDiv.data}`}>
            <label htmlFor="">Amount</label>
            <input   type="number" className={`${inputStyle.data}`} {...register("amount", {required:true})}></input>
            <p className="text-red-500"> {errors.amount && <span>Amount Required</span>}</p>
          </div>
          <div className={`${labelAndInputDiv.data}`}>
           
            <SelectInput label="Payment For" name="paymentFor" options={paymentsFor} register={register}/>
     

      
    

    <p className="text-red-500"> {errors.paymentFor && <span>This field cannot empty</span>}</p>

          </div>
        

          
          <div className={`${labelAndInputDiv.data}`}>
            <label htmlFor="">Description</label>
            <input   type="text" className={`${inputStyle.data}`} {...register("description", { })}></input>
            {/* <p className="text-red-500"> {errors.description && <span>Atleast 8 charators required</span>}</p> */}
          </div>
          <div className={`${labelAndInputDiv.data}`}>
            <label htmlFor="">Payment Status</label>
            <select  className={`${inputStyle.data}`} {...register("paymentStatus", {})}>
            {/* <option value=""></option> */}
      <option value="pending">Pending</option>
      <option value="success">Success</option>
      <option value="failed">Failed</option>
      
    
    </select>
    <p className="text-red-500"> {errors.paymentStatus && <span>Please select Id proof type</span>}</p>

  


          
        </div>
        <div className={`${labelAndInputDiv.data}`}>

              <label  htmlFor="">Payment proof Image</label>
         
        <div className=" ">
             

              {/* <img
                className="w-full h-36 border py-1"
                src={`https://api.autobse.com${payment?.data?.payment?.image?.url}`}
                alt="No ID proof_Image"
              /> */}
               <input type="file" className={`${inputStyle.data}`} {...register("imgForPaymentProof", { })}></input>
            </div>
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