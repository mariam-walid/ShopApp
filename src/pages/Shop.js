import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { setProducts, filterByCategory } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const [loading, setLoading] = useState(true);

  const { filteredProducts, categories, selectedCategory } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLoading(false);
      dispatch(setProducts(data));
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

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
        <div className="container py-md-5 mt-4">
          <div className="row g-4  justify-content-center justify-content-md-between">
            <div className="col-12 d-md-none d-flex align-items-center gap-3 mb-2">
              <button
                className="btn btn-sm border rounded-0"
                data-bs-toggle="offcanvas"
                data-bs-target="#categoriesFilter"
                aria-controls="categoriesFilter"
              >
                <HiMenuAlt2 className="fs-2" />
              </button>
              <h6 className="heading">Filter Products</h6>

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="categoriesFilter"
                aria-labelledby="filterLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="filterLabel">
                    Shop Filter
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="d-flex flex-column mt-3 gap-3 categories">
                    <h6
                      className={!selectedCategory ? "text-danger" : ""}
                      onClick={() => dispatch(filterByCategory(null))}
                    >
                      All Products
                    </h6>
                    {categories.map((category, index) => (
                      <h6
                        key={index}
                        className={`text-capitalize ${
                          category === selectedCategory ? "text-danger" : ""
                        }`}
                        onClick={() => dispatch(filterByCategory(category))}
                      >
                        {category}
                      </h6>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 d-none d-md-block">
              <div className="border-bottom">
                <h5 className="heading text">CATEGORIES</h5>
              </div>
              <div className="d-flex flex-column mt-3 gap-3 categories">
                <h6
                  className={!selectedCategory ? "text-danger" : ""}
                  onClick={() => dispatch(filterByCategory(null))}
                >
                  All Products
                </h6>
                {categories.map((category, index) => (
                  <h6
                    key={index}
                    className={`text-capitalize ${
                      category === selectedCategory ? "text-danger" : ""
                    }`}
                    onClick={() => dispatch(filterByCategory(category))}
                  >
                    {category}
                  </h6>
                ))}
              </div>
            </div>

            {loading && (
              <div className="col-12 col-md-9 row ">
                <Loading />
              </div>
            )}

            {!loading && (
              <div className="col-12 col-md-9 row ">
                {filteredProducts.map((product, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                    <Card product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
