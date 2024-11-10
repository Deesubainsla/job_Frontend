// import React, {useState} from 'react'
// import axios from 'axios'
// import { useForm } from 'react-hook-form'
// import toast from 'react-hot-toast';

// function Cardhr({ name, id, manager }) {

//     const {register:register1, handleSubmit:handleSubmit1, reset:reset1, formState:{errors:errors1}} = useForm();
//     const {register:register2, handleSubmit:handleSubmit2, reset:reset2, formState:{errors:errors2}} = useForm();
//     const {register:register3, handleSubmit:handleSubmit3, reset:reset3, formState:{errors:errors3}} = useForm();
//     console.log('name',name);
//     const [ismanager, setismanager] = useState(manager);
//     const [salary, setsalary] = useState();
//     const [attendance, setattendance] = useState([]);

//     const handleupdateattendance = async(data)=>{
//         // console.log('hello')
//         console.log('name',name);
//         console.log('manager',ismanager);
//         reset1();
//         // try {
//         //     const info = {
//         //         date: data.date,
//         //         userid: id,
//         //         status: data.status
//         //     }
//         //     // console.log('information',info);

//         //     if(manager === true){
//         //         console.log('inif',manager);
//         //         const res = await axios.post(`${import.meta.env.VITE_SERVER}/hr/makesmattendance`,info,{
//         //             withCredentials: true
//         //         })

//         //         reset();
//         //         toast.success('Attendance updated for salesmanager')
//         //     }
//         //     else{
//         //         console.log('inelse', manager);
//         //         const res = await axios.post(`${import.meta.env.VITE_SERVER}/hr/makelabourattendance`,{info},{
//         //             withCredentials: true
//         //         })

//         //         reset();
//         //         toast.success('Attendance updated for labour')
//         //     }
//         // } catch (error) {
//         //     toast.error(error.response.data.message);
//         // }
//     }

//     const handlegetsalary = async(data)=>{
//         console.log('name',name);
//         console.log('manager', manager);
//         console.log('ismanager',ismanager);
//         reset2();
//         // const info = {
//         //     salaryperday: data.salaryperday,
//         //     userid: id,
//         //     year: data.year,
//         //     month: data.month
//         // }
//         // try {
//         //     if(manager){
//         //         const res = await axios.post(`${import.meta.env.VITE_SERVER}/hr/salesmanagersalary`,info, {
//         //             withCredentials: true
//         //         })

//         //         const totalday = res.data.totalday;
//         //         const amount = res.data.salary.amount;
//         //         setsalary({totalday, amount});
//         //         reset3();
//         //         document.getElementById('salary').showModal();
//         //         toast.success('Got salary for salesmanager')
//         //     }
//         //     else{

//         //         reset3();
//         //         toast.success('Got salary for labour')
//         //     }
//         // } catch (error) {
//         //     toast.error(error.response.data.message);
//         // }
//     }


//     const handlegetattendance = async()=>{
//         console.log('name',name);
//         console.log('manager', manager);
//         console.log('ismanager',ismanager);
//         reset3();
//         // try {
//         //     if(manager){

//         //         reset2();
//         //         toast.success('Got attendance for salesmanager')
//         //     }
//         //     else{

//         //         reset2();
//         //         toast.success('Got attendance for labour')
//         //     }
//         // } catch (error) {
//         //     toast.error(error.response.data.message);
//         // }
//     }



//     return <>
//         <div className='border flex justify-between shadow-md rounded px-2 py-1'>

//             <p>Name:{name}</p>

//             <div className='flex gap-6'>

//                 <button className="bg-red-700 rounded px-1 text-white" onClick={() =>{
//                     document.getElementById('my_modal_4').showModal();
//                     // console.log(issalesmanager);
//                     // handleupdateattendance();
//                 } 
//                 }>update attendance</button>

//                 <dialog id="my_modal_4" className="modal">
//                     <div className="modal-box bg-white">
//                         <form method="dialog" >
//                             {/* if there is a button in form, it will close the modal */}
//                             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                         </form>
//                         <h3 className="font-bold text-lg">Attendance</h3>

//                         <form onSubmit={handleSubmit1(handleupdateattendance)} className=' flex flex-col gap-6  mt-6'>

//                             <div>
//                                 <input type="text" className='border w-full p-3 rounded-;g' placeholder='yyyy-mm-dd' {...register1('date', {
//                                     required: true
//                                 })} />
//                                 {errors1.date && <span className='text-sm text-red-600'>This field is required</span>}
//                             </div>

//                             <div>
//                                 <input type="text" className='border w-full p-3 rounded-;g' placeholder='Status' {...register1('status', {
//                                     required: true
//                                 })} />
//                                 {errors1.status && <span className='text-sm text-red-600'>This field is required</span>}
//                             </div>

//                             <button onClick={() => document.getElementById('my_modal_4').close()} type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>update</button>
//                         </form>

//                     </div>
//                 </dialog>

//                 <button className="bg-red-700 rounded px-1 text-white" onClick={() => document.getElementById('newmodal2').showModal()}>Get salary</button>

