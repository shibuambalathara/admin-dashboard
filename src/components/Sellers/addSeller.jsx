import React,{useState}from "react";
import { useForm } from "react-hook-form";
import {useCreateSellerMutation,useSellersItemQuery} from '../../utils/graphql'
import { ShowPopup } from '../alerts/popUps';

const AddSeller = () => {
  
  const [sellerName]=useCreateSellerMutation()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
  const {  refetch } = useSellersItemQuery();
  const onSubmit = dataOnSubmit =>{
     console.log(dataOnSubmit);

  try {
     const result=sellerName({variables:{data:{name:dataOnSubmit?.sellerName}}})
     ShowPopup("Success!", `${dataOnSubmit?.sellerName} Added successfully!`,"success", 5000, true);
  } catch (error) {
    console.log("the error in add seller",error);
    ShowPopup("Failed!", `${error?.message}`, "error", 5000, true);
  }

  refetch()
  setIsModalOpen(false);
  reset()
  
  }
  return (
    <div className="w-full max-w-xs relative ml-50">
   
   <div className="absolute top-3 left-10 ">
      <label htmlFor="my-modal-3" className="btn  btn-outline btn-secondary">
        Add Seller
      </label>
      </div>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
      <div className="modal ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-box relative w-96">
        <label
              htmlFor="modal-toggle"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)} // add click handler to close modal
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
