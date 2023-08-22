import React from 'react'
import { Link } from 'react-router-dom'

function CheckOut() {
  return (
    <>
    <section className="bg-gray-100">
        <div className="container  ">
          <div className="row py-3 align-items-center">
            <div className="col-lg-6 ">
              <h4 className="heading text-center text-lg-start">
                Checkout
              </h4>
            </div>
            <div className="col-lg-6 ">
              <ol className="breadcrumb justify-content-center justify-content-lg-end small">
                <li className="breadcrumb-item">
                  <Link className="text-reset" to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container my-4'>

            <div className='row justify-content-between align-items-start'>

                <div className='col-12 col-lg-7 border row  justify-content-between'>
                    <div className='border-bottom col-12 py-3 mb-3'>
                        <h4 className='heading'>Shipping Address</h4>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column my-3'>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='fname'/>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column my-3'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='lname'/>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column my-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control rounded-0 mt-2 text-muted fs-5' id='email'/>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column my-3'>
                        <label htmlFor='street'>Street</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='street'/>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column my-3'>
                        <label htmlFor='city'>City</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='city'/>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column my-3'>
                        <label htmlFor='zip'>ZIP</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='zip'/>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column my-3'>
                        <label htmlFor='state'>State</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='state'/>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column my-3 mb-5'>
                        <label htmlFor='Phone'>Phone Number</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='Phone'/>
                    </div>

                </div>

                <div className='col-12 col-lg-4 border row justify-content-between'>
                    <div className='col-12 border-bottom py-3 mb-3'>
                        <h4 className='heading'>Credit Card</h4>
                    </div>
                    <div className='col-12 my-3 d-flex flex-column'>
                        <label htmlFor='cardNum'>Card number</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='cardNum' placeholder='0000 0000 0000 0000'/>
                    </div>
                    <div className='col-12 col-md-6 my-3 d-flex flex-column'>
                        <label htmlFor='exDate'>Expiry date</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5' id='exDate' placeholder='mm/yy'/>
                    </div>
                    <div className='col-12 col-md-6 my-3 d-flex flex-column'>
                        <label htmlFor='cvc'>CVC</label>
                        <input type='text' className='form-control rounded-0 mt-2 text-muted fs-5 ' id='cvc' placeholder='000'/>
                    </div>

                    <button className='btn btn-danger rounded-0 fs-5 mt-3 mb-4'>Place Order</button>
                </div>

                

            </div>

        </div>
      </section>
      
    </>
  )
}

export default CheckOut
