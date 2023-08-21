import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({img,category}) => {
  return (
    <div className="position-relative ">
      <img className="d-block w-100 " src={`/${img}`} alt={img} />
      <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center top-0 left-0">
        <div className="w-100 text-center">
          <h6 className="text-white mb-2 fw-300">NEW IN</h6>
          <h1 className="text-white">{category}</h1>
          <div className="pt-2 ">
          <Link className="btn btn-light fs-4 " to={""}>
            Shop Now
          </Link>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default CategoryCard;
