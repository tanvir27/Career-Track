import React from "react";
import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="common-styles">
      <Navbar open={open} expand="lg">
        <Container>
          <Link to="/" className="navbar-brand fw-bold fs-3">
            Work Avenue
          </Link>
          <Navbar.Toggle onClick={() => setOpen(!open)} />
          <Navbar.Collapse>
            <Nav className="mx-auto fs-5 gap-4">
              <Link to="/" className="nav-link">
                Statistics
              </Link>
              <Link to="/" className="nav-link">
                Applied Jobs
              </Link>
              <Link to="/" className="nav-link">
                Blog
              </Link>
            </Nav>
            <Nav>
              <Button variant="primary">Start Applying</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
