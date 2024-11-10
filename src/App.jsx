import { useState, lazy, Suspense, useEffect } from 'react'
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setuser } from './utils/redux/reduxslice';
import axios from 'axios'
import toast from 'react-hot-toast';


// const Home = lazy(() => import('./pages/Home'));
// const Admin = lazy(() => import('./pages/Admin'));
// const Salesmanager = lazy(() => import('./pages/Salesmanager'));
// const HR = lazy(() => import('./pages/HR'));
// const Notfound = lazy(() => import('./pages/Notfound'));

function App() {

  const user = useSelector((state)=>state.reduxslice);
  const dispatch = useDispatch();
  useEffect(() => {
    
    (async()=>{
        try {
            const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/getprofile`,{
                withCredentials:true
            });
            dispatch(setuser(res.data.userinfo));
            console.log('Profile fetched successfully from client:');
        } catch (error) {
          toast.error('Error in fetching user details')
        }
    })()

  }, [user])
  


  return <>
    <div className='max-w-screen max-h-screen'>
      <Navbar />
      <Outlet/>
      {/* <BrowserRouter>
        <Suspense fallback={<div className='flex min-h-screen justify-center items-center'><span className="loading loading-dots loading-lg"></span></div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/sm' element={<Salesmanager />} />
            <Route path='/hr' element={<HR />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </Suspense>

      </BrowserRouter> */}

    </div>
  </>
}

export default App
