import React, { useState } from "react";
import "../styles/CatOwnerForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CatOwnerForm = () => {
  const [ownerForm, setOwnerForm] = useState({
    ownerName: "",
    catName: "",
    address: "",
    phoneNumber: "",
    catAge: "",
    catRequirements: "",
    catImage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ownerForm);
  };

  const handleClick = (e) => {
    e.preventDefault();
    toast("Form Submitted!");
    setOwnerForm({
      ownerName: "",
      catName: "",
      address: "",
      phoneNumber: "",
      catAge: "",
      catRequirements: "",
      catImage: "",
    });
  };

  return (
    <div>
      <h1 className="owner-title">Cat Owner Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label className="form-label">
            Owner Name
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Mary Smith"
              value={ownerForm.ownerName}
              onChange={(e) =>
                setOwnerForm({ ...ownerForm, ownerName: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Cat Name
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Biscuit"
              value={ownerForm.catName}
              onChange={(e) =>
                setOwnerForm({ ...ownerForm, catName: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Address
            <input
              type="text"
              className="form-input"
              placeholder="e.g. 123 Smith Street, Manchester, M1 1AB"
              value={ownerForm.address}
              onChange={(e) =>
                setOwnerForm({ ...ownerForm, address: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Phone Number
            <input
              type="text"
              className="form-input"
              placeholder="e.g. 02778777777"
              value={ownerForm.phoneNumber}
              onChange={(e) =>
                setOwnerForm({ ...ownerForm, phoneNumber: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Cat Age (Years)
            <input
              type="text"
              className="form-input"
              placeholder="e.g. 3"
              value={ownerForm.catAge}
              onChange={(e) =>
                setOwnerForm({ ...ownerForm, catAge: e.target.value })
              }
            />
          </label>
          <div className="form-row">
            <label className="form-label">
              Special Requirements
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Dry Food Only"
                value={ownerForm.catRequirements}
                onChange={(e) =>
                  setOwnerForm({
                    ...ownerForm,
                    catRequirements: e.target.value,
                  })
                }
              />
            </label>
          </div>
          <div className="form-row">
            <label className="form-label">
              Cat Image
              <input
                type="file"
                className="form-input"
                placeholder="e.g. Upload image of Cat"
                value={ownerForm.catImage}
                onChange={(e) =>
                  setOwnerForm({
                    ...ownerForm,
                    catImage: e.target.value,
                  })
                }
              />
            </label>
          </div>
        </div>
      </form>
      <button className="btn btn-block" onClick={handleClick}>
        Submit Form
      </button>
      <ToastContainer position="top-center" theme="dark" className="toast" />
    </div>
  );
};

export default CatOwnerForm;
