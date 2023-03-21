import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <div className="container my-4">
                <div class="row mb-2">
                    <div class="col-md-6">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">Initiative</strong>
                                <h3 class="mb-0">Govardhan Goshala</h3>
                                <div class="mb-1 text-muted">Nov 12</div>
                                <p class="card-text mb-auto">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="#" class="stretched-link">Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img class="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?cow,village" alt="" />
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-warning">Association</strong>
                                <h3 class="mb-0">Bhagvatam Class</h3>
                                <div class="mb-1 text-muted">Nov 11</div>
                                <p class="mb-auto">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="#" class="stretched-link">Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img class="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?iskcon,devotees" alt="" />
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-6">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success">Initiative</strong>
                                <h3 class="mb-0">Sunday School</h3>
                                <div class="mb-1 text-muted">Nov 12</div>
                                <p class="card-text mb-auto">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="#" class="stretched-link">Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img class="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?school,children" alt="" />
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-danger">Events</strong>
                                <h3 class="mb-0">Janmashtami</h3>
                                <div class="mb-1 text-muted">Nov 11</div>
                                <p class="mb-auto">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="#" class="stretched-link">Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img class="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?iskcon,bhagvatam" alt="" />
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"></rect>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
