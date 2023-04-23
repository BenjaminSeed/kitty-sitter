import React, { useState } from "react";

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
    alert("form submitted");
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
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="number"
            value={form.phoneNumber}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          />
        </label>
        <label>
          Experience:
          <input
            type="text"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
          />
        </label>
      </form>
      <button onClick={handleClick}>Submit Form</button>
    </div>
  );
};

export default CatSitterForm;
