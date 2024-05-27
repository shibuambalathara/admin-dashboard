import { Input } from "@material-tailwind/react";
import Select from "react-select";
import React from "react";
import { useForm, Controller } from "react-hook-form";

import { useParams, useNavigate } from "react-router-dom";
import {
  useUserQuery,
  useSellersItemQuery,
  useEditUserMutation,
  useSelectorsQuery,
  useStatesQuery,
  useUserauthenticationQuery,
} from "../../utils/graphql";
import { ShowPopup } from "../alerts/popUps";
import AddUser from "./addUser";
import { formStyle, h2Style, headerStyle, inputStyle, labelAndInputDiv, pageStyle } from "../utils/style";

const UserDetailsComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const sellers = useSellersItemQuery();
  const allStates = useStatesQuery();
  const {data:loginUser}=useUserauthenticationQuery()
  

  const selectors = useSelectorsQuery();
  const [updatedDetails, response] = useEditUserMutation({
    variables: { where: { id: id } },
  });

  const { data, loading, error } = useUserQuery({
    variables: { where: { id: id } },
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (dataOnSubmit) => {
    

    const user = {
      firstName: dataOnSubmit?.first_Name,
      lastName: dataOnSubmit?.last_Name,
      email: dataOnSubmit?.email,
      username: dataOnSubmit?.user_Name,
      mobile: dataOnSubmit?.mobile,
      businessName: dataOnSubmit?.bussiness,
      pancardNo: dataOnSubmit?.pancardNumber,
     
      // vehicleBuyingLimit:+dataOnSubmit?.buyingLimitCount,

      //    password:dataOnSubmit?.confirmPassword,
      idProofType: dataOnSubmit?.idType,
      idProofNo: dataOnSubmit?.IdNumber,
      country: dataOnSubmit?.country,
      // state: dataOnSubmit?.state,
      city: dataOnSubmit?.city,
      status: dataOnSubmit?.status,

      bannedSellers: {
        set: dataOnSubmit.bannedSellers.map((seller) => ({ id: seller.value })),
      },
      states: {
        set: dataOnSubmit.states.map((state) => ({ id: state.value })),
      },
    };
if(loginUser?.authenticatedItem?.role==='admin'){
 
 
  user['role']=dataOnSubmit?.role
}
if(loginUser?.authenticatedItem?.role==='admin'){
 

  user['state']=dataOnSubmit?.state
}
    if (dataOnSubmit.user_image && dataOnSubmit.user_image.length) {
      user["image"] = { upload: dataOnSubmit.user_image[0] };
    }
    if (dataOnSubmit.pancardImage && dataOnSubmit.pancardImage.length) {
      user["pancard"] = { upload: dataOnSubmit.pancardImage[0] };
    }
    if (dataOnSubmit.idProof && dataOnSubmit.idProof.length) {
      user["idProof"] = { upload: dataOnSubmit.idProof[0] };
    }
    if (dataOnSubmit.idBack && dataOnSubmit.idBack.length) {
      user["idProofBack"] = { upload: dataOnSubmit.idBack[0] };
    }
    if (dataOnSubmit.dealership && dataOnSubmit.dealership.length) {
      user["dealership"] = { upload: dataOnSubmit.dealership[0] };
    }

    updatedDetails({ variables: { data: user } })
      .then((res) => {
        ShowPopup(
          "Success!",
          `${dataOnSubmit?.first_Name} Updated successfully!`,
          "success",
          5000,
          true
        );
        navigate("/users");
      })
      .catch((err) => {
        ShowPopup(
          "user updation Failed!",
          `${err.message}`,
          "error",
          5000,
          true
        );
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={`${pageStyle.data}`}>
    <div className={`${headerStyle.data}`}>
         <h2 className={`${h2Style.data}`}>
      {data.user.firstName} {data.user.lastName}</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
      <div className={`${formStyle.data}`}>
         
           <div className={`${labelAndInputDiv.data}`}>
              <label className=" text-left" htmlFor="">
                First Name
              </label>
              <input
                type="text "
                defaultValue={data.user.firstName}
                className={`${inputStyle.data}`}
                {...register("first_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.first_Name && <span>first Name is required</span>}
              </p>
            </div>
            <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className={`${inputStyle.data}`}
                defaultValue={data.user.lastName}
                {...register("last_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.last_Name && <span>last Name is required</span>}
              </p>
            </div>
        

           <div className={`${labelAndInputDiv.data}`}>
              <label className=" text-left" htmlFor="">
                Email
              </label>
              <input
                type="email"
                defaultValue={data.user.email}
                className={`${inputStyle.data}`}
                {...register("email", {})}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.email && <span> email required</span>}
              </p>
            </div>
         <div className={`${labelAndInputDiv.data}`}>
              <label className="w-20" htmlFor="">
                user Name
              </label>
              <input
                type="text"
                defaultValue={data.user.username}
                className={`${inputStyle.data}`}
                {...register("user_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.user_Name && <span>User Name required</span>}
              </p>
            </div>
       
       
         <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Mobile</label>
              <input
                type="number"
                defaultValue={data.user.mobile}
                className={`${inputStyle.data}`}
                {...register("mobile", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.phoneRequired && (
                  <span>phone number 10 digits required</span>
                )}
              </p>
            </div>
         <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Bussiness Name</label>
              <input
                type="text"
                defaultValue={data?.user?.businessName}
                className={`${inputStyle.data}`}
                {...register("bussiness", {})}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.bussiness && <span>Bussiness Name required</span>}
              </p>
            </div>
      
         
         <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Current Buying Limit </label>
              <input
                type="number"
                disabled
                defaultValue={
                  data?.user?.currentVehicleBuyingLimit?.vehicleBuyingLimit
                }
                className={`${inputStyle.data}`}
                // {...register("buyingLimitCount", {

                // })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.phoneRequired && (
                  <span>phone number 10 digits required</span>
                )}
              </p>
            </div>

           <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Bannned Sellers</label>

              <Controller
                name="bannedSellers"
                control={control}
                defaultValue={data?.user?.bannedSellers.map((event) => ({
                  label: event.name,
                  value: event.id,
                }))}
                render={({ field }) => (
                  <Select
             className={`${inputStyle.data}`}
                    option=""
                    options={sellers?.data?.sellers.map((seller) => ({
                      label: seller.name,
                      value: seller.id,
                    }))}
                    {...field}
                    isMultiRole
                    getOptionValue={(option) => option.value}
                  />
                )}
              />
            </div>
    

     

            <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">ID Proof Type</label>
              <select
                defaultValue={data?.user?.idProofType}
                className={`${inputStyle.data}`}
                {...register("idType", { required: true })}
              >
                <option value={data?.user?.idProofType}>
                  {data?.user?.idProofType}
                </option>
                <option value="aadhar">Aadhar</option>
                <option value="drivingLicense">Driving Licence</option>
                <option value="passport">Passport</option>
              </select>
              <p className="text-red-500">
                {" "}
                {errors.idType && <span>Please select Id proof type</span>}
              </p>
            </div>
            <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">ID proof Number</label>
              <input
                defaultValue={data?.user?.idProofNo}
                type="text"
                className={`${inputStyle.data}`}
                {...register("IdNumber", { minLength: 8 })}
              />
              <p className="text-red-500">
                {" "}
                {errors.IdNumber && <span>Atleast 8 charators required</span>}
              </p>
            </div>
       

        
              <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">State</label>

              <select
                className={`${inputStyle.data}`}
                {...register("state", {})}
              >
                <option value={data?.user?.state}>{data?.user?.state}</option>
                {selectors?.data?.states.map((state) => (
                  <option value={state.name} key={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

              <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">City</label>

              <input
                defaultValue={data?.user?.city}
                className={`${inputStyle.data}`}
                {...register("city", {})}
              />
              <p className="text-red-500">
                {" "}
                {errors.city && <span>Please select city</span>}
              </p>
            </div>
        

   
              <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Pancard</label>
              <input
                defaultValue={data?.user?.pancardNo}
                type="text"
                className={`${inputStyle.data}`}
                {...register("pancardNumber", {})}
              />
              <p className="text-red-500">
                {" "}
                {errors.IdNumber && <span>Atleast 8 charators required</span>}
              </p>
            </div>

            <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Country</label>
              <input
                defaultValue={data?.user?.country}
                className={`${inputStyle.data}`}
                {...register("country", {})}
              />
              <p className="text-red-500">
                {" "}
                {errors.country && <span>country Required</span>}
              </p>
</div>
              <div className="flex flex-col  w-full">
                <label htmlFor="">Auction Allowed states</label>

                <Controller
                  name="states"
                  control={control}
                  defaultValue={data?.user?.states.map((state) => ({
                    label: state.name,
                    value: state.id,
                  }))}
                  render={({ field }) => (
                    <Select
               className={`${inputStyle.data}`}
                      option=""
                      options={allStates?.data?.states?.map((state) => ({
                        label: state.name,
                        value: state.id,
                      }))}
                      {...field}
                      isMulti
                      getOptionValue={(option) => option.value}
                    />
                  )}
                />
              </div>

              { loginUser?.authenticatedItem?.role==='admin' &&  <div>
            <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Role</label>
              <select
                className={`${inputStyle.data}`}
                {...register("role", { required: true })}
              >
                <option value={data.user.role}>{data.user.role}</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="seller">Seller</option>
                <option value="dealer">Dealer</option>
              </select>
              <p className="text-red-500">
                {" "}
                {errors.role && <span>Please select Role</span>}
              </p>
            </div>

         <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Status</label>
              <select
                defaultValue={data.user.status}
                className={`${inputStyle.data}`}
                {...register("status", {})}
              >
                <option value=""></option>
                <option value="pending">Pending</option>
                <option value="blocked">Blocked</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <p className="text-red-500">
                {" "}
                {errors.status && <span>Please select status</span>}
              </p>
            </div>
          </div>}

              <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Pancard Image</label>
              <input
                type="file"
                className={`${inputStyle.data}`}
                {...register("pancardImage", {})}
              ></input>

              <img
                 className={`${inputStyle.data} h-40`}
                src={`${data?.user?.pancard?.url}`}
                alt="no pancard_Image"
              />
            </div>
    


            <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">ID proof(front page)</label>
              <input
                 className={`${inputStyle.data}`}
                type="file"
                {...register("idProof", {})}
              />

              <img
                className={`${inputStyle.data} h-40`}
                src={`${data?.user?.idProof?.url}`}
                alt="No id proof front page"
              />
            </div>
              <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">ID proof(Back page)</label>
              <input
                type="file"
                className={`${inputStyle.data} `}
                {...register("idBack", {})}
              ></input>

              <img
               className={`${inputStyle.data} h-40`}
                src={`${data?.user?.idProofBack?.url}`}
                alt="no id proof back side_image"
              />
            </div>
       
            <div className={`${labelAndInputDiv.data}`}>
              <label htmlFor="">Dealership Image</label>
              <input   className={`${inputStyle.data} `} type="file" {...register("dealership", {})} />
              <img
                className={`${inputStyle.data} h-40`}
                src={`${data?.user?.dealership?.url}`}
                alt=" No dealership img"
              />
            </div>
       
            </div>
       
        <div className=" flex justify-center my-5">
          <button type="submit" className="btn btn-outline btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsComponent;
