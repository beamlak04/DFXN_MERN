import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='relative'>
            <div className='w-20 h-20 border-gray-600 rounded-full'/>
            <div className='w-20 h-20 border-gray-800 border-t-2 animate-spin rounded-full absolute top-0 left-0'/>
            <div className='sr-only'>Loading</div>
        </div>
    </div>
  )
}

export default LoadingSpinner