import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
const Add = () => {
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
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Modal className="addS" show={show} onHide={handleClose}>
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
                  <option value="React N32">React N32</option>
                  <option value="React N45">React N45</option>
                  <option value="React N50">React N50</option>
                  <option value="React N20">React N20</option>
                </select>
              </div>
              <Modal.Footer>
                <Link to="/">
                  <button className="btn btn-secondary">Close</button>
                </Link>
                <button
                  variant="secondary"
                  className="btn btn-secondary"
                  onClick={addNew}
                >
                  <Link className="text-white text-decoration-none" to="/">
                    Add
                  </Link>
                </button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Add;
