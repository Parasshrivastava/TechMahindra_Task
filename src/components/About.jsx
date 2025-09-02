import React from "react"


const About = () => {
    return (
        <div className="container my-10 px-5 md:px-20 w-full md:flex md:flex-row md:justify-around">
            <div className="img md:w-3/5 w-full pt-10">
                <img src="./about_img.jpg" alt=" about_img" />
            </div>

            <div className="about my-10 md:w-2/5 pl-10">
                <p className='bg-red-50 w-fit border-2 border-orange-300 rounded-2xl px-2 font-bold text-orange-300 mb-5 '>About company</p>
                
                <h1 className='text-3xl font-bold'>About ANS Capital Advisors</h1>

                <p className='my-5 leading-7'>At ANS Capital Advisors, we specialize in bridging the gap between businesses and capital. As a boutique investment banking firm, we offer tailored financial solutions including debt advisory, M&A, private equity, venture capital, and fractional CFO services.
                </p>

                <p className='leading-7'>
                    Our seasoned leadership team brings over four decades of banking and advisory experience, having closed transactions exceeding USD 10 billion across sectors. With strong relationships across banks, NBFCs, DFIs, private equity and credit funds, we ensure our clients receive optimal support at every stage of their growth journey.
                </p>
            </div>
        </div>
    )
}

export default About