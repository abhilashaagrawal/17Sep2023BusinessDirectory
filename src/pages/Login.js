import React from 'react'
import swal from 'sweetalert'

export default function Login() {
    //2.1 Hooks/Variables

    //2.2 defination area
    let myLogin=()=>{
        // alert('okkkkk');
        let payload={
            "identifier": document.getElementById('username').value,
            "password": document.getElementById('password').value
        }
        console.log(payload);
        //call the api
        fetch(`http://localhost:1337/api/auth/local`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            if(data["jwt"]!==undefined)
            {
                //Login success
                // alert('ok');
                swal("Good job!", "Login Successfully", "success");
                window.location.href='/business_register';
                window.localStorage.setItem('jwt_token',data["jwt"])
            }
            else{
                swal("Bad job!",`${data.error.message}` , "error");
                // alert(`${data.error.message}`);
            }
        })
        .catch(err=>err)
    }
    //2.3 return statment
    return (
        <>  
             <h1 className='text-center'>Login Form</h1>
            <form className='p-3'>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username" name='username' placeholder='Enter User Name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' placeholder='Enter Password'/>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>{myLogin()}}>Submit</button>
            </form>
        </>
    )
}
