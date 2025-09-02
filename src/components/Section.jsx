import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

const Section = () => {
  const messages = [
    "Lead High Impact Change With Interim CFO Services",
    "Drive Strategic Growth With Expert Financial Leadership"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative ">
      <Carousel />
      <div className='bg-[rgba(0, 0, 0, 0.5)] z-10 w-full '>
        <div className="absolute z-20 text-white font-bold text-4xl  px-6 py-4"
           style={{
             top: '50%',
             left: '5%',
             transform: 'translateY(-50%)',
             maxWidth: '60%',
             backgroundColor: 'rgba(0, 0, 0, 0.5)'
           }}>
        {messages[currentMessageIndex]}
      </div>
      </div>
    </div>
  );
};

export default Section;








// import React from 'react'
// import Carousel from './Carousel';

// const Section = () => {
//   return (
   
//     <div className="w-full relative">
//         <div className='absolute z-10 text-white font-bold  top-70
//                      text-4xl  border-4 border-amber-400 block'>
//             Lead High Impact Change With Interim CFO Services
//         </div>
//         <Carousel/>
//     </div>
    
    
//   )
// }

// export default Section;