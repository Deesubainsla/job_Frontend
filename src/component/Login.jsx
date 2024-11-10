import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux';
import { setuser, deleteuser } from '../utils/redux/reduxslice';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login({ role = "trial" }) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userid, role: myrole } = useSelector((state) => state.reduxslice);//automatically remount the component when it change:
    const dispatch = useDispatch();
    console.log(userid, myrole);
    // dispatch(setuser({id:'Success', role:'developer'}));

    const handlelogin = async ({ username, password }) => {
        const info = {
            username,
            password,
            role: role.toLowerCase()
        }


        try {
            console.log('info', info);
            const res = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/login`, info, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            })

            dispatch(setuser(res.data.userinfo));
            // console.log(res.data.userinfo);
            // console.log(res);
            toast.success(`${role} loggedin successfully`);
            // console.log("loggedin successfully  from client");
        } catch (error) {
            toast.error(error.response.data.message);
            // console.log('Error: at client login');
        }
    }



return <>
            <div className='items-center mt-32'>

                <div className='flex flex-col items-center justify-center shadow-lg border-2 py-6'>

                    <p className='text-xl font-semibold'>Login for  {role}</p>

                    <form onSubmit={handleSubmit(handlelogin)} className='shadow-xl flex flex-col gap-6  mt-6'>

                        <div>
                            <input type="text" className='border p-3 rounded-;g' placeholder='Username' {...register('username', {
                                required: true
                            })} />
                            {errors.username && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>


                        <div>
                            <input type="password" className='border p-3 rounded-;g' placeholder='password' {...register('password', {
                                required: true
                            })} />
                            {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>


                        <button type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>Login</button>
                    </form>

                </div>

            </div>
        </>
}

export default Login