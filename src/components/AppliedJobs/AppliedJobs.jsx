import React from 'react';

import { useLoaderData } from 'react-router-dom';
import {  getAppliedJobs } from '../../utilities/fakeDb';


const AppliedJobs = () => {
  const dataJob = useLoaderData();
  console.log(dataJob);
  const handleAddToDb = getAppliedJobs();
  console.log(handleAddToDb);

 const cartArray = [];
 for (const id in handleAddToDb) {
   const addedProductId = Number(id);
   const foundProduct = dataJob.find(
     (product) => product.id === addedProductId
   );
   console.log(foundProduct);
   if (foundProduct) {
     const quantity = handleAddToDb[id];
     foundProduct.quantity = quantity;
     cartArray.push(foundProduct);
   }
 }



    return (
      <div>
        <div>
          <div className=" py-5 common-styles">
            <h1 className="text-center">Applied Jobs</h1>
          </div>
          {cartArray.map((product) => (
            <div className="container my-4" key={product.id}>
              <div className="align-content-end my-3">
                <div className="d-flex justify-content-end gap-3">
                  <button type="button" className="btn btn-outline-primary">
                    Remote
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Onsite
                  </button>
                </div>
              </div>
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
                        Remote
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Onsite
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        View Details
                      </button>
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
      </div>
    );
};

export default AppliedJobs;