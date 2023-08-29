import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart} from "../store/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch()
  
  return (
    <div className="card h-100 m-auto py-2 border ">
      <div className="position-relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top d-block w-100 border-bottom border-light "
        />
        <div className="cardBtn d-none d-lg-block">
          <button className="btn btn-danger w-100 fs-5 rounded-0" onClick={()=> dispatch(addToCart(product))}>
            <FiShoppingCart className="me-1" /> Add to cart
          </button>
        </div>
      </div>

      <div className="p-3 text-center">
        <p className="text-muted m-0 mb-2 text-capitalize">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`} className="text-reset  prodTitle">
          {product.title}
        </Link>
        <p className="text-danger fw-bold mt-3">${product.price}</p>
        <button className="btn btn-danger fs-5 d-lg-none" onClick={()=> dispatch(addToCart(product))}>
            <FiShoppingCart className="me-1" /> Add to cart
          </button>
      </div>
    </div>
  );
};

export default Card;
