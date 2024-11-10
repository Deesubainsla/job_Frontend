import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Locationcard from '../component/Locationcard';
import Normalcard from '../component/Normalcard';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Admin() {

  const {register, handleSubmit,reset, formState:{errors}} = useForm();
  const [locationarray, setlocationarray] = useState([]);
  const [salesmanagers, setsalesmanagers] = useState([]);
  const [labours, setlabours] = useState([]);

  const addsalesmanager = async(data)=>{
      try {
        const res = axios.post(`${import.meta.env.VITE_SERVER}/api/v1/admin/makesalesmanager`,data,{
          withCredentials: true
        })

        toast.success('Salesmanager added successfully');
        // console.log('Salesmanager added successfully from client:');
        reset();//reset the form good if you are using many times:
      } catch (error) {
        toast.error(error.response.data.message);
        // console.log('Error:',error.message);
      }
  }

  useEffect(() => {

    (async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/admin/getlocation`, {
          withCredentials: true
        });

        const output = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/admin/getsalesmanagers`, {
          withCredentials: true
        })

        const laboutput = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/admin/getlabours`, {
          withCredentials: true
        })


        setlocationarray(res.data.location);
        setsalesmanagers(output.data.salesmanagers);
        setlabours(laboutput.data.labours);
        toast.success('Data fetched successfully for Admin');
        // console.log("Salesmanagers fetched successfully from client side:");
        // console.log("Labours data fetched successfully from client")
        // console.log("location fetched successfully from client side:");

      } catch (error) {
        console.log('Error:', error.message);
      }

    })()

    // (async()=>{
    //   try {
    //     const res = await axios.get(`${import.meta.env.VITE_SERVER}/admin/getsalesmanagers`,{
    //       withCredentials: true
    //     })

    //     setsalesmanagers(res.data.salesmanagers);
    //     console.log("Salesmanagers fetched successfully from client side:");

    //   } 
    //   catch (error) {
    //     console.log('Error:',error.message);
    //   }

    // })()

  }, [])


  return <>
    <div>
      <div className='flex justify-center px-6 py-2  shadow-lg'>


        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()}>add salesmanager</button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white">
            <form method="dialog" >
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Provide salesmanager information</h3>
            
            <form onSubmit={handleSubmit(addsalesmanager)} className=' flex flex-col gap-6  mt-6'>

                        <div>
                            <input type="text" className='border w-full p-3 rounded-;g' placeholder='Username' {...register('username', {
                                required: true
                            })} />
                            {errors.username && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>


                        <div className=''>
                            <input type="password" className='border w-full  p-3 rounded-;g' placeholder='password' {...register('password', {
                                required: true
                            })} />
                            {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>

                        <div className=''>
                            <input type="text" className='border w-full p-3 rounded-;g' placeholder='location' {...register('location', {
                                required: true
                            })} />
                            {errors.location && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>


                        <button onClick={() => document.getElementById('my_modal_3').close()} type='submit' className='bg-red-500 py-1 px-4 rounded text-xl text-white'>add</button>
                    </form>
            
          </div>
        </dialog>
        {/* <button className='bg-red-500 py-1 px-2 text-white rounded-md'>delete salesmanager</button>
              <button className='bg-red-500 py-1 px-2 text-white rounded-md'>delete labour</button> */}
        {/* <button className='bg-red-500 py-1 px-2 text-white rounded-md'>4</button> */}
      </div>
      <div className='px-4 mt-6'>
        <p className='text-xl underline font-semibold mb-4'>Salesmanager and labours location</p>

        {(locationarray.length > 0 ? (<div className='grid grid-cols-4 grid-flow-row gap-4'>
          {locationarray.map(({ salesmanager, labour, location }, index) => (
            <div key={index}>
              <Locationcard sm={salesmanager} labour={labour} location={location} />
            </div>
          ))}
        </div>) : <div>Data is not present here:</div>)}

      </div>


      <div className='px-4 mt-6'>
        <p className='text-xl underline font-semibold mb-4'>Get Salesmanagers</p>

        {(salesmanagers.length > 0 ? (<div className='grid grid-cols-4 grid-flow-row gap-4'>
          {salesmanagers.map(({ username, _id }) => (
            <div key={_id}>
              <Normalcard name={username} id={_id} issalesmanager={true} />
            </div>
          ))}
        </div>) : <div>Data is not present here:</div>)}

      </div>


      <div className='px-4 mt-6'>
        <p className='text-xl underline font-semibold mb-4'>Get Labours</p>

        {(labours.length > 0 ? (<div className='grid grid-cols-4 grid-flow-row gap-4'>
          {labours.map(({ name, _id }) => (
            <div key={_id}>
              <Normalcard name={name} id={_id} issalesmanager={false} />
            </div>
          ))}
        </div>) : <div>Data is not present here:</div>)}

      </div>

    </div>
  </>
}

export default Admin