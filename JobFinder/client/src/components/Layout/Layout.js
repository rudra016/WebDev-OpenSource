import React from "react";
import "../../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div className="logo">
            <h5>Job Finder</h5>
            <hr />
            <p>Welcome : username !</p>
            <hr />
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">{children}</div>
      </div>
    </>
  );
};

export default Layout;
