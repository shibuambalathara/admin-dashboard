import React,{useState}from "react";
import { useForm,Controller } from "react-hook-form";
import {useCreateSellerMutation,useEventTypesQuery,useSellerAllQuery,useSellerEditQuery,useSellersItemQuery} from '../../utils/graphql'
import { ShowPopup } from '../alerts/popUps';
import Select from 'react-select'

const AddSeller = () => {
  const [sellerName]=useCreateSellerMutation()
  const eventType=useEventTypesQuery()
 


  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register,reset,control, handleSubmit, watch, formState: { errors } } = useForm();
  const {  refetch } = useSellersItemQuery();
  const onSubmit = dataOnSubmit =>{

  try {
     const result=sellerName({variables:{data:
      {
        name:dataOnSubmit?.sellerCompanyName,
        billingContactPerson:dataOnSubmit?.billingContactPerson,
        contactPerson:dataOnSubmit?.ContactPerson,
        GSTNumbber:dataOnSubmit?.gst,
        mobile:dataOnSubmit?.mobile,
        nationalHead:dataOnSubmit?.nationalHead,
        // vehicleCategory:dataOnSubmit?.vehicleCategory,
        vehicleCategory: {
          connect: dataOnSubmit?.eventId?.map((event) => ({id: event.value}))
        },

      }
      
    }})
     ShowPopup("Success!", `${dataOnSubmit?.sellerCompanyName} Added successfully!`,"success", 5000, true);
  } catch (error) {
    ShowPopup("Failed!", `${error?.message}`, "error", 5000, true);
  }

  refetch()
  setIsModalOpen(false);
  reset()
  
  }
  return (
    <div className=" max-w-xs relative ml-50">
   
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
             {...register("sellerCompanyName", { required: true })}
              className="input input-bordered input-secondary  "
              type="text"
            />
             
               <label>GST Number</label>
            <input
             {...register("gst", { required: true })}
              className="input input-bordered input-secondary  "
              type="text"
            />
               <label>Billing Contact Person</label>
            <input
             {...register("billingContactPerson",{  })}
              className="input input-bordered input-secondary  "
              type="text"
            />
          
          <label> Contact Person</label>
            <input
             {...register("ContactPerson",{  })}
              className="input input-bordered input-secondary  "
              type="text"
            />
              <label>Billing Contact Person</label>
            <input
             {...register("billingContactPerson",{  })}
              className="input input-bordered input-secondary  "
              type="text"
            />
              <label>Mobile</label>
            <input
             {...register("mobile",{  })}
              className="input input-bordered input-secondary  "
              type="text"
            />
            <label>National Head</label>
             <input
             {...register("nationalHead",{  })}
              className="input input-bordered input-secondary  "
              type="text"
            />
                   <div className="flex flex-col space-y-2 relative ">
                <label className="text-base" htmlFor="">
                  Event Type
                </label>
                <div class="absolute inset-y-10 - right-32 flex items-center ">
                  <div class="h-5 w-0.5 border bg-gray-400 "></div>
                </div>
                <Controller
  name="eventId"
  control={control}

  render={({ field }) => (
    <Select
      className="w-full text-black max-w-[560px] mt-2"
      options={eventType?.data?.eventTypes?.map((event) => ({
        label: event.name,
        value: event.id
      }))}
      {...field}
      isMulti
      getOptionValue={(option) => option.value}
    />
  )}
/>
               
                <p className="text-red-500"> {errors.event&& <span>Event Name required</span>}</p> 

              </div>
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
