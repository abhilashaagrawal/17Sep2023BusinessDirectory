//1 Import Area
import React, { useEffect, useState } from 'react'
import URL from '../helper/Url';
import swal from 'sweetalert';

//2 Function Defination
export default function Business_register() {
    //2.1 Hook/Variables
    const [countries,setCountries]=useState([])
    const [states,setStates]=useState([])
    const [cities,setCities]=useState([])
    const [businessCategories,setBusinessCategories]=useState([])
    useEffect(()=>{

        //call the all country api
        fetch(`${URL}/api/countries`,{method:"GET"})
        .then(res=>res.json())
        .then((countrydata)=>{
            console.log('Country data------>',countrydata.data);
            setCountries(countrydata.data)
        })
        .catch(err=>err)

        //call the all states api
        /*
        fetch(`${URL}/api/states`,{method:"GET"})
        .then(res=>res.json())
        .then((statedata)=>{
            console.log('State data------>',statedata.data);
            setStates(statedata.data)
        })
        .catch(err=>err)

        //call the all city api
        fetch(`${URL}/api/cities`,{method:"GET"})
        .then(res=>res.json())
        .then((citydata)=>{
            console.log('City data------>',citydata.data);
            setCities(citydata.data)
        })
        .catch(err=>err)
        */

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
    let busiReg=(e)=>{
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
        console.log(document.querySelector('select[name="cityid"]'));
        console.log(document.querySelector('select[name="cityid"]').value);
        let token=window.localStorage.getItem('jwt_token');
        //call the business post api
        fetch(`${URL}/api/businesses`,{  //string interpolation
            method:"POST",
            headers:{
                "Content-Type":'application/json',
                "Authorization": 'Bearer '+token  //concatination
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((busdata)=>{
            console.log('Business Data',busdata)
            if(busdata["data"]==null)
            {
                swal("Bad job!", `${busdata.error.name}`, "error");
            }
            else{
            swal("Good job!", "Business Register Successfully!", "success");
            }
        })
        .catch(err=>err)
    }

    let selectCountry=(e)=>{
        // alert('okk');
        console.log(e.target.value);
        let country_id=e.target.value;
        //get the states from country ID
        fetch(`${URL}/api/states?filters[country][id][$eq]=${country_id}&populate=*`)
        .then(res=>res.json())
        .then((statedatabycountry)=>{
            console.log(statedatabycountry.data)
            setStates(statedatabycountry.data)
        })
        .catch(err=>err)
    }

    let selectState=(e)=>{
        // alert('okk');
        console.log(e.target.value);
        let state_id=e.target.value;
       //get all cities by state ID
       fetch(`${URL}/api/cities?filters[state][id][$eq]=${state_id}&populate=*`)
       .then(res=>res.json())
       .then((citydatabystateid)=>{
            console.log(citydatabystateid.data)
            setCities(citydatabystateid.data)
            
       })
       .catch(err=>err)
    }

    //2.3 Return statement
    return (
        <>
            <h1 className='text-center'>Business Register</h1>
            <form className='m-3'>
                <label htmlFor="username" className="form-label">Country</label>
                <select class="form-select mb-2" aria-label="Default select example" name='countryid' onChange={(e)=>{selectCountry(e)}} >
                    {
                        countries.map((cv,index,arr)=>{
                            return <option key={index} value={cv.id} selected>{cv.attributes.name}</option>
                        })
                    }
                </select>
                
                {
                    states.length!==0&&
                        <>
                            <label htmlFor="username" className="form-label">State</label>
                            <select class="form-select mb-2" aria-label="Default select example" name='stateid' onChange={(e)=>{selectState(e)}}>
                                {
                                    states.map((cv,index,arr)=>{
                                        return <option key={index} value={cv.id} selected>{cv.attributes.name}</option>
                                    })
                                }
                            </select>
                        </>
                }
                {
                    cities.length!==0&&
                    <>
                        <label htmlFor="username" className="form-label">City</label>
                        <select class="form-select mb-2" aria-label="Default select example" name='cityid'>
                            {
                                cities.map((cv,index,arr)=>{
                                    return <option key={index} value={cv.id} selected>{cv.attributes.name}</option>
                                })
                            }
                        </select>
                    </>
                }
                
                <label htmlFor="username" className="form-label">Business Category</label>
                <select class="form-select mb-2" aria-label="Default select example" name='buscatid'>
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
                <button type="submit" className="btn btn-primary" onClick={(e)=>{busiReg(e)}}>Business Register</button>
            </form>
        </>
    )
}
