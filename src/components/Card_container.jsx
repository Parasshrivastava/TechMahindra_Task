import Card from './Card.jsx'
import { data1,data2,data3 } from "../utils/data.js"
import React from "react"
const Card_container = () => {

 
  return (
    <div className="card-container px-24 my-10 w-full ">

      <div className='my-10'>

        <h1 className='text-center text-5xl font-bold p-4'>What we do</h1>
        <p className='text-center py-4'>We empower businesses to see opportunities beyond boundaries, navigate complex financial landscapes, and bridge today’s needs with tomorrow’s ambitions.</p>
       
        <div className='md:flex md:justify-center'>
          {
            data1.card_data.map((data, key) => (
              <Card data={data} key={key} />
            ))
          }
        </div>
      </div>

      <div className='my-10'>

        <h1 className='text-center text-5xl font-bold p-4'>{data2.title}</h1>
        {/* <p className='text-center py-4'>We empower businesses to see opportunities beyond boundaries, navigate complex financial landscapes, and bridge today’s needs with tomorrow’s ambitions.</p> */}
        <div className='md:flex md:justify-center'>
          {
            data2.card_data.map((data, key) => (
              <Card data={data} key={key} />
            ))
          }
        </div>
      </div>
      <div className='my-10'>

        <h1 className='text-center text-5xl font-bold p-4'>{data3.title}</h1>
        {/* <p className='text-center py-4'>We empower businesses to see opportunities beyond boundaries, navigate complex financial landscapes, and bridge today’s needs with tomorrow’s ambitions.</p> */}
        <div className='md:flex md:justify-center'>
          {
            data3.card_data.map((data, key) => (
              <Card data={data} key={key} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Card_container