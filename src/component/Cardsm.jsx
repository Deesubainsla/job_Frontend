import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

function Cardsm({ name, id }) {

    const { register:inregister, handleSubmit: inhandleSubmit, reset: inreset, formState: { errors:inerrors } } = useForm();
    const { register:outregister, handleSubmit: outhandleSubmit, reset:outreset, formState: { errors:outerrors } } = useForm();
    //solved two form issues:

    const handledlt = async () => {
        try {
            const res = await axios.delete(`${import.meta.env.VITE_SERVER}/api/v1/sm/smdeletelabour?labour_id=${id}`, {
                withCredentials: true
            })

            toast.success("Labour deleted successfully");
            // console.log("Labour deleted successfully");
        } catch (error) {
            toast.error(error.response.data.message);
            // console.log('Error:', error.message);
        }
    }

    const handleouttime = async (data) => {
        const info = {
            labourid: id,
            outtime: data.outtime
        }
        // console.log('outinfo', info);
        try {
            const res = await axios.put(`${import.meta.env.VITE_SERVER}/api/v1/sm/labourouttime`, info, {
                withCredentials: true
            })

            outreset();
            toast.success("outtime updated successfully");
            // console.log("outtime updated successfully");

        } catch (error) {
            toast.error(error.response.data.message);
            // console.log('Error:', error.message);
        }
    }

    const handleintime = async (data) => {
        const info = {
            labourid: id,
            intime: data.intime
        }
        console.log('ininfo', info);
        try {
            const res = await axios.put(`${import.meta.env.VITE_SERVER}/api/v1/sm/labourintime`, info, {
                withCredentials: true
            })

            inreset();
            toast.success("intime updated successfully");
            // console.log("intime updated successfully");

        } catch (error) {
            toast.error(error.response.data.message);
            // console.log('Error:', error.message);
        }
    }

    return <>

        <div className='border flex justify-between shadow-md rounded px-2 py-1'>

            <p>Name:{name}</p>

            <div className='flex gap-6'>

                <button className="bg-red-700 rounded px-1 text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>update intime</button>

                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog" >
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Provide intime year-month</h3>

                        <form onSubmit={inhandleSubmit(handleintime)} className=' flex flex-col gap-6  mt-6'>

                            <div>
                                <input type="text" className='border w-full p-3 rounded-;g' placeholder='yyyy-mm' {...inregister('intime', {
                                    required: true
                                })} />
                                {inerrors.intime && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <button onClick={() => document.getElementById('my_modal_4').close()} type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>update</button>
                        </form>

                    </div>
                </dialog>

                <button className="bg-red-700 rounded px-1 text-white" onClick={() => document.getElementById('newmodal').showModal()}>update outtime</button>

                <dialog id="newmodal" className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog" >
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Provide outtime year-month</h3>

                        <form onSubmit={outhandleSubmit(handleouttime)} className=' flex flex-col gap-6  mt-6'>

                            <div>
                                <input type="text" className='border w-full p-3 rounded-;g' placeholder='yyyy-mm' {...outregister('outtime', {
                                    required: true
                                })} />
                                {outerrors.outtime && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <button onClick={() => document.getElementById('newmodal').close()} type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>update</button>
                        </form>

                    </div>
                </dialog>

                <button onClick={handledlt} className='bg-red-700 flex justify-center items-center rounded px-1 text-white'><ion-icon name="trash-outline"></ion-icon></button>
            </div>




        </div>

    </>
}

export default Cardsm