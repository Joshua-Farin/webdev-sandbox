import React from 'react'
import Image from 'next/image'
import profilePic from '../public/1.png'


function Projects() {
  return (
    <div>
      
      {/* Title, 4 project cards */}
      <title>Projects</title>

      <div className='flex'>
        <div>
          <Image src={profilePic} width={300} height={200}/>
          <p>Spotify Clone</p>
        </div>
        <div>
          <Image src={profilePic} width={300} height={200}/>
          <p>Hulu Clone</p>
        </div>
        <div>
          <Image src={profilePic} width={300} height={200}/>
          <p>Google Clone</p>
        </div>
        <div>
          <Image src={profilePic} width={300} height={200}/>
          <p>Medium Clone</p>
        </div>
      </div>

    </div>
  )
}

export default Projects
