
import React from "react"
const Card = ({ data }) => {

  
  return (
    <div className="card flex flex-col md:w-1/4 mb-8 h-auto border-[0.1px] border-gray-200 hover:shadow-2xl ease-in-out hover:shadow-black hover:border-0">
      <div className='w-full p-10'>
        <img src="./abc.png" className='mb-4' alt="" />
        <h1 className='font-bold text-xl mb-3'>{data.heading}</h1>
        {
          typeof data.content === "string" ?
            (<div className="content">
              {data.content}
            </div>)


            :
            data.content.map((d, k) => {
              return(<li key={k}>{d}</li>)
            })
        }

      </div>

    </div>
  )
}

export default Card