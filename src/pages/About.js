import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <section className="bg-gray-100">
      <div className="container  ">
        <div className="row py-3 align-items-center">
          <div className="col-lg-6 ">
            <h4 className="heading text-center text-lg-start">About us</h4>
          </div>
          <div className="col-lg-6 ">
            <ol className="breadcrumb justify-content-center justify-content-lg-end small">
              <li className="breadcrumb-item">
                <Link className="text-reset" to='/'>Home</Link >
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
      <section>
      <div className='container'>
      <div className='row align-items-center my-3'>
        <div className='col-md-6 my-3'>
          <img src='/about.jpg' alt='about' className='img-fluid'/>
        </div>
        <div className='col-md-6 ps-lg-5 my-3'>
          <h6 className='mb-3 heading fw-600'>Our story</h6>
          <h2 className='mb-4 heading fw-600'>About our Store</h2>
          <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className='text-muted mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    <div className='container-fluid bg-gray-100 p-5 mb-5'>
    <div className='row px-md-4 g-4'>
        <div className='col-md-4'>
          <h3 className='heading fw-600 mb-3'>Our vission</h3>
          <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='col-md-4'>
          <h3 className='heading fw-600 mb-3'>Our mission</h3>
          <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='col-md-4'>
          <h3 className='heading fw-600 mb-3'>Our goal</h3>
          <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
      </section>
    </>
  )
}

export default About
