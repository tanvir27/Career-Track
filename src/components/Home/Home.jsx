import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import bannerImg from "../../assets/P3OLGJ1.png";
import "./Home.css";
import { Link } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import Job from "../Job/Job";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("categoryData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="banner-section common-styles mx-auto mb-5">
        <Container>
          <Row className="mx-auto align-items-center text-center pt-md-5 pt-3">
            <Col md={6} className="text-sm-center text-md-start">
              <h1 className=" ">One Step </h1>
              <h1 className="">Closer To Your </h1>
              <h1 className="text-primary">Dream Job</h1>
              <p className="fs-5">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <Link to={"/"}>
                <Button variant="primary" className="btn-lg mb-5">
                  Get Started
                </Button>
              </Link>
            </Col>
            <Col md={6} className="">
              <img
                src={bannerImg}
                alt="Banner"
                className="img-fluid position-relative align-bottom"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container my-5 text-center">
        <h1 className="fw-bold">Job Category List</h1>
        <p className="text-success">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-4 mx-auto">
          {data.map((dataList) => (
            <CategoryList dataList={dataList} key={dataList._id}></CategoryList>
          ))}
        </div>
      </div>

      <div className="container featured-job my-5">
        <div className="text-center">
          <h1 className="fw-bold">Featured Jobs</h1>
          <p className="text-success">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-2 mt-2">
          <div class="col rounded p-3">
            <div class="card">
              <div className="p-4">
                <div>
                  <img
                    className="img-fluid"
                    src="../../../public/All Images/google-1-1 1.png"
                    alt=""
                  />
                </div>
                <h3>Technical Database Engineer</h3>
                <p className="">Google LLC</p>
                <div className="d-flex gap-3">
                  <button type="button" class="btn btn-outline-primary">
                    Remote
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    Onsite
                  </button>
                </div>
                <div className="d-flex gap-5 my-3">
                  <div>
                    <span>Icon</span> {""}
                    <span>Dhaka Bangladesh</span>
                  </div>

                  <div>
                    <span>Icon</span> {""}
                    <span>Salary: 100k-150k</span>
                  </div>
                </div>
                <button type="button" class="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link to={'/jobs'}>
         
            <button type="button" class="btn btn-primary ">
              See All Jobs
            </button>
          </Link>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
