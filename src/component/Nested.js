import React from 'react'
import '../App.css';
import { Link, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Nested = () => {

    const navigation = useNavigate();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top  sta bg-dark cl-light  bg-primary-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Appbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="pro">Product</Link>
                            <Link class="nav-link active" to="comp">Company</Link>
                            <Link class="nav-link active" to="menu">Menu</Link>

                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
            <div className='Container '>
                <div className='row px-5'>
                    <div className='col-lg-12 mx-3'>
            <Button variant='contained' className=' mx-5' color="success" onClick={() => navigation("/")}  >Go back Home</Button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Nested
