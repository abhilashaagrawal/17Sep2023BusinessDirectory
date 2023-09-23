//1 Import Area
import React, { useEffect, useState } from 'react'
import URL from '../helper/Url';
import swal from 'sweetalert';

//2 Function Defination
export default function Business_register() {
    //2.1 Hook/Variables
    const [cities,setCities]=useState([])
    const [businessCategories,setBusinessCategories]=useState([])
    useEffect(()=>{
        //call the all city api
        fetch(`${URL}/api/cities`,{method:"GET"})
        .then(res=>res.json())
        .then((citydata)=>{
            console.log('City data------>',citydata.data);
            setCities(citydata.data)
        })
        .catch(err=>err)

        //call the all business categories api
        fetch(`${URL}/api/business-categories`,{method:"GET"})
        .then(res=>res.json())
        .then((buscatdata)=>{
            console.log('Business Category data------>',buscatdata.data);
            setBusinessCategories(buscatdata.data)
            
        })
        .catch(err=>err)
    },[])

    //2.2 function defination area
    let busReg=(e)=>{
        e.preventDefault()
        // alert('okk');
        let payload={
                        "data": {
                            "name": document.getElementById('username').value,
                            "business_category": document.querySelector('select[name="buscatid"]').value,
                            "cities": [
                                document.querySelector('select[name="cityid"]').value
                            ]
                        }
                    }
        //call the business post api
        fetch(`${URL}/api/businesses`,{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((busdata)=>{
            console.log('Business Data',busdata)
            swal("Good job!", "Business Register Successfully!", "success");
        })
        .catch(err=>err)
    }
    //2.3 Return statement
    return (
        <>
            <h1 className='text-center'>Business Register</h1>
            <form className='m-3'>
                <label htmlFor="username" className="form-label">City</label>
                <select class="form-select" aria-label="Default select example" name='cityid'>
                    {
                        cities.map((cv,index,arr)=>{
                            return <option key={index} value={cv.id} selected>{cv.attributes.name}</option>
                        })
                    }
                </select>
                <label htmlFor="username" className="form-label">Business Category</label>
                <select class="form-select" aria-label="Default select example" name='buscatid'>
                    {
                        businessCategories.map((cv,index,arr)=>{
                            return  <option key={index} value={cv.id} selected>{cv.attributes.name}</option>
                        })
                    }
                </select>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Business Name</label>
                    <input type="text" name='username' className="form-control" id="username" placeholder='Enter Business Name' />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e)=>{busReg(e)}}>Business Register</button>
            </form>
        </>
    )
}
