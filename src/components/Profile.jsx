import React from 'react'

const Profile = () => {
    return (
        <div className='pr-8 my-10 border-b-1'>
            <div className='text-center'>
                <img src="/profile.jpg" alt="" className='mx-auto' />
                <h1 className='text-2xl font-bold my-5 '>Bhushan Shirodkar</h1>
                <h3 className='text-2xl font-bold text-orange-500 mb-7'>CO FOUNDER</h3>
            </div>
            <div>
                <div className='mb-5 '>
                    <h1 className='font-bold mb-3 text-gray-800'>Professional Experience</h1>
                    <li className='text-gray-700'>Accomplished banking leader with over 20 years of experience in corporate banking & corporate finance</li>
                    <li className='text-gray-700'>Previous roles include Country Head of Corporate Banking</li>
                    <li className='text-gray-700'>Experience at QNB, Standard Chartered, Yes Bank and ABN AMRO</li>
                </div>
                <div className='mb-5 '>
                    <h1 className='font-bold mb-3 text-gray-800'>Expertise</h1>
                    <li className='text-gray-700'>Project finance</li>
                    <li className='text-gray-700'>Acquisition</li>
                    <li className='text-gray-700'>Transaction banking</li>
                    <li className='text-gray-700'>Acquisition</li>
                    <li className='text-gray-700'>Acquisition</li>
                </div>
                <div className='mb-5 '>
                    <h1 className='font-bold mb-3 text-gray-800'>Education</h1>
                    <li className='text-gray-700'>MBA from Jamnalal Bajaj Institute of Management Studies</li>
                    <li className='text-gray-700'>MBA from Jamnalal Bajaj Institute of Management Studies</li>
                    <li className='text-gray-700'>MBA from Jamnalal Bajaj Institute of Management Studies</li>
                </div>



            </div>
        </div>
    )
}

export default Profile