import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { Link, NavLink } from "react-router-dom";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLoading(false);
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <section className="bg-gray-100">
        <div className="container  ">
          <div className="row py-3 align-items-center">
            <div className="col-lg-6 ">
              <h4 className="heading text-center text-lg-start">Shop</h4>
            </div>
            <div className="col-lg-6 ">
              <ol className="breadcrumb justify-content-center justify-content-lg-end small">
                <li className="breadcrumb-item">
                  <Link className="text-reset" to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shop
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5 mt-4">
          <div className="row g-4  justify-content-between position-relative">
            <div className="col-3">
              <div className="border-bottom">
                <h5 className="heading text">CATEGORIES</h5>
              </div>
              <div className="d-flex flex-column mt-3 gap-3 categories">
                <h6 onClick={() => setCategory("")}>
                  All Products{" "}
                  <span className="text-muted">({products.length})</span>{" "}
                </h6>
                <h6 onClick={() => setCategory("men's clothing")}>
                  Men{" "}
                  <span className="text-muted">
                    (
                    {
                      products.filter(
                        (product) => product.category == "men's clothing"
                      ).length
                    }
                    )
                  </span>
                </h6>
                <h6 onClick={() => setCategory("women's clothing")}>
                  Women{" "}
                  <span className="text-muted">
                    (
                    {
                      products.filter(
                        (product) => product.category == "women's clothing"
                      ).length
                    }
                    )
                  </span>
                </h6>
                <h6 onClick={() => setCategory("jewelery")}>
                  Jewelery{" "}
                  <span className="text-muted">
                    (
                    {
                      products.filter(
                        (product) => product.category == "jewelery"
                      ).length
                    }
                    )
                  </span>
                </h6>
                <h6 onClick={() => setCategory("electronics")}>
                  Electronics{" "}
                  <span className="text-muted">
                    (
                    {
                      products.filter(
                        (product) => product.category == "electronics"
                      ).length
                    }
                    )
                  </span>
                </h6>
              </div>
            </div>
            {loading && (
              <div className="col-9 d-flex justify-content-center align-items-center">
                <Loading />
              </div>
            )}

            <div className="col-9 d-flex flex-wrap  ">
              {products.map((product, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-5">
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
