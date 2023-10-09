import React from "react";

const InputForm = ({ placeholder, type, name, value, handleChange }) => {
  return (
    <>
      <div className="form-group">
        <input
          type={type}
          className="form-input"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default InputForm;
