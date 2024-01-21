import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Blogs from './Pages/Blogs/Blogs.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/blogs',
    element: <Blogs></Blogs>
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-r from-[#120535] via-[#0f051d]	  to-[#120535]  text-white overflow-hidden'>

      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
