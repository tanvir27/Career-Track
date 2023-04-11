import React from 'react';
import error from "../../assets/error.png";
const AppliedJobs = () => {
    return (
      <div>
        <div className=" py-5 common-styles">
          <h1 className="text-center">Applied Jobs</h1>
        </div>
        <div className="container my-4 ">
          <div className="align-content-end my-3">
            <div className="d-flex justify-content-end gap-3">
              <button type="button" class="btn btn-outline-primary">
                Remote
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Onsite
              </button>
            </div>
          </div>
          <div className="d-flex p-4 gap-5 w-full border ">
            <div className="common-styles p-5">
              <img className="img-fluid " src={error} alt="" />
            </div>
            <div className="w-100">
              <h3>Technical Database Engineer</h3>
              <p className="">Google LLC</p>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <button type="button" class="btn btn-outline-primary">
                    Remote
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    Onsite
                  </button>
                </div>
                <div>
                  <button type="button" class="btn btn-outline-secondary">
                    View Details
                  </button>
                </div>
              </div>
              <div className="d-flex gap-5 my-3">
                <div>
                  <span>
                    <img src="" alt="" />
                  </span>{" "}
                  {""}
                  <span>location</span>
                </div>

                <div>
                  <span>
                    <img src="" alt="" />
                  </span>{" "}
                  {""}
                  <span>Salary: job.salary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default AppliedJobs;