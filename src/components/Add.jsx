import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
const add = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [post, setPost] = useState([
    {
      id: "",
      firstname: "",
      lastname: "",
      group: "",
    },
  ]);
  const addNew = async () => {
    try {
      const response = await axios.post("http://localhost:3000/students", post);
      // fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="form-control mt-2"
                  type="name"
                  id="name"
                  placeholder="Name"
                  onChange={(e) => setPost({ ...post, name: e.target.value })}
                  value={post.name}
                  name="name"
                  required
                />
              </div>
              <div className="mt-3">
                <label htmlFor="surname">Surname</label>
                <input
                  className="form-control mt-2"
                  type="Surname"
                  id="surname"
                  placeholder="Surname"
                  required
                  onChange={(e) =>
                    setPost({ ...post, surname: e.target.value })
                  }
                  value={post.surname}
                  name="surname"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="group">Group</label>
                <select
                  className="form-select groups-select mt-2"
                  onChange={(e) => setPost({ ...post, group: e.target.value })}
                  value={post.group}
                  name="group"
                >
                  <option value="All">All</option>
                  <option value="React N32">React N32</option>
                  <option value="React N45">React N45</option>
                  <option value="React N50">React N50</option>
                </select>
              </div>
              <Modal.Footer>
                <Link to="/">
                  <button className="btn btn-secondary">Close</button>
                </Link>
                <Link
                  className="btn btn-success"
                  onClick={addNew}
                  to="/students"
                >
                  Add
                </Link>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default add;
