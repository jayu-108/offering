import React from 'react'
import Navbar from './Navbar'

const Join = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h3 className='d-flex align-content-center justify-content-center mb-4 text-primary'>Fill Up Your Details To Get Notified About Our Programs</h3>
                <form>
                    <div className="row">
                        <div className="col">
                            <label className='px-1 mb-2'>First Name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                            <label className='px-1 mb-2'>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label className='px-1 mb-2'>Address Line 1</label>
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label className='px-1 mb-2'>Address Line 2</label>
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label className='px-1 mb-2'>City</label>
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                        <div className="col">
                            <label className='px-1 mb-2'>District</label>
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                        <div className="col">
                            <label className='px-1 mb-2'>Zip Code</label>
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label className='px-1 mb-2'>Primay Mobile</label>
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                        <div className="col">
                            <label className='px-1 mb-2'>Alternate Mobile</label>
                            <input type="text" className="form-control" placeholder="Address" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <button className="btn btn-primary mx-2">Submit</button>
                            <button className="btn btn-secondary">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Join
