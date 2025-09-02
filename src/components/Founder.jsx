import React from 'react'
import Profile from './Profile'

const Founder = () => {
    return (
        <div className='px-24 mt-10'>
            <h1 className='text-5xl font-bold text-center mb-9'>OUR FOUNDERS</h1>
            <div className='md:flex flex-row justify-between'>
                <Profile />
                <Profile />
            </div>
        </div>
    )
}

export default Founder