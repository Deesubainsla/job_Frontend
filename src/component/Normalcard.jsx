import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';

function Normalcard({name, id, issalesmanager}) {

    const handledlt = async()=>{
        console.log('in normalcade:',issalesmanager);
        // try {

        //     if(issalesmanager){
        //         console.log('inif',issalesmanager);
        //         const res = await axios.delete(`${import.meta.env.VITE_SERVER}/admin/deletesalesmanager?userid=${id}`,{
        //             withCredentials: true
        //         });

        //         toast.success('Salesmanager deleted successfully');
        //         // console.log('Salesmanager deleted successfully');
        //     }
        //     else{
        //         console.log('ifelse',issalesmanager);
        //         const res = await axios.delete(`${import.meta.env.VITE_SERVER}/admin/deletelabour?userid=${id}`,{
        //             withCredentials: true
        //         });

        //         toast.success('Labour deleted successfully')
        //         // console.log('Labour deleted successfully');
        //     }
            

            
        //     // window.location.reload(); //to reload the page:
        // } catch (error) {
        //     toast.error(error.message);
        //     console.log('Error',error.message);
        // }
    }

  return <>
        <div className='border flex justify-between shadow-md rounded px-2 py-1'>
            
            <p>Name:{name}</p>
            <button onClick={handledlt} className='bg-red-700 flex justify-center items-center rounded px-1 text-white'><ion-icon  name="trash-outline"></ion-icon></button>
        </div>
  </>
}

export default Normalcard