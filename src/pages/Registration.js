//1 Import Area
import React, { useState } from 'react'
import swal from 'sweetalert';

//2 Function defination Area
function Registration() {
  //2.1 Hooks/Variables

  //2.2 Function defination area
  let registerUser=()=>{
    // alert('okkkkkk');
    let u=document.querySelector('input[name=username]').value;
    let e=document.querySelector('input[name=email]').value;
    let p=document.querySelector('input[name=password]').value;
    console.log(u);
    console.log(e);
    console.log(p);
    let payload={
      "username": u,
      "email": e,
      "password": p
    }
    console.log(payload);

    //call the api
    fetch(`http://localhost:1337/api/auth/local/register`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    }
    )
    .then((res)=>{return res.json()})
    .then((data)=>{
      console.log(data.data)
      if(data.data===null)
      {
        swal("Bad job!",`${data.error.message}`, "error");
      }
      else{
        swal("Good job!", "Register Created Successfully!", "success");
      }
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  //2.3 return Statement
  return (
        <>
            <h1 className='text-center'>Registration Form</h1>
            <form className='m-3'>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" name='username' className="form-control" id="username" placeholder='Enter User Name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name='email' className="form-control" id="email" placeholder='Enter Email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' />
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>{registerUser()}}>Submit</button>
            </form>
        </>
  )
}
//3 Export Area
export default Registration;