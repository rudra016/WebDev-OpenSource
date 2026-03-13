import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { toast } from "react-toastify";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? ( <Spinner /> ) : (
        <div className="container-fuild">
          <div className="row g-0">
            <div className="col-md-8 form-banner">
              <img src="./assets/images/register.jpg" />
            </div>
            <div className="col-md-4 shadow-sm form-container">
              <Form
                formTitle={"Register Page"}
                submitBtn={"Register"}
                formType={"register"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
