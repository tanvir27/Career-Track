import React from "react";
import errorImg from "../../assets/error.png";
import { Link, useRouteError } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  // console.log(error.message, status);

  return (
    <div className="text-center mt-5">
      <img className="img-fluid" src={errorImg} alt="" />
      <h1 className="text-warning fw-bold">Hey Developer!</h1>
      <h6> An unexpected error has occurred here</h6>
      <h3 className="fw-bold text-primary">
        <i>{error?.message}</i>
      </h3>
      <h5 className="text-secondary fw-bold">
        <i>Error: {status || "Status Code Not Available"}</i>
      </h5>
      <h5></h5>

      <Link to={"/"}>
        {" "}
        <Button variant="outline-info fw-bold text-dark">
          Back To HomePage
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
