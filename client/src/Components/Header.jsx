import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <header className='pb-9 bg-slate-400 shadow-2xl '>
         <div className='flex justify-between items-center max-w-6xl m-auto'>
            <Link to="/">
                 <h1 className='font-bold text-sm sm:text-xl '> 
                     <span className='text-blue-500 '>Car</span>
                     <span className='text-red-500 '>Lands</span>
                 </h1>
            </Link>
             

                <form className='bg-slate-300 rounded-lg p-1 flex items-center'>
                  
                  <input type="text" 
                        placeholder='search...' 
                        className='bg-transparent focus:outline-none w-19 sm:w-72'
                   />
                  <FaSearch className='text-slate-900'/>

                </form>

                <ul className='flex gap-5'>
                  <Link  to="/">
                      <li className='hidden sm:block text-slate-700 hover:underline'>
                          Home
                      </li>
                  </Link>
                    

                    <Link to="/about">
                       <li className='hidden sm:block hover:underline'>
                            About
                       </li>
                    </Link>

                    <Link to="/signIn">
                       <li className='hover:underline'>
                            Sign-In 
                       </li>

                    </Link>
                </ul>
                <i></i>
         </div>
           
      </header>
      
  )
}

export default Header
