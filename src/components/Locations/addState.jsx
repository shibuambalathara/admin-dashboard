import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateStateMutation, useStatesQuery } from "../../utils/graphql";
import { ShowPopup } from "../alerts/popUps";

const AddState = () => {
  const [createState] = useCreateStateMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { refetch } = useStatesQuery(); // get the data from the server

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataOnSubmit) => {
   

    try {
      const result = await createState({
        variables: { data: { name: dataOnSubmit?.name } },
      });
      ShowPopup(
        "Success!",
        `${dataOnSubmit?.name} Added successfully!`,
        "success",
        5000,
        true
      );
    } catch (error) {
      ShowPopup("Failed!", `${error?.message}`, "error", 5000, true);
    }

    setIsModalOpen(false);
    refetch();
    reset();
  };
  return (
    <div className="w-full max-w-xs     relative ml-50 ">
      <div className="absolute top-3 left-10 ">
        <label htmlFor="my-modal-3" className="btn  btn-outline btn-secondary">
          Add State
        </label>
      </div>

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
