import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    group: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setValues[res.data];
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pb-5 rounded">
        <h1 className="mt-4">Update student</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label className="form-label" htmlFor="firstName">
              Firstname
            </label>
            <input
              id="firstName"
              type="text"
              name="firstname"
              className="form-control "
              placeholder="Firstname"
              required
              value={values.firstname}
              onChange={(e) =>
                setValues({ ...values, firstname: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label className="form-label" htmlFor="lastName">
              Lastname
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Lastname"
              required
              value={values.lastname}
              onChange={(e) =>
                setValues({ ...values, lastname: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label className="form-label" htmlFor="group">
              Group
            </label>
            <select
              id="group"
              className="form-select"
              name="group"
              value={values.group}
              onChange={(e) => setValues({ ...values, group: e.target.value })}
            >
              <option value="All">All</option>
              <option value="N32">React N32</option>
              <option value="N45">React N45</option>
              <option value="N50">React N50</option>
            </select>
          </div>
          <button className="btn btn-success mt-3">Update</button>
          <Link to="/" className="btn btn-primary ms-3 mt-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
