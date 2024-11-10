import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { deleteuser } from '../utils/redux/reduxslice'
import toast from 'react-hot-toast'

function Navbar() {

    const dispatch = useDispatch();

    const handlelogout = async()=>{
        try {
            await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/logout`,{},{
                withCredentials: true
            })

            dispatch(deleteuser());
            toast.success('logged out successfully');
        } catch (error) {
            toast.error(error.response.data.message);
            // console.log('Error:'.error.message);
        }
    }

    return <>
        <div className="navbar shadow-md bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/' className='font-semibold text-lg duration-300 transition translate ease-in hover:scale-105' style={({ isActive }) =>
                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                    } >Home</NavLink></li>
                    <li><NavLink to='/admin' className='font-semibold text-lg duration-300 transition translate ease-in hover:scale-105' style={({ isActive }) =>
                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                    } >Admin</NavLink></li>
                    <li><NavLink to='/sm' className='font-semibold text-lg duration-300 transition translate ease-in hover:scale-105' style={({ isActive }) =>
                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                    } >Salesmanager</NavLink></li>
                    <li><NavLink to='/hr' className='font-semibold text-lg duration-300 transition translate ease-in hover:scale-105' style={({ isActive }) =>
                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                    } >HR</NavLink></li>
                    
                    </ul>
                </div>
                <a className="text-3xl font-bold ">EMS</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink to='/' className='font-semibold text-lg duration-100 transition translate ease-in hover:scale-110' style={({ isActive }) =>
                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                    } >Home</NavLink></li>
                    <li><NavLink to='/admin' className='font-semibold text-lg duration-100 transition translate ease-in hover:scale-110' style={({ isActive }) =>
                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                    } >Admin</NavLink></li>
                    <li><NavLink to='/sm' className='font-semibold text-lg duration-100 transition translate ease-in hover:scale-110' style={({ isActive }) =>
                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                    } >Salesmanager</NavLink></li>
                    <li><NavLink to='/hr' className='font-semibold text-lg duration-100 transition translate ease-in hover:scale-110' style={({ isActive }) =>
                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                    } >HR</NavLink></li>
                    
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={handlelogout} className='btn hover:text-red-500'>Logout<ion-icon name="log-out-outline"></ion-icon></button>
            </div>
        </div>
    </>
}

export default Navbar