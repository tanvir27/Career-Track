import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  return (
    <div className="">
      <div className="common-styles py-5 text-center">
        <h1 className="py-0 py-lg-5">Job Details</h1>
      </div>
      <div className="container mx-auto row my-5">
        <div className="content-section col-md-8">
          <div>
            <span className="fw-bold">Job Description: </span>{" "}
            <span>
              {" "}
              A UI/UX (User Interface/User Experience) designer is responsible
              for designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </span>
          </div>
          <div className="mt-3">
            <span className="fw-bold">Job Responsibility: </span>{" "}
            <span>
              {" "}
              Collaborating with cross-functional teams: UI/UX designers often
              work closely with other teams, including product management,
              engineering, and marketing, to ensure that the user interface is
              aligned with business and technical requirements. You will need to
              be able to effectively communicate your design ideas and gather
              feedback from other team members.
            </span>
          </div>
          <div className="mt-3">
            <p className="fw-bold">Educational Requirements: </p>
            <p>Bachelor degree to complete any reputational university.</p>
          </div>
          <div className="mt-3">
            <p className="fw-bold">Experience: </p>
            <p>2-3 Years in this field.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="rounded-3 p-4 details-section ">
            <div className="mb-3">
              <h5 className="fw-bold">Job Details</h5>
              <hr class="my-3"></hr>
              <div>
                <span>
                  <FontAwesomeIcon
                    className="text-info fw-bold"
                    icon={faDollarSign}
                  />
                </span>{" "}
                <span className="fw-bold">Salary: </span>{" "}
                <span>100k-150k (Per Month)</span>
              </div>
              <div className="mt-2">
                <span>
                  <FontAwesomeIcon
                    className="text-info fw-bold"
                    icon={faDollarSign}
                  />
                </span>{" "}
                <span className="fw-bold">Job Title: </span>{" "}
                <span>Product Designer</span>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold">Contact Information</h5>
              <hr class="my-3"></hr>
            </div>
            <div className="mt-2">
              <span>
                <FontAwesomeIcon
                  className="text-info fw-bold"
                  icon={faDollarSign}
                />
              </span>{" "}
              <span className="fw-bold">Phone: </span>{" "}
              <span>01750 -00 - 0000</span>
            </div>
            <div className="mt-2">
              <span>
                <FontAwesomeIcon
                  className="text-info fw-bold"
                  icon={faDollarSign}
                />
              </span>{" "}
              <span className="fw-bold">Email: </span>{" "}
              <span>info@gmail.com</span>
            </div>
            <div className="mt-2">
              <span>
                <FontAwesomeIcon
                  className="text-info fw-bold"
                  icon={faDollarSign}
                />
              </span>{" "}
              <span className="fw-bold">Address: </span>{" "}
              <span>Dhanmondi 32, Sukrabad Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="mt-4">
            <button class="btn btn-primary w-100" type="button">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
