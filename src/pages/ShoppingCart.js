import React from "react";
import { Link } from "react-router-dom";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch} from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart  } from "../store/cartSlice";

const ShoppingCart = () => {

  const cartList = useSelector((state) => state.cart.cartList)
  console.log(cartList)
  const checkout = useSelector((state) => state.cart.checkout)

  const dispatch = useDispatch()

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
        <div className="container-fluid py-4 px-md-5  mb-5">
          <div className="row justify-content-between align-items-start g-3">

            <div className="col-12 col-lg-8">

              <div className="border-bottom d-flex justify-content-between pb-3">
                <h3 className="heading">Products</h3>
                <Link to={"/shop"} className="btn btn-danger rounded-0 ">
                  Continue Shopping
                </Link>
              </div>

              {
                cartList.map((product)=>(
                  <div key={product.id} className="d-flex   justify-content-between my-3 border-bottom pb-3">
                <div className="flex-shrink-0 me-3 text-center">
                  <img src={product.image} alt="product" width="120" />
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between col">
                  <div>
                    <h5 className="heading">{product.title}</h5>
                    <p className="text-muted fs-5">${product.price}</p>
                  </div>
                  <div className="d-flex justify-content-between flex-column align-items-md-start">
                    <p className="d-none d-md-block">Quantity</p>
                    <div className="d-flex text-muted">
                      <div className="border border-end-0 px-3 d-flex align-items-center">
                        <p className="fs-5 mb-0">{product.quantity}</p>
                      </div>
                      <div className="d-flex flex-column">
                        <div className="border px-2">
                          <BiSolidUpArrow className="arrow " onClick={() => dispatch(increaseQuantity(product))}/>
                        </div>
                        <div className="border px-2 border-top-0">
                          <BiSolidDownArrow className="arrow " onClick={() => dispatch(decreaseQuantity(product))}/>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 link-danger " onClick={() => dispatch(removeFromCart(product))} > <RiDeleteBin6Line className="fs-5"/> Remove </p>
                  </div>
                </div>
              </div>
                ))
              }
            </div>

            <div className="col-12 col-lg-3 border p-0 ">
              <div className="border-bottom p-3">
              <h5 className="heading">Order Total</h5>
              </div>
              
              <div className="m-3 border-bottom">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold text-muted">Subtotal</p>
                  <p className="fw-bold text-secondary">${checkout.subTotal}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold text-muted">Taxes</p>
                  <p className="fw-bold text-secondary">${checkout.taxes}</p>
                </div>
              </div>
              <div className="mx-3 my-4">
              <div className="d-flex justify-content-between">
              <p className="heading">Grand Total</p>
              <p className="fw-bold">${checkout.subTotal + checkout.taxes}</p>
              </div>
              <Link to={'/checkout'} className="btn btn-danger w-100 rounded-0 mt-3">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
