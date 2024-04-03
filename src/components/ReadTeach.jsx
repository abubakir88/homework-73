import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Read = () => {
  const [teachers, setTeachers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/teachers/` + id);
        const Data = await res.json();
        setTeachers(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div className="ReadBig">
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-light shadow px-5 pt-5 pb-5 rounder">
          <h1>Name: {teachers.name}</h1>
          <h1>Surname: {teachers.surname}</h1>
          <h1>Group: {teachers.level}</h1>
          <h1>Group: {teachers.group}</h1>
          <Link to="/Teachers" className=" btn btn-success mt-3 ">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
