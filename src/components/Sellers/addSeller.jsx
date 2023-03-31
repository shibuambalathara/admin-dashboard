import React from "react";
import { useForm } from "react-hook-form";
import {useCreateSellerMutation} from '../../utils/graphql'

const AddSeller = () => {
  
  const [sellerName]=useCreateSellerMutation()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = dataOnSubmit =>{ console.log(dataOnSubmit);

   const result=sellerName({variables:{data:{name:dataOnSubmit?.sellerName}}})
  }
  return (
    <div className="w-full max-w-xs relative ml-50">
   
   <div className="absolute top-3 left-10 ">
      <label htmlFor="my-modal-3" className="btn  btn-outline btn-secondary">
        Add Seller
      </label>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-box relative w-96">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="flex flex-col">
       
            <label>Seller Name</label>
            <input
             {...register("sellerName", { required: true })}
              className="input input-bordered input-secondary  "
              type="text"
            />
          
          </div>
          {errors.sellerName && <span>This field is required</span>}
          <div className=" flex justify-center space-x-5 my-5">
            <button type="submit" className="btn btn-outline btn-secondary">
              Add Seller
            </button>
           
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
