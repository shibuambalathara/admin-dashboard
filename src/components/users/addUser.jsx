import { Input, Option, Select,Button } from "@material-tailwind/react";
import React from "react";

const AddUser = () => {
  return (
    <div className="flex justify-center align-middle w-full   mt-10">
      <form action="" className=" w-full ">
        <div className="flex flex-col space-y-2 w-full space-y-5">
          <div className="flex space-x-2 w-full justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">first Name</label>
              <Input type="text" className="p-1"></Input>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Last Name</label>
              <Input type="text" className="p-1"></Input>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">Email</label>
              <Input type="text" className="p-1"></Input>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">user Name</label>
              <Input type="text" className="p-1"></Input>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">Phone Number</label>
              <Input type="text" className="p-1"></Input>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Bussiness Name</label>
              <Input type="text" className="p-1"></Input>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly ">
            <div className="min-w-[300px]">
              <label htmlFor="">Category</label>
              <Select className="flex justify-between py-1  h-[30px]" >
        <Option>2W</Option>
        <Option>4W</Option>
        <Option>CV</Option>
      
      </Select>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Mobile</label>
              <Input type="text" className="p-1"></Input>
            </div>
          </div>
          <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">Password</label>
              <Input type="text" className="p-1"></Input>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Confirm Password</label>
              <Input type="text" className="p-1"></Input>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Image</label>
              <Input className="text-black" type="file"/>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">Pancard</label>
              <Input type="file" className="p-1"></Input>

          <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Pancard Number</label>
              <Input className="text-black py-1" type="text"/>
            </div>

            </div>
          </div>

          
          <div className="flex space-x-2 justify-evenly">
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">ID proof(front page)</label>
              <Input className="text-black" type="file"/>
            </div>
            <div className="min-w-[300px]">
              <label htmlFor="">ID proof(Back page)</label>
              <Input type="file" className="p-1"></Input>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Dealership Image</label>
              <Input className="text-black" type="file"/>
            </div>
            <div className="flex min-w-[300px] flex-col">
              <label htmlFor="">Country</label>
              <Input className="text-black py-1" type="text"/>
            </div>
          </div>

          <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">Role</label>
              <Select className="flex justify-between py-1  h-[30px] " >
        <Option>Admin</Option>
        <Option>Staff</Option>
        <Option>Seller</Option>
        <Option>Dealer</Option>
      
      </Select>
            </div>
            <div className="min-w-[300px]">
            <div className="min-w-[300px]">
              <label htmlFor="">Status</label>
              <Select className="flex justify-between py-1  h-[30px]" >
        <Option>Pending</Option>
        <Option>Blocked</Option>
        <Option>Active</Option>
        <Option>Inactive</Option>
      
      </Select>
            </div>
            </div>
          </div>

           <div className="flex space-x-2 justify-evenly">
            <div className="min-w-[300px]">
              <label htmlFor="">Role</label>
              <Select className="flex justify-between py-1  h-[30px] " >
        <Option>Admin</Option>
        <Option>Staff</Option>
        <Option>Seller</Option>
        <Option>Dealer</Option>
      
      </Select>
            </div>
            <div className="min-w-[300px]">
            <div className="min-w-[300px]">
              <label htmlFor="">Status</label>
              <Select className="flex justify-between py-1  h-[30px]" >
        <Option>Pending</Option>
        <Option>Blocked</Option>
        <Option>Active</Option>
        <Option>Inactive</Option>
      
      </Select>
            </div>
            </div>
          </div>


          <div className="flex space-x-2 justify-evenly">
          
            <div className="min-w-[300px]">
              <label htmlFor="">Bannned Sellers</label>
              <Select  className="flex justify-between py-1 h-[30px]" >
        <Option>Kerala</Option>
        <Option>Andra Pradesh</Option>
        <Option>Thamil Nadu</Option>
    
      
      </Select>
       
            </div>
          </div>
         
         
        </div>
      </form>
    </div>
  );
};

export default AddUser;
