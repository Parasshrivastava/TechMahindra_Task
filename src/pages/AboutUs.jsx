import React from 'react'
import { data4 } from "../utils/data.js"
import Card from '../components/Card.jsx';
import Founder from '../components/Founder.jsx';
import Vision from '../components/Vision.jsx';


const AboutUs = () => {
    return (
        <>
            <div>
                <div className=' h-100 ' style={{
                    backgroundImage: "url('/aboutus.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                }}> 
                </div>

                <div className='my-10'>

                    <h1 className='text-center text-5xl font-bold p-4'>{data4.title}</h1>
                    {/* <p className='text-center py-4'>We empower businesses to see opportunities beyond boundaries, navigate complex financial landscapes, and bridge today’s needs with tomorrow’s ambitions.</p> */}
                    <div className='md:flex px-10 justify-center'>
                        {
                            data4.card_data.map((data, key) => (
                                <Card data={data} key={key} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Founder />
            <Vision/>
        </>
    )
}

export default AboutUs;