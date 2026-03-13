import React from "react";
const Spinner = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center min-vh-100 mt-5">
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default Spinner;
