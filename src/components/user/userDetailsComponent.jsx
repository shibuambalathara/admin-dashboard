import { Input } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useUserQuery,useSellersQuery } from "../../utils/graphql";

import AddUser from "./addUser";

const UserDetailsComponent = () => {
  const { id } = useParams();
 const sellers = useSellersQuery();

  const { data, loading, error } = useUserQuery({
    variables: { where: { id: id } },
    
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  

  return (
    <div className="flex flex-col justify-center align-middle w-full bg-gray-50  mt-10">
      <div className="h1 underline text-center p-5">
        {data.user.firstName} {data.user.lastName}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full my-5">
        <div className="flex flex-col  w-full space-y-5 ">
          <div className="flex  justify-around  ">
            <div className="flex flex-col  ">
              <label className=" text-left" htmlFor="">
                First Name
              </label>
              <input
                type="text "
               defaultValue={data.user.firstName}
                className="p-1  w-[300px] font-bold border"
                {...register("firstNameRequired", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.firstNameRequired && (
                  <span>first Name is required</span>
                )}
              </p>
            </div>
            <div className="  flex flex-col">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="p-1 border w-[300px] font-bold"
                defaultValue={data.user.lastName}
                {...register("lastNameRequired", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.lastNameRequired && <span>last Name is required</span>}
              </p>
            </div>
          </div>

          <div className="flex  justify-around  ">
            <div className="flex flex-col  ">
              <label className=" text-left" htmlFor="">
                Email
              </label>
              <input
                type="email"
                defaultValue={data.user.email}
                className="p-1 border w-[300px] font-bold"
                {...register("emailRequired", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.emailRequired && <span> email required</span>}
              </p>
            </div>
            <div className="flex flex-col  ">
              <label className="w-20" htmlFor="">
                user Name
              </label>
              <input
                type="text"
              defaultValue={data.user.username}
                className="p-1 border w-[300px] font-bold"
                {...register("userNameRequired", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.userNameRequired && <span>User Name required</span>}
              </p>
            </div>
          </div>
          <div className="flex  justify-around  ">
            <div className="flex flex-col  ">
              <label htmlFor="">Mobile</label>
              <input
                type="number"
                defaultValue={data.user.mobile}
                className="p-1 w-[300px] border font-bold"
                {...register("phoneRequired", {
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
            <div className="flex flex-col  ">
              <label htmlFor="">Bussiness Name</label>
              <input
                type="text"
                defaultValue={data?.user?.businessName}
                className="p-1 w-[300px] border font-bold"
                {...register("bussiness", { required: true })}
              ></input>
              <p className="text-red-500">
                {" "}
                {errors.bussiness && <span>Bussiness Name required</span>}
              </p>
            </div>
          </div>

          {/* <div className="flex  justify-around  ">
        <div className="flex flex-col  ">
            <label  htmlFor="">Password</label>
            <input type="text" value={data?.user?.pas}  className="h-7 border w-[300px]" {...register("password", { required: true},)}></input>
            <p className="text-red-500"> {errors.password && <span>password required</span>}</p>

          
          </div> 
            <div className="flex flex-col  ">
            <label  htmlFor="">Confirm Password</label>
            <input type="text" className=" h-7 border w-[300px]" {...register("confirmPassword", { required: true})}></input>
            <p className="text-red-500"> {errors.confirmPassword && <span>Confirm password required</span>}</p>
          </div>
        </div> */}
          <div className="flex  justify-around  ">
            <div className="flex flex-col  ">
              <label htmlFor="">Category</label>
              <select
                defaultValue={data.user.category}
                className="flex justify-between py-1  h-[30px]  w-[300px] border"
                {...register("category", { required: true })}
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
            </div>
            <div className="flex  justify-around  ">
              <div className="flex flex-col  ">
                <label htmlFor="">Bannned Sellers</label>
                <select
                  defaultValue={data.user.bannedSellers}
                  className="flex justify-between py-1 h-[30px] w-[300px] border"
                >
                  <option value=""></option>
                  {sellers.data.sellers.map((seller) => (
                    <option>{seller.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex  justify-around  ">
            <div className="flex flex-col  ">
              <label htmlFor="">Role</label>
              <select
                defaultValue={data.user.role}
                className="flex justify-between py-1 w-[300px]  h-[30px] border"
                {...register("role", { required: true })}
              >
                <option value=""></option>
                <option value="staff">Staff</option>
                <option value="seller">Seller</option>
                <option value="dealer">Dealer</option>
              </select>
              <p className="text-red-500">
                {" "}
                {errors.role && <span>Please select Role</span>}
              </p>
            </div>
            <div className="flex  justify-around  ">
              <div className="flex flex-col  ">
                <label htmlFor="">Status</label>
                <select
                  defaultValue={data.user.status}
                  className="flex justify-between py-1 w-[300px] h-[30px] border"
                  {...register("status", { required: true })}
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
          </div>

          <div className="flex space-x-2 justify-around">
            <div className="flex w-[300px] flex-col">
              <label htmlFor="">Image</label>
              <Input className="text-black" type="file" {...register("user_image")}/>
            <p className="text-red-500"> {errors.user_image && <span>Image Required</span>}</p>
              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.image?.url}`}
                alt=" No User_Image"
              />
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Pancard</label>
              {/* <Input type="file" className="p-1" {...register("pancardImage", { required: true})}></Input>
            <p className="text-red-500"> {errors.pancardImage && <span>pancard Image Required</span>}</p> */}
              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.pancard?.url}`}
                alt="No pancard_Image"
              />

              <div className="flex min-w-[300px] flex-col">
                <label htmlFor="">Pancard Number</label>
                <Input
                  className="text-black py-1"
                  type="text"
                  defaultValue={data?.user?.pancardNo}
                  {...register("pancardNumber", { required: true })}
                />
                <p className="text-red-500">
                  {" "}
                  {errors.pancardNumber && <span>pancard Number Required</span>}
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-2 justify-around">
            <div className="flex w-[300px] flex-col">
              <label htmlFor="">ID proof(front page)</label>
              {/* <Input className="text-black"   type="file" {...register("idProof", { required: true})}/>  */}
              <p className="text-red-500">
                {" "}
                {errors.idProof && <span>id Proof Required</span>}
              </p>

              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.idProof?.url}`}
                alt="No id proof front page"
              />
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">ID proof(Back page)</label>
              {/* <Input type="file" className="p-1" {...register("idBack", { required: true})}></Input>
            
            <p className="text-red-500"> {errors.idBack && <span>ID proof image Required</span>}</p> */}
              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.idProofBack?.url}`}
                alt="no id proof back side image"
              />
            </div>
          </div>

          <div className="flex space-x-2 justify-around">
            <div className="flex w-[300px] flex-col">
              <label htmlFor="">Dealership Image</label>
              {/* <Input className="text-black" type="file" {...register("dealership", { required: true})}/>
            <p className="text-red-500"> {errors.dealership && <span>Dealership Required</span>}</p> */}
              <img
                className="w-full h-36 border"
                src={`https://api.autobse.com${data?.user?.dealership?.url}`}
                alt=" No dealership img"
              />
            </div>
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Country</label>
              <Input
                className="text-black py-1"
                type="text"
                {...register("county", { required: true })}
              />
              <p className="text-red-500">
                {" "}
                {errors.county && <span>country Required</span>}
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center my-5">
          <input
            type="submit" 
            className="bg-blue-700 p-3 rounded text-white w-36"
          />
        </div>
      </form>
    </div>
  );
};

export default UserDetailsComponent;
