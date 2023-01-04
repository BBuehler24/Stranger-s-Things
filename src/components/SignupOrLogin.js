import React from "react";
import { useSignupOrLogin } from "../hooks";

export default function SignupOrLogin() {
  const { h1, error, handleSubmit, handleChange, formFields } =
    useSignupOrLogin();

  return (
    <div>
      <h1>{h1}</h1>
      {error && (
        <div>
          <div>
            <i className="material-icons-outlined">error</i>
            <span>{error.name}</span>
          </div>
          <div>{error.message}</div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {formFields.map(({ type, name, label, value }, idx) => (
          <div key={idx}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
            />
            </div>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}