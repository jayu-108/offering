import React from 'react'
import Carousel from './Carousel'
import Featurecard from './Featurecard'
import Footer from './Footer'
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Featurecard />
            <Footer />
        </div>
    )
}

export default Home
