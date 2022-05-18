import React from 'react'
import { MoonIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <div>
        
        <div className='flex flex-grow items-center justify-between py-8 px-20 bg-[#06202]'>
          <p>About</p>
          <p>Contact</p>
          <p>Projects</p>
        </div>

        <div>
          <MoonIcon className='h-7 outline rounded'/>
        </div>
        
            
      
    </div>
  )
}

export default Header
