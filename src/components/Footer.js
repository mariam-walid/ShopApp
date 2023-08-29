import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, setCategories } from "../store/productsSlice";

const Footer = () => {

  const {categories} = useSelector(state=>state.products)
  const dispatch = useDispatch()

  const fetchCategories = async () => {
    try{
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      dispatch(setCategories(data))
    }catch(error){
      console.log('Error fetching categories',error)
    }
    
  };

  useEffect(() => {
    fetchCategories();
  }, [dispatch]);

  return (
    <footer className="container-fluid p-5 bg-dark text-white">
      <div className="row text-center g-4 align-items-center">
        <div className="col-12 col-md-2">
        <Link to={"/"}>
          <img src="/logo-light.svg" alt="logo" />
        </Link>
        </div>
        <div className="col-12 col-md-7 ">
          <h3>Categories</h3>
          <div className="row justify-content-center mt-4">
            {categories.map((category, index) => (
              <div className="col-12 col-md-5 col-lg-3 mb-2" key={index}>
              <Link to={'/shop'} className="text-capitalize " onClick={()=>dispatch(filterByCategory(category))}>{category}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-3 ">
          <h3>Follow Us</h3>
          <div className="mt-4 d-flex justify-content-center gap-4">
            <Link to={"/"} className="">
              <FaFacebook />
            </Link>
            <Link to={"/"} className="">
              <FaInstagram />
            </Link>
            <Link to={"/"} className="">
              <FaTwitter />
            </Link>
            <Link to={"/"} className="">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
