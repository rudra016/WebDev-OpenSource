import React, { useState, useEffect } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import API from "../../services/API";
import { useSelector } from "react-redux";
import moment from "moment";

const OrganisationPage = () => {
  //Get Current User
  const { user } = useSelector((state) => state.auth);

  const [data, setData] = useState([]);

  //find org data
  const getOrganisations = async () => {
    try {
      //check donor
      if (user?.role === "donor") {
        const { data } = await API("/inventory/get-organisation");
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      //check hospital
      if (user?.role === "hospital") {
        const { data } = await API("/inventory/get-organisation-for-hospital");
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrganisations();
  }, [user]);

  return (
    <Layout>
      <h2 className="mt-5 mb-4 fw-bold text-primary font-sofias">Organisation Details</h2>
      <hr />

      <table className="table table-striped font-Lato">
        <thead>
          <tr className="blue">
            <th scope="col">S/N</th>
            <th scope="col">OrgName</th>
            <th scope="col">OrgEmail</th>
            <th scope="col">MobileNo. </th>
            <th scope="col">Address </th>
            <th scope="col">Date & Time</th>
          </tr>
        </thead>
        <tbody className="category-list">
          {data?.map((record, index) => (
            <tr key={record._id}>
              <td>{index + 1}</td>
              <td>{record.organisationName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrganisationPage;
