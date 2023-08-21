import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white sticky-top">
      <div className="container py-2 px-4">
        <button
          className="navbar-toggler p-0 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation>"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={"/"} className="navbar-brand m-0">
          <img src="/logo.svg" alt="logo" />
        </Link>

        <div className="headerOptions justify-content-end d-flex d-md-none">
          <div className="">
            <Link to={"cart"}>
              <FiShoppingCart />
            </Link>
          </div>
          <div className="">
            <Link to={"login"}>
              <GoPerson />
            </Link>
          </div>
        </div>
        <div
          className="collapse navbar-collapse row justify-content-center justify-content-lg-end "
          id="main-nav"
        >
          <div className="navbar-nav col-md-6 row justify-content-center text-center">
            <div className="nav-item col-md-3 col-lg-2 my-1 ">
              <NavLink className={({ isActive }) => isActive ? 'activeNavLink' : 'headerLink'}  to={"/"}>Home</NavLink>
            </div>
            <div className="nav-item col-md-3 col-lg-2 my-1 ">
              <NavLink className={({ isActive }) => isActive ? 'activeNavLink' : 'headerLink'}  to={"/shop"}>Shop</NavLink>
            </div>
            <div className="nav-item col-md-3 col-lg-2 my-1 ">
              <NavLink className={({ isActive }) => isActive ? 'activeNavLink' : 'headerLink'}  to={"/about"}>About</NavLink>
            </div>
            <div className="nav-item col-md-3 col-lg-2 my-1 ">
              <NavLink className={({ isActive }) => isActive ? 'activeNavLink' : 'headerLink'}  to={"/contact"}>Contact</NavLink>
            </div>
          </div>
          <div className="headerOptions navbar-nav col-6 justify-content-end row d-none d-md-flex">
            <div className="search  col-9 col-lg-7">
              <input type="text" placeholder="Search Products" />
              <span>
                <AiOutlineSearch />
              </span>
            </div>
            <div className="col-1">
              <Link to={"cart"}>
                <FiShoppingCart />
              </Link>
            </div>
            <div className="col-1">
              <Link to={"login"}>
                <GoPerson />
              </Link>
            </div>
          </div>

          {/* <div className="collapse navbar-collapse " id="main-nav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/shop"} className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
            <li className="search  nav-item">
            <input type="text" placeholder="Search" />
            <span>
              <AiOutlineSearch />
            </span>
          </li>
          <li className="nav-item">
            <Link to={"cart"}>
              <HiOutlineShoppingBag />
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"login"}>
              <GoPerson />
            </Link>
          </li>
          </ul>
        </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
