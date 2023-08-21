import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { FiShoppingCart } from "react-icons/fi";

function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
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
                <li className="breadcrumb-item">
                  <Link className="text-reset" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Product Details
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-3 mb-5 prodDetails">
          <div className="row  justify-content-between g-5">
            {loading && (
              <div className="d-flex justify-content-center pt-5">
                {" "}
                <Loading />{" "}
              </div>
            )}
            {
                !loading && (
                    <>
                    <div className="col-lg-5 d-flex justify-content-center">
              <img
                src={product.image}
                alt="product image"
                className="img-fluid "
              />
            </div>

            <div className="col-lg-6">
              <p className="text-capitalize text-muted"> {product.category} </p>
              <h5 className="heading mb-5"> {product.title} </h5>
              <p className="text-muted"> {product.description}. </p>
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-4 px-5 mt-5">
                <h4 className="text-danger"> ${product.price} </h4>
                <button className="btn btn-danger rounded-0 fs-5">
                  <FiShoppingCart className="me-1 " /> Add to cart
                </button>
              </div>
            </div>
                    </>
                )
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
