import React from 'react'


const Carousel = () => {
    return (
        // <div style={{marginTop: '3.5rem!important'}}>
        <div >
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://www.iskconpune.com/wp-content/uploads/2023/01/narsimha-chaturdashi1.jpeg' className='d-inline-block w-100' style={{height:' 65vh'}}
                        alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src='https://www.iskconpune.com/wp-content/uploads/2023/01/jagannath-baladev-subhadra.jpeg' className='d-inline-block w-100' style={{height:' 65vh'}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src='https://www.iskconpune.com/wp-content/uploads/2023/01/dieties-live-darshan.jpg' className='d-inline-block w-100' style={{height:' 65vh'}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
