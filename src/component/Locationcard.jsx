import React from 'react'

function Locationcard({sm, labour, location}) {
  return <>

        <div className='border shadow-md rounded px-2 py-1'>
            <p>salesmanager:{sm}</p>
            <p>labour:{labour}</p>
            <p>location:{location}</p>
        </div>
        
  </>
}

export default Locationcard