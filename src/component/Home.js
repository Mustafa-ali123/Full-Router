import React from 'react'
import Navbar from './Navbar';
import Home2 from './Home2';


import '../App.css';
export default function Home() {
    return (
        <>
           
<Navbar/>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://www.digitalvidya.com/wp-content/uploads/2019/07/Computer-Courses_5e88b07dcfc3aaf35cdab473242649d4-1.jpg"             
                 class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-md-block">
                    <h1 class="text-white">First slide label</h1>
                    <h4 class=" text-white">Some representative placeholder content for the first slide.</h4>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCpppSjpRCdmJKPXgkxBAj2qeNyYf23b4JgRISjgTMXswda0QBINzuYV2vOQsmnvl4O4&usqp=CAU"
                    class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-md-block ">
                    <h1 class="text-white">Second slide label</h1>
                    <h4 class="text-white">Some representative placeholder content for the second slide</h4>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://www.digitalvidya.com/wp-content/uploads/2019/07/Computer-Courses_5e88b07dcfc3aaf35cdab473242649d4-1.jpg"
                    class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-md-block">
                    <h1 class="text-white">Third slide label</h1>
                    <h4 class="text-white">Some representative placeholder content for the third slide.</h4>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
<Home2/> 
        </>
    )
}
