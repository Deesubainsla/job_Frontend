import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cardhr from '../component/Cardhr';
import Normalcard from '../component/Normalcard';
import toast from 'react-hot-toast';

function HR() {

  const [labours, setlabours] = useState([]);
  const [salesmanagers, setsalesmanagers] = useState([]);

    useEffect(() => {
      const info = async()=>{
          try {
            const res1 = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/hr/getlabours`, {
              withCredentials: true
            })
            const res2 = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/hr/getsalesmanager`, {
              withCredentials: true
            })

            setlabours(res1.data.labours);
            setsalesmanagers(res2.data.salesmanager);
            toast.success('Data fetched successfully for HR');
            // console.log('data fetched successfully in hr component');
          } catch (error) {
            toast.error(error.response.data.message);
            // console.log('Error:',error.message);
          }
      };
      info();
    }, [])
    


  return <>
      <div>

        <div className='px-4 mt-6'>
          <p className='text-xl underline font-semibold mb-4'>Get Salesmanagers</p>

          {(salesmanagers.length > 0 ? (<div className='grid grid-cols-1 grid-flow-row gap-4'>
            {salesmanagers.map(({ username, _id }) => (
              <div key={_id}>
                <Cardhr name={username} id={_id} manager={true} />
              </div>
            ))}
          </div>) : <div>Data is not present here:</div>)}

        </div>

        <div className='px-4 mt-6'>
        <p className='text-xl underline font-semibold mb-4'>Get Labours</p>

        {(labours.length > 0 ? (<div className='grid grid-cols-1 grid-flow-row gap-4'>
          {labours.map(({ name, _id }) => (
            <div key={_id}>
              <Cardhr name={name} id={_id} manager={false} />
            </div>
          ))}
        </div>) : <div>Data is not present here:</div>)}

        </div>

      </div>
  </>
}

export default HR