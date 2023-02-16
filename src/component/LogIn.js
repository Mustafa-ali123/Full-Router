import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';

export default function LogIn() {
    const navigate = useNavigate();
    return (

        <>    <Navbar />

            <div className='container mt-5  '>
                <div className=' row  '>
                    <div className='col-lg-12 md-12 col-sm-12 mt-5 '>
                        <div className='login py-5 px-5 mx-auto'>
                            <h1 className='text-center fw-bolder mt-2'>Log In</h1>
                            <h4 className="my-3">Email :</h4>
                            <input type=" Email,number " placeholder=" Email or Phone Number" /><br />
                            <h4 className="my-3">Password :</h4>
                            <input type="password" placeholder="  Pasword" required="required" class="mb-3" /><br />
                            <button class="btn ml-5 btn-primary mb-3 ">Log in</button>
                            {/* <button class=" btn  btn-primary mx-4 px-5 " onClick={()=>navigate("/sign")}>Sign Up</button><br /> */}
                            <br />
                            <button class="btn  btn-primary">Create New Account</button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
