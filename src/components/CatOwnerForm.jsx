import React, { useState } from "react";
import "../styles/CatOwnerForm.css";

const CatOwnerForm = () => {
  const [ownerForm, setOwnerForm] = useState({
    ownerName: "",
    catName: "",
    address: "",
    phoneNumber: "",
    catAge: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ownerName, catName, address, phoneNumber, catAge });
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert("form submitted");
    setOwnerForm({
      ownerName: "",
      catName: "",
      address: "",
      phoneNumber: "",
      catAge: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label className="form-label">
            Owner Name
            <input
              type="text"
              className="form-input"
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
              value={ownerForm.phoneNumber}
              onChange={(e) =>
                setOwnerForm({ ...ownerForm, phoneNumber: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-label">
            Cat Age
            <input
              type="text"
              className="form-input"
              value={ownerForm.catAge}
              onChange={(e) =>
                setOwnerForm({ ...ownerForm, catAge: e.target.value })
              }
            />
          </label>
        </div>
      </form>
      <button className="btn btn-block" onClick={handleClick}>
        Submit Form
      </button>
    </div>
  );
};

export default CatOwnerForm;