//                 <dialog id="newmodal2" className="modal">
//                     <div className="modal-box bg-white">
//                         <form method="dialog" >
//                             {/* if there is a button in form, it will close the modal */}
//                             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                         </form>
//                         <h3 className="font-bold text-lg">Get Salary</h3>

//                         <form onSubmit={handleSubmit3(handlegetsalary)} className=' flex flex-col gap-6  mt-6'>

//                             <div>
//                                 <input type="text" className='border w-full p-3 rounded-;g' placeholder='salaryperday' {...register3('salaryperday', {
//                                     required: true
//                                 })} />
//                                 {errors3.salaryperday && <span className='text-sm text-red-600'>This field is required</span>}
//                             </div>
//                             <div>
//                                 <input type="text" className='border w-full p-3 rounded-;g' placeholder='year(YYYY)' {...register3('year', {
//                                     required: true
//                                 })} />
//                                 {errors3.year && <span className='text-sm text-red-600'>This field is required</span>}
//                             </div>
//                             <div>
//                                 <input type="text" className='border w-full p-3 rounded-;g' placeholder='month(MM)' {...register3('month', {
//                                     required: true
//                                 })} />
//                                 {errors3.month && <span className='text-sm text-red-600'>This field is required</span>}
//                             </div>

//                             <button onClick={() => document.getElementById('newmodal2').close()} type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>update</button>
//                         </form>

//                     </div>
//                 </dialog>



//                 <button className="bg-red-700 rounded px-1 text-white" onClick={() => document.getElementById('newmodal1').showModal()}>Get attendance</button>

//                 <dialog id="newmodal1" className="modal">
//                     <div className="modal-box bg-white">
//                         <form method="dialog" >
//                             {/* if there is a button in form, it will close the modal */}
//                             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                         </form>
//                         <h3 className="font-bold text-lg">Get Attendance</h3>

//                         <form onSubmit={handleSubmit2(handlegetattendance)} className=' flex flex-col gap-6  mt-6'>

//                             <div>
//                                 <input type="text" className='border w-full p-3 rounded-;g' placeholder='year(YYYY)' {...register2('year', {
//                                     required: true
//                                 })} />
//                                 {errors2.year && <span className='text-sm text-red-600'>This field is required</span>}
//                             </div>
//                             <div>
//                                 <input type="text" className='border w-full p-3 rounded-;g' placeholder='month(MM)' {...register2('month', {
//                                     required: true
//                                 })} />
//                                 {errors2.month && <span className='text-sm text-red-600'>This field is required</span>}
//                             </div>

//                             <button onClick={() => document.getElementById('newmodal1').close()} type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>update</button>
//                         </form>

//                     </div>
//                 </dialog>


//                 {/* for salary */}
// <dialog id="salary" className="modal">
//     <div className="modal-box bg-white">
//         <form method="dialog" >
//             {/* if there is a button in form, it will close the modal */}
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//         </form>
//         <h3 className="font-bold text-lg">Salary</h3>
//         {salary? <div>Totaldays: {salary.totalday}<br/>Totalamount:{salary.amount}</div> : <div>Data is not present</div> }


//     </div>
// </dialog>




//             </div>




//         </div>
//     </>
// }

// export default Cardhr




import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';

