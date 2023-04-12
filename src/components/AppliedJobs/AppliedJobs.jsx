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
        <h1 className="text-center fw-bold text-success">Applied Jobs</h1>
      </div>
      <div className="container d-flex justify-content-end my-3">
        <Dropdown>
          <Dropdown.Toggle variant="outline-primary" id="workTypeFilter">
            {workTypeFilter ? workTypeFilter : " Work Type"}
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
            <div className="row border p-3">
              <div className="col-12 col-md-3 d-flex justify-content-center rounded-3 align-items-center common-styles p-4">
                <img className="img-fluid" src={product.logo} alt="" />
              </div>
              <div className="col-12 col-md-9 p-4">
                <h3>{product.title}</h3>
                <h6 className="">{product.company}</h6>
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="d-flex flex-wrap gap-3">
                    <button type="button" className="btn btn-outline-primary">
                      {product.workType[0]}
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      {product.workType[1]}
                    </button>
                  </div>
                  <div className="mt-3 mt-md-0">
                    <Link to={`/details/${product.id}`}>
                      <button type="button" className="btn btn-primary">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-5 my-3">
                  <div className="d-flex gap-2">
                    <span>
                      <img src={product.icon} alt="" />
                    </span>
                    <span className="fw-bold text-success">
                      {product.location}
                    </span>
                  </div>

                  <div className="d-flex gap-2">
                    <span>
                      <img src={product.icon_2} alt="" />
                    </span>
                    <span className="fw-bold text-success">
                      Salary: {product.salary}
                    </span>
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
