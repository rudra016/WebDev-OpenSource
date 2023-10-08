import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container mt-4">
        <div className="d-flex flex-column">
          <h1>
            Welcome Admin: <i className="fw-bold text-success"> {user?.name}</i>
          </h1>
          <hr />
          <h3 className="text-warning font-Lato fw-bold mb-4 mt-3">Manage Blood Records :-</h3>
          <ul>
            <h5 className="text-primary font-sofias fw-bold">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              Managing blood records in a BloodHub requires careful organization
              and implementation of data management features. Here are some
              steps to consider when developing or managing blood records in a
              BloodHub app:
            </h5>
            <br />
            <li className="font-Lato">
              <b className="font-Audiowide">User Registration:</b> Allow users to register in the app using
              their personal information, such as name, contact details, and
              blood type. This information will be crucial for managing blood
              records.
            </li>
            <br />
            <li className="font-Lato">
              <b className="font-Audiowide">Donor Profile:</b> Create a profile for each registered donor,
              including their demographic information, medical history, blood
              type, and eligibility status (e.g., whether they can donate blood
              or not). This profile should also include their donation history,
              including the date and type of blood donated.
            </li>
            <br />
            <li className="font-Lato">
              <b className="font-Audiowide">Blood Inventory:</b> Maintain an inventory of available blood
              units in the blood bank. Each unit should have a unique
              identification number, blood type, quantity, and expiration date.
              Update the inventory whenever new units are donated or when units
              expire.
            </li>
            <br />
            <li className="font-Lato">
              <b className="font-Audiowide">Donation Tracking:</b> Implement a system to track blood
              donations. When a donor donates blood, record the date, type of
              blood donated, and any relevant test results (e.g., blood
              screening tests for infectious diseases).
            </li>
            <br />
            <li className="font-Lato">
              <b className="font-Audiowide">Search and Matching:</b> Enable a search functionality that
              allows users to search for available blood units based on blood
              type, location, and other relevant criteria. Ensure that the
              search algorithm matches the requested blood type with the
              available units accurately.
            </li>
            <br />
            <li className="font-Lato">
              <b className="font-Audiowide">Data Security:</b> Ensure that the app follows strict security
              protocols to protect donor information and comply with privacy
              regulations. Use encryption and secure authentication methods to
              prevent unauthorized access to sensitive data.
            </li>
            <br />
            <li className="font-Lato">
              <b className="font-Audiowide">Reporting and Analytics:</b> Implement reporting and analytics
              features to generate insights on blood supply, demand, and
              donation patterns. This can help optimize inventory management and
              plan donation drives more effectively.
            </li>
            <br />
            <li className="font-Lato">
              <b className="font-Audiowide">Regular Maintenance and Updates:</b> Continuously monitor and
              update the app to fix bugs, improve performance, and incorporate
              new features based on user feedback and emerging technologies.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
