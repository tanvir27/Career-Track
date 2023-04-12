import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../../utilities/fakeDb";

const AppliedJobs = () => {
  const dataJob = useLoaderData();
  const handleAddToDb = getAppliedJobs();

  const cartArray = [];
  for (const id in handleAddToDb) {
    const addedProductId = Number(id);
    const foundProduct = dataJob.find(
      (product) => product.id === addedProductId
    );
    if (foundProduct) {
      const quantity = handleAddToDb[id];
      foundProduct.quantity = quantity;
      cartArray.push(foundProduct);
    }
  }

  const [workTypeFilter, setWorkTypeFilter] = useState(null);

  return (
    <div>
      <div className=" py-5 common-styles">
        <h1 className="text-center">Applied Jobs</h1>
      </div>
      <div className="container d-flex justify-content-end my-3">
        <Dropdown>
          <Dropdown.Toggle variant="outline-primary" id="workTypeFilter">
            {workTypeFilter ? workTypeFilter : "Filter by work type"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              active={workTypeFilter === "Remote"}
              onClick={() => setWorkTypeFilter("Remote")}
            >
              Remote
            </Dropdown.Item>
            <Dropdown.Item
              active={workTypeFilter === "Onsite"}
              onClick={() => setWorkTypeFilter("Onsite")}
            >
              Onsite
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {cartArray
        .filter((product) =>
          workTypeFilter ? product.workType.includes(workTypeFilter) : true
        )
        .map((product) => (
          <div className="container my-4" key={product.id}>
            <div className="d-flex p-4 gap-5 w-full border">
              <div className="d-flex justify-content-center align-items-center common-styles px-5">
                <img className="img-fluid" src={product.logo} alt="" />
              </div>
              <div className="w-100">
                <h3>{product.title}</h3>
                <p>{product.company}</p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <button type="button" className="btn btn-outline-primary">
                      {product.workType[0]}
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      {product.workType[1]}
                    </button>
                  </div>
                  <div>
                    <Link to={`/details/${product.id}`}>
                      {" "}
                      <button type="button" class="btn btn-danger">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="d-flex gap-5 my-3">
                  <div>
                    <span>
                      <img src={product.icon} alt="" />
                    </span>{" "}
                    {""}
                    <span>{product.location}</span>
                  </div>

                  <div>
                    <span>
                      <img src={product.icon_2} alt="" />
                    </span>{" "}
                    {""}
                    <span>Salary: {product.salary}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AppliedJobs;
