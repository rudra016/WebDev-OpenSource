import React from "react";
import "../styles/homepage.css"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="/assets/videos/home.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
          <div className="card mt-2 mb-4 rounded shadow-lg">
            <img src="/assets/images/jobHome.png" />
            <div className="card-body">
              <h4 className="card-title fw-bold">
                The ultimate destination for finding the perfect job!
              </h4>
              <hr />
              <p className="card-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobFinder is here to support
                you every step of the way. Get ready to unlock new possibilities
                and embark on a fulfilling career path. Start exploring now!
              </p>
              <br />
              <div>
                <p>
                  Have not an account?
                  <br />
                  <Link to="/register" className="loginhere-link">
                    Register here!
                  </Link>
                  <Link to="/login" className="button">
                    Login!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
