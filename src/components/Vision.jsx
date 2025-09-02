import React from 'react'

const Vision = () => {
    return (
        <div className='my-10 mx-24 md:flex '>

            <div className='md:w-1/2 md:pr-20 my-10'>
                <h1 className='text-6xl font-bold mb-6'>Our Vision</h1>
                <img src="/vision.png" alt="" className='' />
                <p className='leading-10 text-gray-700 text-[20px] text-justify'>“To be the most trusted and innovative financial partner, delivering exceptional investment banking solutions that drive sustainable growth, empower businesses, and create lasting value for our clients and stakeholders worldwide.”</p>
            </div>

            <div className='md:w-1/2 bg-[#EBEBEB] rounded-2xl px-14 pb-6'>
                <h1 className='py-5 text-2xl font-bold text-[#D3BA2B]'>This vision highlights key priorities:</h1>
                <div className='flex mb-3'>
                    <img src="/trust.png" alt="" />
                    <div className='ml-3'>
                        <h1 className='font-bold text-xl text-[#0D3B66]'>Trust & Integrity</h1>
                        <p className=' '>Establishing a reputation as a reliable and ethical financial partner</p>
                    </div>
                </div>
                <div className='flex mb-3'>
                    <img src="/trust.png" alt="" />
                    <div className='ml-3'>
                        <h1 className='font-bold text-xl text-[#0D3B66]'>Trust & Integrity</h1>
                        <p className=' '>Establishing a reputation as a reliable and ethical financial partner</p>
                    </div>
                </div>
                <div className='flex mb-3'>
                    <img src="/trust.png" alt="" />
                    <div className='ml-3'>
                        <h1 className='font-bold text-xl text-[#0D3B66]'>Trust & Integrity</h1>
                        <p className=' '>Establishing a reputation as a reliable and ethical financial partner</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Vision