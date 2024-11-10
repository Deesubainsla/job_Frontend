import React from 'react'
import Navbar from '../component/Navbar'

function Home() {
  return <>

        <div>
        <div className='flex h-[70vh] '>
                <div className='h-full flex items-center  w-1/2 px-12 '>
                
                <p className='text-4xl font-semibold'>Welcome to <span className='text-red-600'>EMS,</span><br/><span className='text-red-600'>(Employee Management System)</span></p>

                </div>
                <div className='h-full w-1/2 bg-red-600'>
                  <img src='../../public/staff.jpg' alt="staff photo" />
                </div>
            </div>

            <p className='flex h-[10vh] py-16 underline items-center justify-center text-4xl'>Login according to your designation by Navbar:</p>
        </div>

            
  </>
}

export default Home