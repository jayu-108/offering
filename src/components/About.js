import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <div class="container my-4">
                <div
                    class="row featurette d-flex justify-content-center align-items-center"
                >
                    <div class="col-md-7">
                        <h2 class="featurette-heading">
                            First featurette heading.
                            <span class="text-muted">It’ll blow your mind.</span>
                        </h2>
                        <p class="lead">
                            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                            ligula porta felis euismod semper. Praesent commodo cursus magna,
                            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                            commodo.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img
                            class="img-fluid"
                            width="500"
                            height="500"
                            src="https://source.unsplash.com/300x300/?vrindavan"
                        >
                        </img>
                    </div>
                </div>

                <div
                    class="row featurette d-flex justify-content-center align-items-center"
                >
                    <div class="col-md-7 order-md-1">
                        <h2 class="featurette-heading">
                            First featurette heading.
                            <span class="text-muted">It’ll blow your mind.</span>
                        </h2>
                        <p class="lead">
                            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                            ligula porta felis euismod semper. Praesent commodo cursus magna,
                            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                            commodo.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img
                            class="img-fluid"
                            width="500"
                            height="500"
                            src="https://source.unsplash.com/300x300/?krishna"
                        />
                    </div>
                </div>

                <div
                    class="row featurette d-flex justify-content-center align-items-center"
                >
                    <div class="col-md-7">
                        <h2 class="featurette-heading">
                            First featurette heading.
                            <span class="text-muted">It’ll blow your mind.</span>
                        </h2>
                        <p class="lead">
                            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                            ligula porta felis euismod semper. Praesent commodo cursus magna,
                            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                            commodo.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img
                            class="img-fluid"
                            width="500"
                            height="500"
                            src="https://source.unsplash.com/300x300/?cow"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
