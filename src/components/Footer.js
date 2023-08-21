import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./styles.css";
const Footer = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try{
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    }catch(error){
      console.log('Error fetching categories',error)
    }
    
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
              <Link className="text-capitalize ">{category}</Link>
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
