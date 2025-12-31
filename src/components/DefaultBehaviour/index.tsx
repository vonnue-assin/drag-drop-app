import React, { useState } from "react";
import { toast } from "react-toastify";

import "./styles.css";

const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);

    toast.success("Form submitted successfully!");

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="flex">
        <label className="label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </label>
      </div>
      <div className="flex">
        <label className="label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </label>
      </div>
      <div className="button">
        <button type="submit" className="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormExample;
