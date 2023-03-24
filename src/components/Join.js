import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Join = () => {

    const[details, setDetails] = useState({firstname: "", lastname: "", address:"", mobile: ""})

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/enquiry/adduser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ firstname: details.firstname, lastname: details.lastname, address:details.address, mobile: details.mobile })
        })
        const json = await response.json();
        console.log(json)
    }

    const onChange = (e) =>{
        setDetails({...details, [e.target.name]: e.target.value})
    }


    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h3 className='d-flex align-content-center justify-content-center mb-4 text-primary'>Fill Up Your Details To Get Notified About Our Programs</h3>
                <form method="post" onSubmit={handleSubmit}> 
                    <div className="row">
                        <div className="col">
                            <label className='px-1 mb-2'>First Name</label>
                            <input type="text" className="form-control" placeholder="First name" name="firstname" value={details.firstname} onChange={onChange}/>
                        </div>
                        <div className="col">
                            <label className='px-1 mb-2'>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name" name="lastname" value={details.lastname} onChange={onChange}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label className='px-1 mb-2'>Address</label>
                            <input type="text" className="form-control" placeholder="Address" name="address" value={details.address} onChange={onChange}/>
                        </div>
                        <div className="col">
                            <label className='px-1 mb-2'>Mobile</label>
                            <input type="text" className="form-control" placeholder="Mobile Number" name="mobile" value={details.mobile} onChange={onChange}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <button type="submit" className="btn btn-primary mx-2">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Join
