import React from 'react'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

export default function Navigation() {
    let myLogOut=()=>{
        // alert('ok');
        //remove the key and value
        window.localStorage.removeItem('jwt_token');
        window.location.href='/login';
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Bootstrap" width="100" height="24" />
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
                                <li className="nav-item">
                                <Link className="nav-link" onClick={()=>{myLogOut()}}>LogOut</Link>
                                </li>
                            }
                        </ul>  
                    </div>
                </div>
            </nav >
       </> 
    )
}
