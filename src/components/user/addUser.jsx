import { useForm } from "react-hook-form";


import { useCreateUserMutation, useSelectorsQuery } from "../../utils/graphql";
import { ShowPopup } from '../alerts/popUps';
import { useNavigate } from "react-router-dom";
import voucherCodes  from 'voucher-code-generator'
const AddUser = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
       formState: { errors },
  } = useForm();
  const [createUser, { error }] = useCreateUserMutation();
  const { data } = useSelectorsQuery();
  const onSubmit = async (dataOnSubmit) => {
    const voucherCode=voucherCodes.generate()
    const data = {
      firstName: dataOnSubmit?.first_Name,
      lastName: dataOnSubmit?.last_Name || "",
      email: dataOnSubmit?.email || "",
      username: "auto" + dataOnSubmit?.mobile,
      mobile: dataOnSubmit?.mobile,
      businessName: dataOnSubmit?.bussiness,
      pancardNo: dataOnSubmit?.pancardNumber,
    //  role: dataOnSubmit?.role,
      //  category:{create:dataOnSubmit?.category},

    //  password: dataOnSubmit?.confirmPassword,
    password:voucherCode[0],
      idProofType: dataOnSubmit?.idType,
      idProofNo: dataOnSubmit?.IdNumber,
      country: dataOnSubmit?.country,
      state: dataOnSubmit?.state,
      city: dataOnSubmit?.city,
    };

    if (dataOnSubmit.user_image && dataOnSubmit.user_image.length) {
      data["image"] = { upload: dataOnSubmit.user_image[0] };
    }
    if (dataOnSubmit.pancardImage && dataOnSubmit.pancardImage.length) {
      data["pancard"] = { upload: dataOnSubmit.pancardImage[0] };
    }
    if (dataOnSubmit.idProof && dataOnSubmit.idProof.length) {
      data["idProof"] = { upload: dataOnSubmit.idProof[0] };
    }
    if (dataOnSubmit.idBack && dataOnSubmit.idBack.length) {
      data["idProofBack"] = { upload: dataOnSubmit.idBack[0] };
    }
    if (dataOnSubmit.dealership && dataOnSubmit.dealership.length) {
      data["dealership"] = { upload: dataOnSubmit.dealership[0] };
    }

    try {
      const result = await createUser({ variables: { data } });
      ShowPopup("Success!", `${dataOnSubmit?.first_Name}Added successfully!`, "success", 5000, true);
      navigate('/users')
      
    } catch (err) {
      ShowPopup("Failed!", `${error?.message}`, "error", 5000, true);
    }
  };


  return (
    <div className=" shadow-xl  bg-slate-300  m-10 w-full ">
       <div className="py-4 bg-gray-200 rounded px-4 flex items-center shadow-xl justify-center ">
       <h1 className="text-xl py-3 leading-3 font-bold text-gray-900">
          ADD USER</h1>
      </div>

      <div className="flex justify-between align-middle w-full  mt-4">
        <form onSubmit={handleSubmit(onSubmit)} className="  w-full my-5">
          <div className="flex flex-col  w-full space-y-5 ">
            <div className="flex  justify-around">
              <div className="flex flex-col  w-1/3  ">
                <label className="" htmlFor="">
                  First Name
                </label>
                <input
                  type="text"
                  className="p-3  input input-bordered input-secondary w-full"
                  {...register("first_Name", { required: true })}
                />
                <p className="text-red-500">
                  {" "}
                  {errors.first_Name && <span>first Name is required</span>}
                </p>
              </div>
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("last_Name", {})}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.last_Name && <span>last Name is required</span>}
                </p>
              </div>
            </div>

            <div className="flex  justify-around">
         
              {/* <div className="flex flex-col  w-1/3">
                <label htmlFor=""> Password</label>
                <input
                  type="password"
                  defaultValue={"1234auto"}
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("confirmPassword", {minLength:8,required:true})}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.confirmPassword && (
                    <span>Confirm password required & minimum 8 charators required</span>
                  )}
                </p>
              </div> */}
              {/* <div className="flex flex-col  w-1/3 ">
                <label htmlFor="">User Name</label>
                <input
                  type="text"
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("user_Name", { required: true })}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.user_Name && <span>User Name required</span>}
                </p>
              </div> */}
            </div>

            <div className="flex  justify-around">
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Mobile</label>
                <input
                  type="number"
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("mobile", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.mobile && (
                    <span>phone number 10 digits required</span>
                  )}
                </p>
              </div>
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Bussiness Name</label>
                <input
                  type="text"
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("bussiness", {})}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.bussiness && <span>Bussiness Name required</span>}
                </p>
              </div>
            </div>

            {/* <div className="flex  justify-around "> */}
              {/* <div className="flex flex-col  w-1/3">
                <label htmlFor="">Bannned Sellers</label>
                <Select isMulti className="p-3 input input-bordered input-secondary w-full"/>
                 
              </div> */}
            
            {/* </div> */}
            <div className="flex  justify-around ">
              {/* <div className="flex flex-col  w-1/3">
                <label htmlFor="">Role</label>
                <select
                  defaultValue=""
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("role", {})}
                >
                
                  <option value="dealer">Dealer</option>
                  <option value="staff">Staff</option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </select>
                <p className="text-red-500">
                  {" "}
                  {errors.role && <span>Please select Role</span>}
                </p>
              </div> */}
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">ID Proof Type</label>
                <select
                  
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("idType", {})}
                >
                  
                  <option value="aadhar">Aadhar</option>
                  <option value="drivingLicense">Driving Licence</option>
                  <option value="passport">Passport</option>
                </select>
                <p className="text-red-500">
                  {" "}
                  {errors.idType && <span>Please select Id proof type</span>}
                </p>
              </div>
              <div className="flex flex-col  w-1/3 ">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("email", {})}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.email && <span> email required</span>}
                </p>
              </div>
            </div>

            <div className="flex  justify-around ">
              <div className="lex flex-col  w-1/3">
                <label htmlFor="">ID proof Number</label>
                <input
                  type="text"
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("IdNumber", { minLength: 8 })}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.IdNumber && <span>Atleast 8 charators required</span>}
                </p>
              </div>
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Image</label>
                <input
                  className="p-3 input input-bordered input-secondary w-full"
                  type="file"
                  {...register("user_image", {})}
                />
                <p className="text-red-500">
                  {" "}
                  {errors.user_image && <span>Image Required</span>}
                </p>
              </div>
            </div>

            <div className="flex  justify-around ">
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Pancard</label>
                <input
                  type="file"
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("pancardImage", {})}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.pancardImage && <span>pancard Image Required</span>}
                </p>
              </div>
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Pancard Number</label>
                <input
                  className="p-3  input input-bordered input-secondary w-full"
                  type="text"
                  {...register("pancardNumber", {})}
                />
                <p className="text-red-500">
                  {" "}
                  {errors.pancardNumber && <span>pancard Number Required</span>}
                </p>
              </div>
            </div>

            <div className="flex  justify-around ">
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">ID proof(front page)</label>
                <input
                  className="p-3 input input-bordered input-secondary w-full"
                  type="file"
                  {...register("idProof", {})}
                />
                <p className="text-red-500">
                  {" "}
                  {errors.idProof && <span>id Proof Required</span>}
                </p>
              </div>
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">ID proof(Back page)</label>
                <input
                  type="file"
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("idBack", {})}
                ></input>
                <p className="text-red-500">
                  {" "}
                  {errors.idBack && <span>ID proof image Required</span>}
                </p>
              </div>
            </div>

            <div className="flex  justify-around ">
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Dealership Image</label>
                <input
                  className="p-3 input input-bordered input-secondary w-full"
                  type="file"
                  {...register("dealership", {})}
                />
                <p className="text-red-500">
                  {" "}
                  {errors.dealership && <span>Dealership Required</span>}
                </p>
              </div>
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">Country</label>
                <input
                  className="p-3 input input-bordered input-secondary w-full"
                  type="text"
                  {...register("country", {})}
                />
                <p className="text-red-500">
                  {" "}
                  {errors.country && <span>country Required</span>}
                </p>
              </div>
            </div>

            <div className="flex  justify-around ">
              <div className="flex flex-col  w-1/3">
                <label htmlFor="">State</label>

                <select
                  className="p-3 input input-bordered input-secondary w-full"
                  {...register("state", {})}
                >
                  {data?.states.map((state) => (
                    <option value={state.name} key={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
                <p className="text-red-500">
                  {" "}
                  {errors.city && <span>Please select city</span>}
                </p>
              </div>

              <div className="flex flex-col  w-1/3">
                <label htmlFor="">City</label>
              
                <input  className="input input-bordered input-secondary w-full " {...register("city", {})}/>

                <p className="text-red-500">
                  {" "}
                  {errors.city && <span>Please select city</span>}
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-center my-5">
            <input type="submit" className="btn btn-outline btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
