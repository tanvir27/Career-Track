import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bannerImg from "../../assets/banner.png";
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
      <div className="common-styles mx-auto mb-5">
        <Container>
          <Row className="mx-auto align-items-center text-center py-md-5 py-3">
            <Col md={6} className="text-sm-center text-md-start">
              <h1 className="fw-bold">One Step Closer To Your </h1>
              <h1 className="text-info fw-bold">Dream Job</h1>
              <p className="lead">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <Link to={"/"}>
                <Button variant="primary" className="btn-lg">
                  Get Started
                </Button>
              </Link>
            </Col>
            <Col md={6} className="">
              <img src={bannerImg} alt="Banner" className="img-fluid" />
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
