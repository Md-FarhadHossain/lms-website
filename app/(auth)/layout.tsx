import React, { ReactNode } from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full bg-red-400 flex justify-center items-center'>
        {children}
    </div>
  )
}

export default layout