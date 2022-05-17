import React from 'react'
import { MoonIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <div>
        
        <div className='flex items-center justify-between py-8 px-20 bg-[#06202A]'>
            <p>About</p>
            <p>Contact</p>
            <p>Projects</p>
            <MoonIcon className='h-7' />
        </div>
        
            
      
    </div>
  )
}

export default Header
