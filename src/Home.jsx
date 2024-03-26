import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light ">
      <h1>List of Students</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Group</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.firstname}</td>
                <td>{d.lastname}</td>
                <td>{d.group}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
