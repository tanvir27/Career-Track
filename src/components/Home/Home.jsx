import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import bannerImg from "../../assets/banner.png";
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
      <div className="common-styles mx-auto">
        <Container>
          <Row className="mx-auto align-items-center ">
            <Col md={6} className="">
              <h1 className='fw-bold'>One Step Closer To Your </h1>
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
    );
};

export default Home;