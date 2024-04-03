import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const Edit = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const [post, setPost] = useState({
    name: "",
    surname: "",
    group: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/students/${id}`)
      .then((res) => {
        setPost[res.data];
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/students/${id}`, post)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Modal className="addS" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
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
                required
                onChange={(e) => setPost({ ...post, name: e.target.value })}
                value={post.name}
                name="name"
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
                onChange={(e) => setPost({ ...post, surname: e.target.value })}
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Link className="btn btn-secondary" to="/">
            Close
          </Link>
          <Link
            type="submit"
            variant="primary"
            className="btn btn-primary"
            onClick={handleUpdate}
            to="/"
          >
            Edit
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;
