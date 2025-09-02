import React from 'react'
import Carousel from '../components/Carousel.jsx'
import About from '../components/About.jsx'
import Card_container from '../components/Card_container.jsx'
import Collab from '../components/Collab.jsx'
import { parteners, provider } from "../utils/data.js"


const Home = () => {
    return (
        <div>
            <Carousel/>
            <About />
            <Card_container />
            {/* <Collab prop={parteners} />
            <Collab prop={provider} /> */}
        </div>
    )
}

export default Home