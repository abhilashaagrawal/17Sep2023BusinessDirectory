//1 Import Area
import React, { useEffect, useState } from 'react'
// import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import URL from '../../helper/Url';

//2 Function Defination
function Navigation() {
    //2.1 Hook/Variables
    const[logo,setLogo]=useState()
    useEffect(()=>{
        fetch(`${URL}/api/website?populate=*`)
        .then(res=>res.json())
        .then((logodata)=>{
            console.log('LogoData---->',logodata.data.attributes.logo.data.attributes.url)
            setLogo(logodata.data.attributes.logo.data.attributes.url)
        })
        .catch(err=>err)
    },[])

    //2.2 function Defination Area
    let myLogOut=()=>{
        // alert('ok');
        //remove the key and value
        window.localStorage.removeItem('jwt_token');
        window.location.href='/login';
    }

    //2.3 Return Statemnet
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <a className="navbar-brand" href="#">
                            <img src={`${URL}${logo}`} alt="Bootstraplogo" width="100" height="24" />
                        </a>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav float-end" id='nav1'>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            {
                                window.localStorage.getItem('jwt_token')===null &&
                                <>
                                     <li className="nav-item">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </li>
                                </>
                            }
                            {
                                window.localStorage.getItem('jwt_token')!==null &&
                                <>
                                    <li className="nav-item">
                                    <Link className="nav-link" onClick={()=>{myLogOut()}}>LogOut</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/business_register">Business Register</Link>
                                    </li>
                                </>
                            }
                        </ul>  
                    </div>
                </div>
            </nav >
       </> 
    )
}
//3 Export Area
export default Navigation