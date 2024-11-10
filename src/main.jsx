import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter,Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './utils/redux/reduxstore.js'
import { useSelector } from 'react-redux';
import {Toaster} from 'react-hot-toast'



const Home = lazy(() => import('./pages/Home'));
// const App = lazy(() => import('./App.jsx'));
const Admin = lazy(() => import('./pages/Admin'));
const Login = lazy(() => import('./component/Login'));
const Salesmanager = lazy(() => import('./pages/Salesmanager'));
const HR = lazy(() => import('./pages/HR'));
const Notfound = lazy(() => import('./pages/Notfound'));

const Wrapper = ({Component, role})=>{
  const user= useSelector((state)=>state.reduxslice);

    return <Suspense fallback={<div className='flex min-h-screen justify-center items-center'><span className="loading loading-dots loading-lg"></span></div>}>
       { (user && user.role == role.toLowerCase() ) ? <Component/>: <Login role={role}  />}
    </Suspense>
}


const router = createBrowserRouter(
  createRoutesFromElements(
    // <Suspense fallback={<div className='flex min-h-screen justify-center items-center'><span className="loading loading-dots loading-lg"></span></div>}>
      <Route path='/' element={<App/>}>
            <Route path='' element={
              <Suspense fallback={<div className='flex min-h-screen justify-center items-center'><span className="loading loading-dots loading-lg"></span></div>}>
                <Home/>
              </Suspense>
            } />
            <Route path='/admin' element={<Wrapper Component={Admin} role={'Admin'} />} />
            <Route path='/sm' element={<Wrapper Component={Salesmanager} role={'Salesmanager'} />} />
            <Route path='/hr' element={<Wrapper Component={HR} role={'HR'} />} />
            <Route path='*' element={<Wrapper Component={Notfound} />} />
      </Route>
    // </Suspense>
  )
)



createRoot(document.getElementById('root')).render(
  <>
    <Toaster/>
    <StrictMode>
    <Provider store={store}>
        
        <RouterProvider router={router} />
    </Provider>
    </StrictMode>
  </>
  
)
