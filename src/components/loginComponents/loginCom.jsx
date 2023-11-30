import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLoginMutation } from '../../utils/graphql';
import {useNavigate} from 'react-router-dom'


const Login = () => {
 const navigate=useNavigate()
  
  const [message, setMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginData, {data, loading, error }] = useLoginMutation();
  const onSubmit = async (dataOnSubmit) => {
    try {
      const result = await loginData({ variables: { mobile: dataOnSubmit.userName, password: dataOnSubmit.password },

      });
      
      
if(data.authenticateUserWithPassword.message){

    
   setMessage(data.authenticateUserWithPassword.message)
}
else{
    
     localStorage.setItem("token",JSON.stringify( data.authenticateUserWithPassword.sessionToken))
   navigate('/')
   window.location.reload()
}
    } catch (err) {
      console.error(err, 'error');
    }
  };


        return (
            <div className="relative flex flex-col justify-center align-middle m-auto min-h-screen  w-96">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                        Sign in
                    {message &&<p className='text-[#F70000]'>{message}</p>}
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="userName"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Mobile
                            </label>
                            <input
                                {...register("userName", { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            <p className='text-[#F70000]'> {errors.userName && <span>This field is required</span>}  </p>

                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input type='password'
                                {...register("password", { required: true })}

                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"


                            />
                            <p className='text-[#F70000]'> {errors.password && <span>This field is required</span>}  </p>
                        </div>
                        {/* <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a> */}
                        <div className="mt-6">
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        )
    

}
export default Login