import React from "react";
import { Link } from "react-router-dom";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ShoppingCart = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container  ">
          <div className="row py-3 align-items-center">
            <div className="col-lg-6 ">
              <h4 className="heading text-center text-lg-start">
                Shopping Cart
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
                  Shopping Cart
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-8">
              <div className="border-bottom d-flex justify-content-between py-3">
                <h3 className="heading">Products</h3>
                <Link to={"/shop"} className="btn btn-danger rounded-0 ">
                  Continue Shopping
                </Link>
              </div>
              <div className="d-flex flex-column gap-4  my-3 border-bottom pb-3">
                <div className="flex-shrink-0 me-3 text-center">
                  <img src="/women.jpg" alt="product" width="120" />
                </div>
                <div className="d-flex justify-content-between col">
                  <div>
                    <h5 className="heading">Fine-knit sweater</h5>
                    <p className="text-muted fs-5">$154.00</p>
                  </div>
                  <div >
                    <p>Quantity</p>
                    <div className="d-flex  text-muted">
                      <div className="border border-end-0 px-4">
                        <p className="fs-3 mb-0  ">1</p>
                      </div>
                      <div className="d-flex flex-column">
                        <div className="border px-2">
                          <BiSolidUpArrow className="arrow" />
                        </div>
                        <div className="border px-2 border-top-0">
                          <BiSolidDownArrow className="arrow" />
                        </div>
                      </div>
                    </div>
                    <button className="btn p-0 mt-3 text-danger"> <RiDeleteBin6Line className="fs-5"/> Remove </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 border p-0">
              <div className="border-bottom p-3">
              <h5 className="heading">Order Total</h5>
              </div>
              
              <div className="m-3 border-bottom">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold text-muted">Subtotal</p>
                  <p className="fw-bold text-secondary">$265.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold text-muted">Taxes</p>
                  <p className="fw-bold text-secondary">$265.00</p>
                </div>
              </div>
              <div className="mx-3 my-4">
              <div className="d-flex justify-content-between">
              <p className="heading">Grand Total</p>
              <p className="fw-bold">$265.00</p>
              </div>
              <button className="btn btn-danger w-100 rounded-0 mt-3">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
