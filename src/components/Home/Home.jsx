import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import bannerImg from "../../../public/assets/All Images/P3OLGJ1 copy 1.png";
 import bannerImg from "../../../public/All Images/P3OLGJ1 copy 1.png";
import "./Home.css";
import { Link } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
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
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-4 mx-auto">
          {data.map((dataList) => (
            <CategoryList dataList={dataList} key={dataList._id}></CategoryList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
