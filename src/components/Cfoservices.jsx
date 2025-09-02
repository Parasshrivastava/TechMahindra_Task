import React from 'react'
import {data8} from "../utils/data.js"
import Card from './Card.jsx'

const Cfoservices = () => {
  return (
     <div className="card-container px-24 w-full ">
      <div className='my-10'>

        <h1 className='text-center md:text-5xl text-3xl font-bold p-4'>Fractional CFO Services​</h1>
        <div className='md:flex flex-row w-full my-15'>
            <div className='md:w-1/2 flex flex-row '>
                <img className='h-20 relative top-6 left-5' src="./arrow.png" alt="img" />
                <p className='pt-10 px-10 text-[#0D3B66]'>Companies who have strong operating businesses and wish to leverage our financial expertise</p>
            </div>
            <div className='md:w-1/2 flex flex-row my-6'>
                <img className='h-20 relative top-6 left-5' src="./arrow.png" alt="img" />
                <p className='pt-6 px-10 text-[#0D3B66]'>Companies who have strong
                    Key Advantage – Get advised by qualified veterans in Financial industry without hiring a full time CFO for a fraction of a cost and limited timeleverage our financial expertise</p>
            </div>
        </div>
        <div className='md:flex justify-center'>
          {
            data8.card_data.map((data, key) => (
              <Card data={data} key={key} />
            ))
          }
        </div>
      </div>
      

    </div>
  )
}

export default Cfoservices