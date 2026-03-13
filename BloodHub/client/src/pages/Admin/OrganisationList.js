import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
import Swal from "sweetalert2";

const OrganisationList = () => {
  const [data, setData] = useState([]);

  const getOrganisations = async () => {
    const { data } = await API.get("/admin/organisation-list");

    if (data?.success) {
      setData(data?.organisationList);
    }
  };

  useEffect(() => {
    getOrganisations();
  }, []);

  ///******* DELETE DONOR RECORD ******/
  const handleDelete = (id) => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success mx-2",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await API.delete(`/admin/delete-organisation/${id}`);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="mt-5 mb-4 fw-bold text-primary font-sofias">
        Organisation - List
      </h2>
      <hr />

      <table className="table table-striped font-Lato">
        <thead>
          <tr className="blue">
            <th scope="col">S/N</th>
            <th scope="col">OrgName</th>
            <th scope="col">OrgEmail</th>
            <th scope="col">MobileNo. </th>
            <th scope="col">Address </th>
            <th scope="col">Action </th>
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
              <td>
                <button
                  className="btn btn-danger py-2"
                  onClick={() => handleDelete(record._id)}
                >
                  <i className="fa-solid fa-trash"></i>Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrganisationList;
