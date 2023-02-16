import React from 'react'
import '../App.css';
import Navbar from './Navbar';

export default function SignIn() {
    return (
        <>
            <Navbar />
<br/>
<br/>
<br/>
            <h1 className='text-center fw-bolder mt-4'>Sign Up</h1>
            <h2 class="text-center fw-bolder ">REGISTRATION OF COURCES</h2>
         <div className='container sign   '>
                <div className=' row '>
                    <div className='col-lg-12 md-12 col-sm-12 mt-4'>
                    
                    <div className='side mx-auto '>
                        <form className='py-5 px-4 '>

                            <div class="mb-3">
                                <h4>First Name :</h4>
                                <input type="email" placeholder='First Name ' class=" form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <h4>Last Name :</h4>
                                <input type="text" class="form-control" placeholder='Last Name ' id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <h4>Email address :</h4>
                                <input type="email" class="form-control" placeholder=' Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <h4>Password :</h4>
                                <input type="password" placeholder='Password ' class="form-control" id="exampleInputPassword1" />
                            </div>
                        
                            <button type="submit" class="btn btn1 px-5  btn-primary">Submit</button>
                        </form>
                    </div>
                    </div>

                </div>
            </div>

        </>
    )
}
