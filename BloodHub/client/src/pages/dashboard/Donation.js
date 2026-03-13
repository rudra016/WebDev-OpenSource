import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";
import { useSelector } from "react-redux";

const Donation = () => {
  //get current user
  const { user } = useSelector((state) => state.auth);

  const [data, setData] = useState([]);
  //find donor records
  const getDonors = async () => {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donor: user?._id,
        },
      });
      //   console.log(data);
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);
  return (
    <Layout>
      <h1 className="mt-5 mb-4 fw-bold text-success font-sofias">Donor Details</h1>
      <hr />

      <table className="table table-striped font-Lato">
        <thead>
          <tr className="green">
            <th scope="col">S/N</th>
            <th scope="col">BloodGroup</th>
            <th scope="col">InventoryType</th>
            <th scope="col">Quantity </th>
            <th scope="col">Email</th>
            <th scope="col">Date & Time</th>
          </tr>
        </thead>
        <tbody className="category-list">
          {data?.map((record, index) => (
            <tr key={record._id}>
              <td>{index + 1}</td>
              <td>{record.bloodGroup}</td>
              <td>{record.inventoryType}</td>
              <td>{record.quantity}(ML)</td>
              <td>{record.email}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Donation;
