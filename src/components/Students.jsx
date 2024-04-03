import React, { useState, useEffect } from "react";
// import Read from "../components/Read";
import axios from "axios";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const Students = ({ user }) => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:3000/students");
        const Data = await res.json();
        setStudents(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchStudents();
  }, [filter]);

  /////
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  ///

  ////// MODAL /////
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  ////

  /////////// DELETE ////////////////////

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/students");
    setStudents(response.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/students/${id}`);
    fetchItems();
  };

  //////////////////////////

  //////////////////////////  Search /////////////////////////
  const [search, setSearch] = useState("");
  ////////////////////////////////

  return (
    <div className="StudentBig">
      <div className="container">
        <div className="d-flex gap-2 justify-content-end text-end pt-3">
          <input
            className="form-control w-25"
            type="search"
            placeholder="Search ..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="form-select w-auto">
            <option value="All">All</option>
            <option value="React N32">React N32</option>
            <option value="React N45">React N45</option>
            <option value="React N50">React N50</option>
          </select>
          <Link
            to="/add"
            className="btn btn-success w-auto "
            onClick={handleShow}
          >
            Add +
          </Link>
        </div>
        {students.length > 0 && (
          <div className="mt-5">
            <table className="table table-hover table-striped ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Group</th>
                  <th className="text-end mt-4">Actions</th>
                </tr>
              </thead>
              {students.length > 0 && (
                <tbody>
                  {students
                    .filter(
                      (students) =>
                        students.firstname
                          ?.toLowerCase()
                          .includes(search.toLowerCase()) ||
                        students.lastname
                          ?.toLowerCase()
                          .includes(search.toLowerCase())
                    )

                    .map((students, i) => (
                      <>
                        <tr>
                          <th scope="row">{i + 1}</th>
                          <td>{students.firstname}</td>
                          <td>{students.lastname}</td>
                          <td>{students.group}</td>
                          <td className="text-end">
                            <Link
                              to={`/Read/${students.id}`}
                              className="btn btn-info me-2"
                            >
                              Read
                            </Link>
                            <Link
                              id="b"
                              className="btn btn-warning me-2 "
                              to={`/Edit/${students.id}`}
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() =>
                                confirm(
                                  "Are you sure you want to delete this student?"
                                )
                                  ? deleteItem(students.id)
                                  : false
                              }
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              )}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