function Cardhr({ name, id, manager }) {
    const { register: register1, handleSubmit: handleSubmit1, reset: reset1, formState: { errors: errors1 } } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, reset: reset2, formState: { errors: errors2 } } = useForm();
    const { register: register3, handleSubmit: handleSubmit3, reset: reset3, formState: { errors: errors3 } } = useForm();

    const [ismanager, setismanager] = useState(manager);
    const [salary, setsalary] = useState({});
    const [attendance, setattendance] = useState([]);
    const [totaldays, settotaldays] = useState();
    const [modalOpen, setModalOpen] = useState(false); // Manage modal visibility
    const [activeModal, setActiveModal] = useState(''); // Track which modal is active

    const handleUpdateAttendance = async (data) => {
        console.log('Updating attendance for', name);
        console.log('Is Manager:', ismanager);

        try {
            const info = {
                date: data.date,
                userid: id,
                status: data.status
            };

            if (ismanager) {
                await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/hr/makesmattendance`, info, { withCredentials: true });
                toast.success('Attendance updated for salesmanager');
            } else {
                await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/hr/makelabourattendance`, info, { withCredentials: true });
                toast.success('Attendance updated for labour');
            }

            reset1();
            setModalOpen(false); // Close modal after successful submission

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleGetSalary = async (data) => {
        console.log('Getting salary for', name);
        console.log('Is Manager:', ismanager);

        const info = {
            salaryperday: data.salaryperday,
            userid: id,
            year: data.year,
            month: data.month
        };

        try {
            let res;
            if (ismanager) {
                res = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/hr/salesmanagersalary`, info, { withCredentials: true });
                const totalday = res.data.totalday;
                const amount = res.data.salary.amount;
                setsalary({ totalday, amount });
                toast.success('Salary fetched for salesmanager');
            } else {
                res = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/hr/laboursalary`, info, { withCredentials: true });
                const totalday = res.data.totalday;
                const amount = res.data.salary.amount;
                setsalary({ totalday, amount });
                toast.success('Salary fetched for labour');
            }

            reset2();
            openModal('showsalary');  // Open Salary modal after fetching data

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleGetAttendance = async (data) => {
        console.log('Getting attendance for', name);
        console.log('Is Manager:', ismanager);

        try {
            const info = {
                userid: id,
                year: data.year,
                month: data.month
            };

            let res;
            if (ismanager) {
                res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/hr/salesmanagerattendance`, { params: info, withCredentials: true });
            } else {
                res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/hr/labourattendance`, { params: info, withCredentials: true });
            }

            settotaldays(res.data.totalday);
            setattendance(res.data.attendance);
            toast.success('Attendance fetched');

            reset3();
            openModal('showattendance'); // Open Show Attendance modal after fetching data

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    // Control modal open/close with state
    const openModal = (modalName) => {
        setActiveModal(modalName);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setActiveModal(''); // Reset active modal state when closing
    };

    return (
        <div className='border flex justify-between shadow-md rounded px-2 py-1'>
            <p>Name: {name}</p>

            <div className='flex gap-6'>
                <button
                    className="bg-red-700 rounded px-1 text-white"
                    onClick={() => openModal('attendance')}
                >
                    Update Attendance
                </button>

                <button
                    className="bg-red-700 rounded px-1 text-white"
                    onClick={() => openModal('salary')}
                >
                    Get Salary
                </button>

                <button
                    className="bg-red-700 rounded px-1 text-white"
                    onClick={() => openModal('getattendance')}
                >
                    Get Attendance
                </button>
            </div>

            {/* Get Attendance Modal */}
            {modalOpen && activeModal === 'getattendance' && (
                <dialog open className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Get Attendance</h3>

                        <form onSubmit={handleSubmit3(handleGetAttendance)} className='flex flex-col gap-6 mt-6'>
                            <div>
                                <input
                                    type="text"
                                    className='border w-full p-3 rounded'
                                    placeholder='Year (YYYY)'
                                    {...register3('year', { required: true })}
                                />
                                {errors3.year && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className='border w-full p-3 rounded'
                                    placeholder='Month (MM)'
                                    {...register3('month', { required: true })}
                                />
                                {errors3.month && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <button type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>
                                Fetch Attendance
                            </button>
                        </form>
                    </div>
                </dialog>
            )}

            {/* Attendance Modal */}
            {modalOpen && activeModal === 'attendance' && (
                <dialog open className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Attendance</h3>

                        <form onSubmit={handleSubmit1(handleUpdateAttendance)} className='flex flex-col gap-6 mt-6'>
                            <div>
                                <input
                                    type="text"
                                    className='border w-full p-3 rounded'
                                    placeholder='yyyy-mm-dd'
                                    {...register1('date', { required: true })}
                                />
                                {errors1.date && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    className='border w-full p-3 rounded'
                                    placeholder='Status'
                                    {...register1('status', { required: true })}
                                />
                                {errors1.status && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <button type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>
                                Update
                            </button>
                        </form>
                    </div>
                </dialog>
            )}

            {/* Salary Modal */}
            {modalOpen && activeModal === 'salary' && (
                <dialog open className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Get Salary</h3>

                        <form onSubmit={handleSubmit3(handleGetSalary)} className='flex flex-col gap-6 mt-6'>
                            <div>
                                <input
                                    type="text"
                                    className='border w-full p-3 rounded'
                                    placeholder='Salary per day'
                                    {...register3('salaryperday', { required: true })}
                                />
                                {errors3.salaryperday && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className='border w-full p-3 rounded'
                                    placeholder='Year (YYYY)'
                                    {...register3('year', { required: true })}
                                />
                                {errors3.year && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className='border w-full p-3 rounded'
                                    placeholder='Month (MM)'
                                    {...register3('month', { required: true })}
                                />
                                {errors3.month && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <button type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>
                                Update
                            </button>
                        </form>
                    </div>
                </dialog>
            )}

            {/* Show Salary Modal */}
            {modalOpen && activeModal === 'showsalary' && (
                <dialog open className="modal">
                    <div className="modal-box bg-white">
                        <button
                            onClick={() => {
                                setsalary({});
                                closeModal();
                            }}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Salary</h3>
                        {Object.keys(salary).length > 0
                            ? <div>Totaldays: {salary.totalday}<br />Totalamount: {salary.amount}</div>
                            : <div>Data is not present</div>
                        }
                    </div>
                </dialog>
            )}

            {/* Show Attendance Modal (Larger) */}
            {modalOpen && activeModal === 'showattendance' && (
                <dialog open className="modal modal-lg">
                    <div className="modal-box bg-white w-full max-w-4xl">
                        <button
                            onClick={() => {
                                setattendance([]);
                                closeModal();
                            }}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Attendance Data</h3>
                        {attendance.length > 0
                            ? <div>
                                <p>Total Days: {totaldays}</p>
                                <table className="w-full mt-4">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {attendance.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.date}</td>
                                                <td>{item.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            : <div>No attendance data available</div>
                        }
                    </div>
                </dialog>
            )}
        </div>
    );
}

export default Cardhr;
