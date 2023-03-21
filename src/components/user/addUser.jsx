import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

import React from "react";
import {useCreateUserMutation} from '../../utils/graphql'

const AddUser = () => {

  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[createUser,{data,loading,error}]=useCreateUserMutation()

  const onSubmit =async (dataOnSubmit) => {

     console.log(dataOnSubmit,"onSubmit");
    try{

      const result=await createUser({variables:
        {data:
        {
          firstName:dataOnSubmit?.first_Name,
          lastName:dataOnSubmit?.last_Name ||'',
          email:dataOnSubmit?.email || '',
          username:dataOnSubmit?.user_Name,
          mobile:dataOnSubmit?.mobile,
        businessName:dataOnSubmit?.businessName || '',
         category:{name:dataOnSubmit?.category}, 
          // category:dataOnSubmit?.category,
          // bannedSellers:dataOnSubmit?.bannedSellers,
          // confirmPassword:dataOnSubmit?.confirmPassword,
          //  image:{upload:dataOnSubmit?.user_image[0] },
          //  pancard:{upload:dataOnSubmit?.pancardImage[0] || ''},
          //  idProof:{upload:dataOnSubmit?.idProof[0]},
          // idProofBack:{upload:dataOnSubmit?.idBack[0]},
          // dealership:{upload:dataOnSubmit?.dealership[0]},
          // country:dataOnSubmit?.country
        
        }
      }
    })
    }
    catch(err){
console.log(err,"error")
    }
  }

console.log(data,"dataaaaaaaaa")
 

  return (
    <div className="flex justify-center align-middle w-full   mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full my-5">
        <div className="flex flex-col  w-full space-y-5">
          <div className="flex space-x-2 w-full justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">first Name</label>
              <Input type="text" className="p-1" {...register("first_Name", { required: true })}></Input>
            <p className="text-red-500"> {errors.first_Name && <span>first Name is required</span>}</p> 
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Last Name</label>
              <Input type="text" className="p-1"  {...register("last_Name", {  })}></Input>
              <p className="text-red-500"> {errors.last_Name && <span>last Name is required</span>}</p> 

            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">Email</label>
              <Input type="email" className="p-1"  {...register("email", { })}></Input>
              <p className="text-red-500"> {errors.email && <span> email required</span>}</p> 
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">user Name</label>
              <Input type="text" className="p-1" {...register("user_Name", { required: true })}></Input>
              <p className="text-red-500"> {errors.user_Name && <span>User Name required</span>}</p> 
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">mobile</label>
              <Input type="number"  className="p-1" {...register("mobile", { required: true,minLength:10,maxLength:10})}></Input>
              <p className="text-red-500"> {errors.mobile && <span>phone number 10 digits required</span>}</p>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Bussiness Name</label>
              <Input type="text" className="p-1" {...register("bussiness", { })}></Input>
              <p className="text-red-500"> {errors.bussiness && <span>Bussiness Name required</span>}</p>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly ">
            <div className="min-w-[300px]">
              <label htmlFor="">Category</label>
              <select className="flex justify-between py-1  h-[30px] w-full" {...register("category", { })}>
        <option value="2W">2W</option>
        <option value="4w">4W</option>
        <option value="CV">CV</option>
      
      </select>
      <p className="text-red-500"> {errors.category && <span>Please select Category</span>}</p>
            </div>
            <div className="flex space-x-2 justify-evenly">
          
          <div className="min-w-[300px]">
            <label htmlFor="">Bannned Sellers</label>
            <select  className="flex justify-between py-1 h-[30px] w-full" >
      <option value=""></option>
      <option></option>
      <option></option>
  
    
    </select>
     
          </div>
        </div>
          </div>
          <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">Password</label>
              <Input type="text" className="p-1" {...register("password", {},)}></Input>
              <p className="text-red-500"> {errors.password && <span>password required</span>}</p>

            
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Confirm Password</label>
              <Input type="text" className="p-1" {...register("confirmPassword", { })}></Input>
              <p className="text-red-500"> {errors.confirmPassword && <span>Confirm password required</span>}</p>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Image</label>
              <Input className="text-black" type="file" {...register("user_image", { })}/>
              <p className="text-red-500"> {errors.user_image && <span>Image Required</span>}</p>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Pancard</label>
              <Input type="file" className="p-1" {...register("pancardImage", {})}></Input>
              <p className="text-red-500"> {errors.pancardImage && <span>pancard Image Required</span>}</p>

          <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Pancard Number</label>
              <Input className="text-black py-1" type="text" {...register("pancardNumber", { })}/>
              <p className="text-red-500"> {errors.pancardNumber && <span>pancard Number Required</span>}</p>

            </div>

            </div>
          </div>

          
          <div className="flex space-x-2 justify-evenly">
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">ID proof(front page)</label>
              <Input className="text-black" type="file" {...register("idProof", { })}/>
              <p className="text-red-500"> {errors.idProof && <span>id Proof Required</span>}</p>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">ID proof(Back page)</label>
              <Input type="file" className="p-1" {...register("idBack", { })}></Input>
              <p className="text-red-500"> {errors.idBack && <span>ID proof image Required</span>}</p>

            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Dealership Image</label>
              <Input className="text-black" type="file" {...register("dealership", {})}/>
              <p className="text-red-500"> {errors.dealership && <span>Dealership Required</span>}</p>

            </div>
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Country</label>
              <Input className="text-black py-1" type="text" {...register("county", { })}/>
              <p className="text-red-500"> {errors.county && <span>country Required</span>}</p>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">Role</label>
              <select className="flex justify-between py-1 w-full  h-[30px] " {...register("role", {})}>
        <option value="admin">Admin</option>
        <option value="staff">Staff</option>
        <option value="seller">Seller</option>
        <option value="">Dealer</option>
      
      </select>
      <p className="text-red-500"> {errors.role && <span>Please select Role</span>}</p>

            </div>
            <div className="min-w-[300px]">
            <div className="min-w-[300px]">
              <label htmlFor="">Status</label>
              <select className="flex justify-between py-1 w-full h-[30px]" {...register("status", {})}>
        <option value="pending">Pending</option>
        <option value="blocked">Blocked</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      
      </select>
      <p className="text-red-500"> {errors.status && <span>Please select status</span>}</p>
            </div>
            </div>
          </div>

           


         
         
         
        </div>
        <div className=" flex justify-center my-5">

        <input type='submit' className="bg-blue-700 p-3 rounded text-white w-36"/>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
