import React from "react";

import { useForm } from "react-hook-form";
import { useCreateStateMutation } from "../../utils/graphql";
import Success from "../alerts/success";
const AddState = () => {
  const [createState] = useCreateStateMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataOnSubmit) => {
    console.log("dataOnSubmit", dataOnSubmit);

    const result = await createState({
      variables: { data: { name: dataOnSubmit?.name } },
    });
    if(result?.data?.createState){
   
      alert(`New state ${result?.data?.createState.name} added successfully`)
      window.location.reload()
    }

    console.log("this is the result", result);
  };
  return (
    <div className="w-full max-w-xs     relative ml-50 ">
      <div className="absolute top-3 left-10 ">
        <label htmlFor="my-modal-3" className="btn  btn-outline btn-secondary">
          Add State
        </label>
      </div>

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
              <label>State Name</label>
              <input
                {...register("name", { required: true })}
                className="input input-bordered input-secondary  "
                type="text"
              />
            </div>
            {errors.name && <span>This field is required</span>}
            <div className=" flex justify-center space-x-5 my-5">
              <button type="submit" className="btn btn-outline btn-secondary">
                Add State
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddState;
