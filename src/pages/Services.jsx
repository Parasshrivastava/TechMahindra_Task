import React from 'react'
import {data5,data6,data7,data9} from "../utils/data.js"
import Card from '../components/Card.jsx'
import Cfoservices from '../components/cfoservices.jsx'
const Services = () => {
    return (
        <div>
            <div className=' h-100 ' style={{
                backgroundImage: "url('/service.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}> hi</div>

            <div className='my-10 px-20'>

                <h1 className='text-center text-5xl font-bold p-4'>{data5.title}</h1>
                <p className='text-center py-4'>We empower businesses to see opportunities beyond boundaries, navigate complex financial landscapes, and bridge today’s needs with tomorrow’s ambitions.</p>
                <div className='flex flex-wrap'>
                    {
                        data5.card_data.map((data, key) => (
                            <Card data={data} key={key} />
                        ))
                    }
                </div>
            </div>

            <div className='my-10 px-20'>

                <h1 className='text-center text-5xl font-bold p-4'>{data6.title}</h1>
                <p className='text-center py-4'>We empower businesses to see opportunities beyond boundaries, navigate complex financial landscapes, and bridge today’s needs with tomorrow’s ambitions.</p>
                <div className='flex flex-wrap justify-center'>
                    {
                        data6.card_data.map((data, key) => (
                            <Card data={data} key={key} />
                        ))
                    }
                </div>
            </div>

            <div className='my-10 px-20'>

                <h1 className='text-center text-5xl font-bold p-4'>{data7.title}</h1>
                <p className='text-center py-4'>We empower businesses to see opportunities beyond boundaries, navigate complex financial landscapes, and bridge today’s needs with tomorrow’s ambitions.</p>
                <div className='flex flex-wrap'>
                    {
                        data7.card_data.map((data, key) => (
                            <Card data={data} key={key} />
                        ))
                    }
                </div>
            </div>
            <Cfoservices/>

            <div className='my-10 px-20'>

                <h1 className='text-center text-5xl font-bold p-4'>{data9.title}</h1>
                <p className='text-center py-4'>We empower businesses to see opportunities beyond boundaries, navigate complex financial landscapes, and bridge today’s needs with tomorrow’s ambitions.</p>
                <div className='flex flex-wrap'>
                    {
                        data9.card_data.map((data, key) => (
                            <Card data={data} key={key} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services