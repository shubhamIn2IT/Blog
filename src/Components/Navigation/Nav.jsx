import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <>

      <nav class="m-2 mb-0 rounded navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
             <div id='logo'>😍</div>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form class="d-flex text-white" role="search">
              <button class="btn  px-3 d-flex justify-content-center align-items-center fs-5 text-white" type="submit">Our Work</button>
              <button class="btn  px-3 d-flex justify-content-center align-items-center fs-5 text-white" type="submit">About</button>
              <button class="btn  px-3 d-flex justify-content-center align-items-center fs-5 text-white" type="submit">Services</button>
              <button class="btn  px-3 d-flex justify-content-center align-items-center fs-5 text-white" type="submit">Contact Us</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Nav
