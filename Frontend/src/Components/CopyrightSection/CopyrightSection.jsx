import React from 'react'
import { Link } from 'react-router-dom'

const CopyrightSection = () => {
  return (
    <div className="mt-4 text-center text-gray-400 text-sm font-[Oswald]">
        &copy; {new Date().getFullYear()} <Link to='/'><span className='text-pink-500'>Adopt Pets</span></Link>. All Rights Reserved.
      </div>
  )
}

export default CopyrightSection