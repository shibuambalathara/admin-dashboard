import { Input } from "@material-tailwind/react";
import Select from 'react-select'
import React from "react";
import { useForm,Controller } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useUserQuery,useSellersItemQuery,useEditUserMutation,useSelectorsQuery} from "../../utils/graphql";

import AddUser from "./addUser";

const UserDetailsComponent = () => {
  const { id } = useParams();
 const sellers = useSellersItemQuery();

 const selectors=useSelectorsQuery()
 const [updatedDetails,response]=useEditUserMutation({variables:{where:{id:id}}})

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
  const onSubmit = async(dataOnSubmit) =>{ console.log(dataOnSubmit);

  const user = {
    firstName:dataOnSubmit?.first_Name,
     lastName:dataOnSubmit?.last_Name,
    email:dataOnSubmit?.email,
    username:dataOnSubmit?.user_Name,
     mobile:dataOnSubmit?.mobile,
   businessName:dataOnSubmit?.bussiness ,
   pancardNo:dataOnSubmit?.pancardNumber,
    role:dataOnSubmit?.role, 
     
    
  //    password:dataOnSubmit?.confirmPassword,
      idProofType:dataOnSubmit?.idType,
      idProofNo:dataOnSubmit?.IdNumber,
    country:dataOnSubmit?.country,
     state:dataOnSubmit?.state,
     city:dataOnSubmit?.city,
     status:dataOnSubmit?.status,
  
     bannedSellers: {
      set: dataOnSubmit.bannedSellers.map((seller) => ({id: seller.value}))
    },
     
    
  
  };


 
  if(dataOnSubmit.user_image && dataOnSubmit.user_image.length){
    user["image"] = { upload: dataOnSubmit.user_image[0] }
  }
  if(dataOnSubmit.pancardImage && dataOnSubmit.pancardImage.length){
    user["pancard"] = { upload: dataOnSubmit.pancardImage[0] }
  }
  if(dataOnSubmit.idProof && dataOnSubmit.idProof.length){
    user["idProof"] = { upload: dataOnSubmit.idProof[0] }
  }
   if(dataOnSubmit.idBack && dataOnSubmit.idBack.length){
     user["idProofBack"] = { upload: dataOnSubmit.idBack[0] }
   }
  if(dataOnSubmit.dealership && dataOnSubmit.dealership.length){
   user["dealership"] = { upload: dataOnSubmit.dealership[0] }
  }
  
  try{

    updatedDetails({variables: {data:user}})
  }
  catch(err){
console.log(err,"error")
  }
}

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  

  return (
    <div className="flex flex-col justify-center align-middle w-full bg-gray-50  mt-10">
      <div className="h1 underline text-center p-5  ">
        {data.user.firstName} {data.user.lastName}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full my-5">
        <div className="flex flex-col  w-full space-y-5 ">
          <div className="flex  justify-around">
            <div className="flex flex-col  w-1/3">
              <label className=" text-left" htmlFor="">
                First Name
              </label>
              <input
                type="text "
               defaultValue={data.user.firstName}
                className="input input-bordered input-secondary w-full "
                {...register("first_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.first_Name && (
                  <span>first Name is required</span>
                )}
              </p>
            </div>
            <div className="  flex flex-col  w-1/3">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="input input-bordered input-secondary w-full "
                defaultValue={data.user.lastName}
                {...register("last_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.last_Name && <span>last Name is required</span>}
              </p>
            </div>
          </div>

          <div className="flex  justify-around  ">
            <div className="flex flex-col  w-1/3">
              <label className=" text-left" htmlFor="">
                Email
              </label>
              <input
                type="email"
                defaultValue={data.user.email}
                className="input input-bordered input-secondary w-full "
                {...register("email", { })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.email && <span> email required</span>}
              </p>
            </div>
            <div className="flex flex-col w-1/3 ">
              <label className="w-20" htmlFor="">
                user Name
              </label>
              <input
                type="text"
              defaultValue={data.user.username}
              className="input input-bordered input-secondary w-full "
                {...register("user_Name", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.user_Name && <span>User Name required</span>}
              </p>
            </div>
          </div>
          <div className="flex  justify-around  ">
            <div className="flex flex-col w-1/3 ">
              <label htmlFor="">Mobile</label>
              <input
                type="number"
                defaultValue={data.user.mobile}
                className="input input-bordered input-secondary w-full "
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
            <div className="flex flex-col w-1/3 ">
              <label htmlFor="">Bussiness Name</label>
              <input
                type="text"
                defaultValue={data?.user?.businessName}
                className="input input-bordered input-secondary w-full "
                {...register("bussiness", {  })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.bussiness && <span>Bussiness Name required</span>}
              </p>
            </div>
          </div>

        
          <div className="flex  justify-around  ">
            {/* <div className="flex flex-col w-1/3 ">
              <label htmlFor="">Category</label>
              <select
                defaultValue={data.user.category}
                className="input input-bordered input-secondary w-full "
                {...register("category", {})}
              >
                <option value=""></option>
                <option>2W</option>
                <option>4W</option>
                <option>CV</option>
              </select>
              <p className="text-red-500">
                {" "}
                {errors.category && <span>Please select Category</span>}
              </p>
            </div> */}
          
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Bannned Sellers</label>
              

                <Controller
  name="bannedSellers"
  control={control}
  defaultValue={data?.user?.bannedSellers.map((event) => ({
    label: event.name,
    value: event.id
  }))}
  render={({ field }) => (
    <Select
      className="w-full text-black max-w-[560px] mt-2"
      option=""
      options={sellers?.data?.sellers.map((seller) => ({
        label: seller.name,
        value: seller.id
      }))}
      {...field}
      isMulti
      getOptionValue={(option) => option.value}
    />
  )}
/>

                
              </div>
            </div>
         

          <div className="flex  justify-around  ">
          <div className="min-w-[300px] w-1/3">
              <label htmlFor="">Role</label>
              <select  className="input input-bordered input-secondary w-full " {...register("role", {required:true})}>
              <option value={data.user.role}>{data.user.role}</option>
        <option value="admin">Admin</option>
        <option value="staff">Staff</option>
        <option value="seller">Seller</option>
        <option value="dealer">Dealer</option>
      
      </select>
      <p className="text-red-500"> {errors.role && <span>Please select Role</span>}</p>

            </div>
            
              <div className="flex flex-col w-1/3 ">
                <label htmlFor="">Status</label>
                <select
                  defaultValue={data.user.status}
                  className="input input-bordered input-secondary w-full "
                  {...register("status", { })}
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
            </div>
         

          <div className="flex space-x-2 justify-around">
          <div className="min-w-[300px] w-1/3">
              <label htmlFor="">ID Proof Type</label>
              <select  defaultValue={data?.user?.idProofType} className="input input-bordered input-secondary w-full " {...register("idType", {required:true})}>
              <option value={data?.user?.idProofType}>{data?.user?.idProofType}</option>
        <option value="aadhar">Aadhar</option>
        <option value="drivingLicense">Driving Licence</option>
        <option value="passport">Passport</option>
        
      
      </select>
      <p className="text-red-500"> {errors.idType && <span>Please select Id proof type</span>}</p>

            </div>
            <div className="w-1/3">
              <label htmlFor="">ID proof Number</label>
              <Input  defaultValue={data?.user?.idProofNo} type="text" className="input input-bordered input-secondary w-full " {...register("IdNumber", {minLength:8 })}></Input>
              <p className="text-red-500"> {errors.IdNumber && <span>Atleast 8 charators required</span>}</p>
            </div>
          </div>

           
         

            <div className="flex space-x-2 justify-around">
         
           <div className="w-1/3">
             <label htmlFor="">State</label>
        
        <select defaultValue={data?.user?.city} className="input input-bordered input-secondary w-full " {...register("state", {})}>
 {selectors?.data?.states.map((state) => (
   <option  value={state.name} key={state.name}>{state.name}</option>
 ))}
</select>
   
      
           </div>
     
           
           
            <div className="w-1/3">
              <label htmlFor="">City</label>
         
         <select  defaultValue={data?.user?.city} className="input input-bordered input-secondary w-full " {...register("city", {})}>
  {selectors?.data?.locations?.map((loc) => (
    <option  value={loc.id} key={loc.id}>{loc.city}</option>
  ))}
</select>
      <p className="text-red-500"> {errors.city && <span>Please select city</span>}</p>
            </div>
            </div>
        

          <div className="flex space-x-2 justify-around">
            <div className=" flex  flex-col w-1/3">
              <label htmlFor="">ID proof(front page)</label>
              <Input className="input   " type="file" {...register("idProof", { })}/>

              

              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.idProof?.url}`}
                alt="No id proof front page"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="">ID proof(Back page)</label>
              <Input type="file" className="p-1" {...register("idBack", { })}></Input>

              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.idProofBack?.url}`}
                alt="no id proof back side_image"
              />
            </div>
          </div>

          <div className="flex space-x-2 justify-around">
            <div className="flex w-1/3 flex-col">
              <label htmlFor="">Dealership Image</label>
              <Input className="text-black" type="file" {...register("dealership", {})}/>
              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.dealership?.url}`}
                alt=" No dealership img"
              />
            </div>
            <div className="flex  flex-col w-1/3">
              <label htmlFor="">Country</label>
              <Input defaultValue={data?.user?.country} className="input input-bordered input-secondary w-full " {...register("country", { })}/>
              <p className="text-red-500">
                {" "}
                {errors.country && <span>country Required</span>}
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center my-5">
          <button
            type="submit" 
            className="btn btn-outline btn-primary"
          >Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsComponent;
