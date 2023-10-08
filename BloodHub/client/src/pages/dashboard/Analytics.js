import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";

const Analytics = () => {
  const [inventoryData, setInventoryData] = useState([]); //RECENT

  //******* SHOW BLOOD RECORDS (IN & OUT & CALCULATE) *********/
  const [data, setData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#22A299",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  //Get Blood Group Data
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //LifeCycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  //******* SHOW RECENT(LAST) 3 BLOOD RECORDS *********/
  const getRecentBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //LifeCycle method
  useEffect(() => {
    getRecentBloodRecords();
  }, []);

  return (
    <>
      <Header />

      <div className="row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8 mt-5 d-flex flex-row flex-wrap">
          {data?.map((record, i) => (
            <div
              className="card m-2 p-1"
              key={i}
              style={{ width: "19rem", backgroundColor: `${colors[i]}` }}
            >
              <div className="card-body">
                <h1 className="card-title font-playfair bg-light text-dark text-center mb-3 fw-bold">
                  {record.bloodGroup}
                </h1>
                <p className="card-text text-light">
                  Total In : <b>{record.totalIn}</b> (ML)
                </p>
                <p className="card-text text-light">
                  Total Out : <b>{record.totalOut}</b> (ML)
                </p>
              </div>
              <div className="card-footer text-light bg-dark text-center">
                Total Available : <b>{record.availableBlood}</b> (ML)
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-2"></div>
      </div>
      
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 mt-3">
            <h2 className="fw-bold text-primary font-sofias mt-3">Show Recent Blood Records</h2>
            <hr/>
          <div className="container mt-3">
            <table className="table table-striped font-Lato">
              <thead>
                <tr className="red">
                  <th scope="col">S/N</th>
                  <th scope="col">BloodGroup</th>
                  <th scope="col">InventoryType</th>
                  <th scope="col">Quantity </th>
                  <th scope="col">Email</th>
                  <th scope="col">Date & Time</th>
                </tr>
              </thead>
              <tbody className="category-list">
                {inventoryData?.map((record, index) => (
                  <tr key={record._id}>
                    <td>{index + 1}</td>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity}(ML)</td>
                    <td>{record.email}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default Analytics;
