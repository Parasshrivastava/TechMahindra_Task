// import React, { Component } from "react";
// import Slider from "react-slick";



// function PauseOnHover({ prop }) {

//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 100,
//     pauseOnHover: true
//   };

//   return (
//     <div className="slider-container overflow-hidden">
//       <Slider {...settings}>
//         {
//           prop.map((img) => (
//             <div className="">
//               <img src={`./${img}.jpg`} className="h-30" alt="@" />
//             </div>
//           ))
//         }
//       </Slider>
//     </div>
//   );
// }

// export default PauseOnHover;



import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function PauseOnHover({ prop }) {
  const [slidesToShow, setSlidesToShow] = useState(8);

  useEffect(() => {
    const update = () => {
      setSlidesToShow(window.innerWidth <= 768 ? 3 : 8);
    };

    window.addEventListener("resize", update);
    update();
    // return () => window.removeEventListener("resize", update);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    pauseOnHover: true
  };

  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        {prop.map((img, idx) => (
          <div key={idx}>
            <img src={`./${img}.jpg`} className="h-30" alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PauseOnHover;