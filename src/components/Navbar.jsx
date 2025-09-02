import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='md:bg-[#0D3B66] bg-white text-black top-0  h-28 md:text-white '>
            <div className="h-full relative flex justify-between items-center  ">
                <div className="logo ml-20 ">
                    <img src="./logonew.png" alt="Logo" className='h-24' />
                </div>
                <div className="links mr-20 hidden md:block">
                    
                    <Link to="/" className='mx-5 hover:cursor-pointer hover:border-b-1 font-semibold '>Home</Link>
                    <Link to="/about-us" className='mx-5 hover:cursor-pointer hover:border-b-1 font-semibold '>About</Link>
                    <Link to="/contact" className='mx-5 hover:cursor-pointer hover:border-b-1 font-semibold  '>Contact</Link>
                    <Link to="/services" className='mx-5 hover:cursor-pointer hover:border-b-1 font-semibold  '>Services</Link>
                </div>
                <button className='md:hidden relative right-10 cursor-pointer' onClick={() => setIsOpen(!isOpen)} ><MenuIcon /></button>

                {
                    isOpen &&
                    <div className='h-screen w-1/2 bg-white fixed top-0 right-0 z-100 text-black flex flex-col'>
                        <button  className='relative right-30 my-5' onClick={() => setIsOpen(!isOpen)} ><ArrowRightAltIcon/></button>
                        <Link to="/" className='ml-7 my-3 border-b-1 border-gray-300 mr-7 pb-2'>Home</Link>
                        <Link to="/about-us" className='ml-7 my-3 border-b-1 border-gray-300 mr-7 pb-2'>About</Link>
                        <Link to="/contact" className='ml-7 my-3 border-b-1 border-gray-300 mr-7 pb-2'>Contact</Link>
                        <Link to="/services" className='ml-7 my-3 border-b-1 border-gray-300 mr-7 pb-2'>Services</Link>
                    </div>
                }

            </div>



        </nav>
    )
}

export default Navbar