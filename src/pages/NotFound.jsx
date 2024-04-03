import React from "react";
// import notFound from "../assets/404.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-5 pt-5 gap-3 text-center d-flex justify-content-center flex-column align-items-center ">
      <h1 className="mt-5 pt-5">OOPS</h1>
      <h5>Page is not found</h5>
      <Link to="/" className="btn btn-primary">
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;
