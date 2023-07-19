import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUserQuery } from "../../utils/graphql";
import TabbleOfUsersOrUser from "./tabbleData";

const UserByMobile = () => {
  const [mobile, setMobile] = useState();
  const [callEnabled, setCallEnabled] = useState(false);
  const [user, setUser] = useState([]);
  const { data, loading, } = useUserQuery(
    {
      variables: { where: { mobile: String(mobile) } },
    },
    {
      enabled:false
    }
  );

 
  useEffect(() => {
    if (data && data.user) {
      const userArray = [Object.fromEntries(Object.entries(data.user))];
      console.log(userArray, "user array");
      setUser(userArray);
    }
  }, [data]);

  if (data?.user) console.log(data?.user, "data.user");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (dataOnSubmit) => {
    // setCallEnabled(true);
    if (onSubmit) {
      // console.log(dataOnSubmit.mobile);
      // setMobile(dataOnSubmit.mobile);
      // refetch();
    }
  };
  if (loading) return <div>Loading....</div>;
  return (
    <div className=" m-5">
      <div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <div className="flex space-x-2">
            <div>
              <input
                placeholder=" Enter mobile Number"
                type="number"
                className="p-3  input input-bordered input-secondary w-64"
                {...register("mobile", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
                onChange={(e) => {
                  const value = e.target.value;
                  setValue("mobile", parseInt(value));
                  if (value.length === 10) {
                    setMobile(parseInt(value));
                  }
               
                }}
              />
              <p className="text-red-500">
                {" "}
                {errors.mobile && <span>Please Enter 10 digits</span>}
              </p>
            </div>
         
          </div>
        {/* </form> */}
        {data?.user  && <TabbleOfUsersOrUser users={user} />}
        {!data.user && mobile && (
          <p className="text-red-500"> Sorry there is no such User</p>
        )}
      </div>
    </div>
  );
};

export default UserByMobile;
