import React, { useState } from "react";
import "../styles/CatSitterForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CatSitterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    experience: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, address, phoneNumber, experience });
  };

  const handleClick = (e) => {
    e.preventDefault();
    toast("Form Submitted!");
    setForm({
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      experience: "",
    });
  };

  return (
    <div>
      <h1 className="sitter-title">Cat Sitter Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label className="form-label">
            Name:
            <input
              type="text"
              className="form-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Email:
            <input
              type="email"
              className="form-input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Address:
            <input
              type="text"
              className="form-input"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Phone Number:
            <input
              type="text"
              className="form-input"
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Experience:
            <input
              type="text"
              className="form-input"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            />
          </label>
        </div>
      </form>
      <button className="btn btn-block" onClick={handleClick}>
        Submit Form
      </button>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default CatSitterForm;
