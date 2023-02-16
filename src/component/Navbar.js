import React from 'react';

import {Link } from 'react-router-dom';

export default function Navbar() {
  return (
  
          <>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top  sta bg-primary cl-light  bg-primary-tertiary">
  <div class="container-fluid">
   <Link class="navbar-brand" to="#">Computer Classes</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <Link class="nav-link active" aria-current="page" to="/">Home</Link>
       <Link class="nav-link active" to="/about">About</Link>
       <Link class="nav-link active" to="/login">Login</Link>
       <Link class="nav-link active" to="/sign">Sign</Link>
       <Link class="nav-link active" to="/appbar/">Nested</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
