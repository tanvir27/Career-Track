import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bannerImg from "../../assets/banner.png";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
  const [data, setData] = useState([]);
  const [jobData, setJobData] = useState([]);

  // for category data
  useEffect(() => {
    fetch("categoryData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // for job data
  useEffect(() => {
    fetch("jobData.json")
      .then((res) => res.json())
      .then((data) => setJobData(data));
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

      <div className="container text-center my-5">
        <h1 className="fw-bold r">Job Category List</h1>
        <p className="text-success  ">
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
          {jobData.slice(0, 4).map((jData) => (
            <div className="">
              <div class="col rounded p-3">
                <div class="card h-100">
                  <div className="p-4">
                    <div className="pb-3">
                      <img className="img-fluid" src={jData.logo} alt="" />
                    </div>
                    <h3>{jData.title}</h3>
                    <h6 className="">{jData.company}</h6>
                    <div className="d-flex gap-3">
                      <button type="button" class="btn btn-outline-primary">
                        {jData.workType[0]}
                      </button>
                      <button type="button" class="btn btn-outline-secondary">
                        {jData.workType[1]}
                      </button>
                    </div>
                    <div className="d-flex gap-5 my-3">
                      <div>
                        <span>
                          <img src={jData.icon} alt="" />
                        </span>{" "}
                        {""}
                        <span>{jData.location}</span>
                      </div>

                      <div>
                        <span>
                          <img src={jData.icon_2} alt="" />
                        </span>{" "}
                        {""}
                        <span className="">Salary: {jData.salary}</span>
                      </div>
                    </div>
                    <Link to={`/details/${jData.id}`}>
                      {" "}
                      <button type="button" class="btn btn-primary">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to={"/jobs"}>
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
