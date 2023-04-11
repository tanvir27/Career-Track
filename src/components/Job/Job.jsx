import React from "react";
import { useLoaderData } from "react-router-dom";

const Job = () => {
  const jobData = useLoaderData();
  // const jobData = dataJ.data;
  console.log(jobData);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 mt-2">
        {jobData.map((job) => (
          <div className="">
            <div class="col rounded p-3">
              <div class="card">
                <div className="p-4">
                  <div>
                    <img className="img-fluid" src={job.logo} alt="" />
                  </div>
                  <h3>Technical Database Engineer</h3>
                  <p className="">{job.title}</p>
                  <div className="d-flex gap-3">
                    <button type="button" class="btn btn-outline-primary">
                      {job.workType[0]}
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      {job.workType[1]}
                    </button>
                  </div>
                  <div className="d-flex gap-5 my-3">
                    <div>
                      <span>
                        <img src={job.icon} alt="" />
                      </span>{" "}
                      {""}
                      <span>{job.location}</span>
                    </div>

                    <div>
                      <span>
                        <img src={job.icon} alt="" />
                      </span>{" "}
                      {""}
                      <span>Salary: {job.salary}</span>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
