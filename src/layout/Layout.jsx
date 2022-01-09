import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
 
const Layout = () => {

    const location = useLocation() //To detect current page

    const currentUrl = location.pathname


    return (
        <div className='md:flex md:min-h-screen'>
            
            <div className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-2xl font-black text-center text-white">CRM for Customers</h2>

                <nav className="mt-10">
                <Link 
                    className={`${currentUrl === '/customers' ? 'text-blue-300' : 'text-white'}  text-1xl block mt-2 hover:text-blue-300`}
                    to="/customers"
                >Customers </Link>
                <Link 
                    className={`${currentUrl === '/customers/new' ? 'text-blue-300' : 'text-white'} text-1xl block mt-2 hover:text-blue-300`}
                    to="/customers/new">New Customer</Link>
                </nav>
                
            </div>
            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll"> {/*TO MAKE LEFT SIDE FIXED AND RIGHT SIDE SCROLLEABLE*/}               
                <Outlet />  {/* IT IS TO TELL REACT i WANT TO HAVE LAYOUT IN ALL PAGES THE ROUTE IN APP.JSX SHOULD HAVE THE INDEX ATTRIBUTE */}
            </div>
           
        </div>
    )
}

export default Layout
