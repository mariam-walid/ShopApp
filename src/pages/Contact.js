import React, {useState} from "react";
import { Link } from "react-router-dom";
import Loading from './../components/Loading';

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    comment:"",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        subject: "",
        comment:"",
      })
    }, 1500);
    
  };
  return (
    <>
    <section className="bg-gray-100">
      <div className="container  ">
        <div className="row py-3 align-items-center">
          <div className="col-lg-6 ">
            <h4 className="heading text-center text-lg-start">Contact us</h4>
          </div>
          <div className="col-lg-6 ">
            <ol className="breadcrumb justify-content-center justify-content-lg-end small">
              <li className="breadcrumb-item">
                <Link className="text-reset" to='/'>Home</Link >
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container my-4">
      <div className="row">
      {loading && <Loading/>}
        <div className="col-lg-6">
          <h2 className="heading my-2">Get in Touch</h2>
          <p className="text-muted ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form className="row g-3 my-2" onSubmit={handleSubmit}>
              <div className="col-md-6 mb-2">
              <input
                id="name"
                type="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Name*"
                className="form-control py-2"
              />
              </div>
              <div className="col-md-6 mb-2">
            <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email*"
                className="form-control py-2"
              />
              </div>
            <div className="col-12 mb-2">
            <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Subject*"
                className="form-control py-2"
              />
            </div>
            <div className="col-12 mb-2">
            <textarea
                id="comment"
                value={form.comment}
                onChange={handleChange}
                placeholder="Comment*"
                className="form-control py-2"
              />
            </div>
            <div className="col-12">
            <button type="submit" className="btn btn-danger px-3">{loading ? 'Sending...' : 'Send' }</button>
            </div>
            
          </form>
        </div>
      </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
