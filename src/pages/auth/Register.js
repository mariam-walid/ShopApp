import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.id]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    localStorage.setItem("user register data", JSON.stringify(form));
    setTimeout(() => {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        subject: "",
        comment:"",
      })
    }, 1500);
    window.location.pathname='/';
  };
  return (
    <>
      <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="border rounded py-4 px-3 px-md-5 ">
          <h2 className="text-center">Register</h2>
          { loading && <Loading/>}
          <form onSubmit={handleSubmit} className="">
          <div className=" mb-4">
              <label htmlFor="name" className=" form-label">Name</label>
              <input
                id="name"
                type="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name here..."
                className="form-control"
              />
            </div>
            <div className=" mb-4">
              <label htmlFor="email" className=" form-label">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email here..."
                className="form-control"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="password" className=" form-label">Password</label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password here..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <div className="row mb-3">
                <p className="col-9 text-muted fs-6">Already have an account?</p>
                <Link className="col-3 text-end fs-6 text-danger authA" to={"/login"}>Login</Link>
              </div>
              <button type="submit" className="btn btn-danger w-100 fs-5">Create Account</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
