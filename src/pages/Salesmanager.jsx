import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Cardsm from '../component/Cardsm';
import toast from 'react-hot-toast';

function Salesmanager() {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [labours, setlabours] = useState([]);

    const addlabour = async(data) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/sm/addlabour`,data,{
                withCredentials: true
            })

            reset();
            toast.success('New labour created successfully');
            // console.log('New labour created successfully');
        } catch (error) {
            toast.error(error.response.data.message);
            // console.log('Error:',error.message);
        }
    }
    

    useEffect(()=>{

        const getinfo = async()=>{
            try {
                
                const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/sm/smgetlabour`,{
                    withCredentials: true
                });

                setlabours(res.data.labours);
                toast.success('Data fetched successfully for Salesmanager');
                // console.log("Labour fetched successfully by sm");

            } catch (error) {
                toast.error(error.response.data.message);
                // console.log('Error:',error.message);
            }
        };

        getinfo();

    },[]);

    return <>
        <div>
            <div className='flex justify-center px-6 py-2  shadow-lg'>


                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => document.getElementById('my_modal_2').showModal()}>add labour</button>

                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog" >
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Provide labour name</h3>

                        <form onSubmit={handleSubmit(addlabour)} className=' flex flex-col gap-6  mt-6'>

                            <div>
                                <input type="text" className='border w-full p-3 rounded-;g' placeholder='name' {...register('name', {
                                    required: true
                                })} />
                                {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
                            </div>

                            <button onClick={()=>document.getElementById('my_modal_2').close()} type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>add</button>
                        </form>

                    </div>
                </dialog>
                {/* <button className='bg-red-500 py-1 px-2 text-white rounded-md'>delete salesmanager</button>
      <button className='bg-red-500 py-1 px-2 text-white rounded-md'>delete labour</button> */}
                {/* <button className='bg-red-500 py-1 px-2 text-white rounded-md'>4</button> */}
            </div>


            <div className='px-4 mt-6'>
                <p className='text-xl underline font-semibold mb-4'>Get Labours</p>

                {(labours.length > 0 ? (<div className='grid grid-cols-1 grid-flow-row gap-4'>
                    {labours.map(({ name, _id }) => (
                        <div key={_id}>
                            <Cardsm name={name} id={_id} />
                        </div>
                    ))}
                </div>) : <div>Data is not present here:</div>)}

            </div>


        </div>
    </>
}

export default Salesmanager