import React from 'react'
import PauseOnHover from './PauseOnHover.jsx'
const Collab = ({prop}) => {
console.log("==data==", prop);
    
    return (
        <div className="slider w-full my-10 md:px-24 px-8">
            <div className=' border-b-1 py-10 border-black'>
                {/* <h1 className='text-2xl text-center font-bold '>{prop.title}</h1> */}
                {/* <h1 className='text-2xl text-center font-bold '>{prop.subTitle}</h1> */}
                {/* <PauseOnHover prop={prop.data} /> */}
            </div>
        </div>
    )
}

export default Collab



