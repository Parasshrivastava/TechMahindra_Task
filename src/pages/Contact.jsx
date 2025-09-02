import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
    return (
        <div className=''>
            <div className=' h-100 ' style={{
                backgroundImage: "url('/contact.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            </div>

            <div className='md:px-24 px-8 md:flex my-20'>

                <div className='md:w-3/7'>
                    <div>
                        <button type="button" className='bg-[#F8F4B9] text-sm w-fit border-2 border-[#AF742A] rounded-2xl px-2 font-bold text-[#AF742A] mb-5 '>CONTACT DETAILS</button>
                        <h1 className='text-4xl font-bold'>Contact Us</h1>
                        <p className='my-6'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                    </div>
                    <div>
                        <div className='flex flex-row mb-3'>
                            <div className='p-2'>
                                <LocationOnIcon />
                            </div>
                            <div className='px-4'>
                                <h3 className='text-xl font-bold'>Head Office</h3>
                                <p className=''>3rd floor, Wing-A, Unit No. 301, Inspire BKC Rd, G Block BKC, Patthar Nagar, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</p>
                            </div>
                        </div>
                        <div className='flex flex-row mb-3'>
                            <div className='p-2'>
                                <PhoneIcon />
                            </div>
                            <div className='px-4'><p className='text-xl font-bold'> Bhushan Shirodkar</p>
                                <p>+91 9820458505</p>
                                <p>bhushan@ANScapital.com</p>
                            </div>


                        </div>
                        <div className='flex flex-row'>
                            <div className='p-2'>
                                <PhoneIcon />
                            </div>
                            <div className='px-4 '>
                                <p className='text-xl font-bold' >Saurabh Chaubal
                                </p>
                                <p >+91 8291067049</p>
                                <p>saurabh@ANScapital.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-4/7 my-10 shadow-xl shadow-gray-400 px-10 py-10'>
                    <h1 className='font-bold text-3xl'>Get In Touch</h1>
                    <div className='flex flex-col'>

                        <div className='w-full flex mb-2'>
                            <div className='w-full pr-2'>
                                <input type="text" placeholder='First Name' required className='w-full h-12 border-[0.3px] border-gray-400 px-10 rounded-sm box-content ' />
                            </div>
                            <div className='w-full pl-2'>
                                <input type="text" placeholder='Name Of Corporation' required className='w-full h-12 border-[0.3px] border-gray-400 px-10 rounded-sm box-content ' />
                            </div>
                        </div>

                        <div className='w-full flex mb-2'>
                            <div className='w-full pr-2'>
                                <input type="text" placeholder='Location' required className='w-full h-12 border-[0.3px] border-gray-400 px-10 rounded-sm box-content ' />
                            </div>
                            <div className='w-full pl-2'>
                                <input type="text" placeholder='Contact Numberr' required className='w-full h-12 border-[0.3px] border-gray-400 px-10 rounded-sm box-content ' />
                            </div>
                        </div>

                        <div className='w-full flex mb-2'>
                            <input type="text" placeholder='Email' required className='w-full h-12 border-[0.3px] border-gray-400 px-10 rounded-sm box-content ' />
                        </div>

                        <div className='w-full flex mb-2'>
                            <textarea name="" id="" rows={5} placeholder='Solution Required in Brief' className='w-full border-[0.3px] border-gray-400 px-10 pt-7 rounded-sm box-content '></textarea>
                        </div>

                        <div>
                            <input type="button" value="SEND A MESSAGE" className='h-12 w-40 bg-amber-600 rounded-sm font-semibold text-white' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact