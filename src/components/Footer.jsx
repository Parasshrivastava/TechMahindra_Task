import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className="footer max-w-screen overflow-hidden  ">

            <div
                style={{
                    backgroundImage: "url('/foooter.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className='h-72 md:flex md:justify-between md:items-center '
            >
                <div className='md:pl-40 pl-10 mb-10 '>
                    <h1 className='font-bold md:text-6xl text-4xl pt-10 mb-3 text-white'>Tell us your requirement</h1>
                    <p className='font-semibold text-xl text-white'>Let’s build the right financial strategy together</p>
                </div>
                <div className='pr-40 pl-10'>
                    <button className='h-12 w-36 bg-white font-bold rounded-sm' type="button">GET IN TOUCH</button>
                </div>

            </div>

            <div className='bg-[#16171E] '>

                <div className='w-full md:flex flex-row p-10  text-white border-b-2 border-gray-600 '>

                    <div className='md:w-2/5 md:flex flex-col mb-10 h-auto  '>
                        <img src="./logonew.png" alt="Logo" className='h-23 w-80 pl-10   ' />

                        <p className='px-10 text-justify md:my-10 my-4 pr-20 leading-8'>We make this belief a reality by putting clients first, leading with exceptional ideas, doing the right thing, and giving back.</p>

                        <div className="icons flex flex-row w-1/3 ml-5 justify-around  hover:cursor-pointer">
                            <XIcon />
                            <LinkedInIcon />
                            <FacebookIcon />
                        </div>

                    </div>

                    <div className='md:w-1/5 mb-10 h-auto flex flex-col pt-4'>
                        <h1 className='font-bold mx-10 text-3xl'>Quick Links</h1>
                        <div className='flex flex-col md:pt-10 pt-4 '>
                            <a href="#" className='my-2 md:pl-15 mx-10 md:mx-0
                            hover:text-orange-500'>Home</a>
                            <a href="#" className='my-2 md:pl-15 mx-10  md:mx-0 hover:text-orange-500'>About US</a>
                            <a href="#" className='my-2 md:pl-15 mx-10  md:mx-0 hover:text-orange-500'>Contact</a>
                            <a href="#" className='my-2 md:pl-15 mx-10  md:mx-0 hover:text-orange-500'>Services</a>
                        </div>

                    </div>

                    <div className='md:w-2/5 h-auto flex flex-col pt-4 '>
                        <div className='font-bold mx-13 text-3xl'>Get In Touch</div>
                        <div className=' m-2 md:p-10 p-4'>
                            <div className='pb-8 ' >
                                <div className='flex flex-row  '>
                                    <LocationOnIcon />
                                    <h3 className='pl-5'>Office Location</h3>
                                </div>
                                <p className='pl-11'>3rd floor, Wing-A, Unit No. 301, Inspire BKC Rd, G Block BKC, Patthar Nagar, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</p>
                            </div>
                            <div className='pb-8 md:pb-4'>
                                <div className='flex flex-row hover:cursor-pointer'>
                                    <LocalPhoneIcon />
                                    <h3 className='pl-5'>Have Any Questions?</h3>
                                </div>
                                <h3 className='pl-11'>+91 9820458505 / +91 8291067049</h3>
                            </div>
                            <div className='pb-8'>
                                <div className='flex flex-row hover:cursor-pointer'>
                                    <MailIcon />
                                    <h3 className='pl-5'>Mail Us</h3>
                                </div>
                                <p className='pl-11'>bhushan@ANScapital.com saurabh@ANScapital.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center h-auto   text-gray-500 p-10  top-10'>Copyright © 2025 ANS Capital Advisors. All Rights Reserved.</div>
            </div>

        </div>
    )
}

export default Footer