import React from 'react'

const CopyrightSection = () => {
  return (
    <div className="mt-4 text-center text-gray-400 text-sm font-[Oswald]">
        &copy; {new Date().getFullYear()} <span className='text-pink-500'>Adopt Pets</span>. All Rights Reserved.
      </div>
  )
}

export default CopyrightSection