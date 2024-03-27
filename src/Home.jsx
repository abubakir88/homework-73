import axios from "axios";
// import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // DELETE start //////////////////////////////////
  const [malumot, setMalumot] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/users");
    setMalumot(response.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    fetchItems();
  };
  // DELETE finish //////////////////////////////////
  // SEARCH start //////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  // SEARCH finish //////////////////////////////////
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light ">
      <h1 className="m-4">List of Students</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <input
            type="search"
            className="form-control w-25 me-2"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Group</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          {data.length > 0 && (
            <tbody>
              {data
                .filter(
                  (data) =>
                    data.firstname
                      ?.toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    data.lastname
                      ?.toLowerCase()
                      .includes(searchTerm.toLowerCase())
                )

                .map((data, i) => (
                  <>
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{data.firstname}</td>
                      <td>{data.lastname}</td>
                      <td>{data.group}</td>
                      <td className="text-end">
                        <Link
                          to={`/read/${data.id}`}
                          className="btn btn-sm btn-secondary me-2"
                        >
                          Read
                        </Link>
                        <Link
                          to={`/update/${data.id}`}
                          className="btn btn-sm btn-primary me-2"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            confirm(
                              "Are you sure you want to? , OKni BOSGANDAN SO'NG REFRESH BERSANGIZ ISHLAYDI"
                            )
                              ? deleteItem(data.id)
                              : false
                          }
                        >
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          )}

          {/* {data.length > 0 && (
            <tbody>
              {data
                .filter((panel) =>
                  panel.brand.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((d, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{d.firstname}</td>
                    <td>{d.lastname}</td>
                    <td>{d.group}</td>
                    <td>
                      <Link
                        to={`/read/${d.id}`}
                        className="btn btn-sm btn-secondary me-2"
                      >
                        Read
                      </Link>
                      <Link
                        to={`/update/${d.id}`}
                        className="btn btn-sm btn-primary me-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          confirm(
                            "Are you sure you want to? , OKni BOSGANDAN SO'NG REFRESH BERSANGIZ ISHLAYDI"
                          )
                            ? deleteItem(d.id)
                            : false
                        }
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                ))}
            </tbody>
          )} */}
        </table>
      </div>
    </div>
  );
}

export default Home;
