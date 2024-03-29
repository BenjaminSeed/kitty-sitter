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
    profile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
      rate: "",
      availability: "",
      bio: "",
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
              placeholder="e.g. Mary Smith"
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
              placeholder="e.g. mary.smith@email.com"
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
              placeholder="e.g. 123 Smith Street, Manchester, M1 1AB"
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
              placeholder="e.g. 02778777777"
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Experience (Years):
            <input
              type="number"
              className="form-input"
              placeholder="e.g. 3 "
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Rate per hour:
            <input
              type="text"
              className="form-input"
              placeholder="e.g. £15 "
              value={form.rate}
              onChange={(e) => setForm({ ...form, rate: e.target.value })}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Availability:
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Monday to Friday, 9am to 5pm "
              value={form.availability}
              onChange={(e) =>
                setForm({ ...form, availability: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Profile Picture:
            <input
              type="file"
              className="form-input"
              value={form.profile}
              onChange={(e) => setForm({ ...form, profile: e.target.value })}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            About Me:
            <textarea
              type="text"
              className="form-inputBio"
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          </label>
        </div>
      </form>
      <button className="btn btn-block" onClick={handleClick}>
        Submit Form
      </button>
      <ToastContainer position="top-center" theme="dark" className="toast" />
    </div>
  );
};

export default CatSitterForm;
