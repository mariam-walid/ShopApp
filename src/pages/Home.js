import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import Loading from "../components/Loading";
import {
  BsTruck,
  BsHeadphones,
  BsBoxArrowInLeft,
  BsShieldExclamation,
} from "react-icons/bs";
import Card from "../components/Card";

const Home = () => {
  const [latestArrivals, setLatestArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=8");
        const data = await res.json();
        setLatestArrivals(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLatest();
  }, []);

  return (
    <section>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="/homeslide1.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="/homeslide2.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid my-4">
        <div className="row g-4 align-items-center px-3">
          <div className="col-lg-4">
            <CategoryCard img={`women.jpg`} category={"WOMEN'S"} />
          </div>
          <div className="col-lg-4">
            <CategoryCard img={`men.jpg`} category={"MEN'S"} />
          </div>
          <div className="col-lg-4">
            <CategoryCard img={`electronics.jpg`} category={"ELECTRONICS"} />
          </div>
        </div>
        <div className="row g-4 my-4 px-5 ">
          <h1 className="heading text-center mb-3">Latest Arrivals</h1>
          {loading ? (
            <Loading />
          ) : (
            <>
              {latestArrivals.map((product, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                  <Card product={product} />
                </div>
              ))}
            </>
          )}
        </div>

        <div className="row pt-4 px-5 border-top mt-5 ">
          <div className="col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
            <BsTruck className="fs-1 text-danger me-4" />
            <div>
              <h5 className="heading">Free shipping</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
            <BsHeadphones className="fs-1 text-danger me-4" />
            <div>
              <h5 className="heading">Contact us 24/7</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
            <BsBoxArrowInLeft className="fs-1 text-danger me-4" />
            <div>
              <h5 className="heading">30 Days Return</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
            <BsShieldExclamation className="fs-1 text-danger me-4" />
            <div>
              <h5 className="heading">100% Secure Payment</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
