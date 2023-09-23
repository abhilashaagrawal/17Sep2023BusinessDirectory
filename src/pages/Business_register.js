import React from 'react'

export default function Business_register() {
    return (
        <>
            <h1 className='text-center'>Business Register</h1>
            <form className='m-3'>
                <label htmlFor="username" className="form-label">City</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label htmlFor="username" className="form-label">Business Category</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select Business Caategory</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Business Name</label>
                    <input type="text" name='username' className="form-control" id="username" placeholder='Enter Business Name' />
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>{alert('ok')}}>Business Register</button>
            </form>
        </>
    )
}
