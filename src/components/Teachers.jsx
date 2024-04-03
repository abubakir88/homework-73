import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReadTeach from "../components/ReadTeach";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const Teachers = ({ user }) => {
  const [teachers, setTeachers] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch("http://localhost:3000/teachers");
        const Data = await res.json();
        setTeachers(Data);
      } catch (error) {
        // console.log(error.message);
      }
    };
    fetchTeachers();
  }, [filter]);

  /////
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  ///

  ////// MODAL /////
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ////

  /////////// DELETE ////////////////////

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/teachers");
    setTeachers(response.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/teachers/${id}`);
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
            to="/Add"
            className="btn btn-success w-auto "
            onClick={handleShow}
          >
            Add +
          </Link>
        </div>
        {teachers.length > 0 && (
          <div className="mt-5">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fistname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Level</th>
                  <th scope="col">Group</th>
                  <th className="text-end mt-4">Actions</th>
                </tr>
              </thead>
              {teachers.length > 0 && (
                <tbody>
                  {teachers
                    .filter(
                      (teachers) =>
                        teachers.fistname
                          ?.toLowerCase()
                          .includes(search.toLowerCase()) ||
                        teachers.lastname
                          ?.toLowerCase()
                          .includes(search.toLowerCase())
                    )

                    .map((teachers, i) => (
                      <>
                        <tr>
                          <th scope="row">{i + 1}</th>
                          <td>{teachers.firstname}</td>
                          <td>{teachers.lastname}</td>
                          <td>{teachers.level}</td>
                          <td>{teachers.group}</td>
                          <td className="text-end">
                            <Link
                              to={`/Read/${teachers.id}`}
                              className="btn btn-info me-2"
                            >
                              Read
                            </Link>
                            <Link
                              id="b"
                              className="btn btn-warning me-2 "
                              to={`/Edit/${teachers.id}`}
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() =>
                                confirm(
                                  "Are you sure you want to delete this student?"
                                )
                                  ? deleteItem(teachers.id)
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

export default Teachers;
