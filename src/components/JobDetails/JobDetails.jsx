import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";


const JobDetails = () => {

  const [data, setData] = useState(null);

  const dataPass = useLoaderData();
  console.log(dataPass);

  const { jobId } = useParams();
  console.log(jobId);

  useEffect(() => {
    if (dataPass) {
      const storedData = dataPass.find((data) => data.id === parseInt(jobId));
      setData(storedData);
    }
  },[dataPass,jobId])

  if (!data)  {
    return <p>Data Not Found</p>
  }

  return (
    <div>
      {
        <div className="">
          <div className="common-styles py-5 text-center">
            <h1 className="py-0 py-lg-5">Job Details</h1>
          </div>
          <div className="container mx-auto row my-5">
            <div className="content-section col-md-8">
              <div>
                <span className="fw-bold">Job Description: </span>{" "}
                <span>{data.jobDescription}</span>
              </div>
              <div className="mt-3">
                <span className="fw-bold">Job Responsibility: </span>{" "}
                <span>{data.jobResponsibility}</span>
              </div>
              <div className="mt-3">
                <p className="fw-bold">Educational Requirements: </p>
                <p>{data.educationRequirements}</p>
              </div>
              <div className="mt-3">
                <p className="fw-bold">Experience: </p>
                <p>{data.experienceRequirements}</p>
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
                    <span>{data.salary}</span>
                  </div>
                  <div className="mt-2">
                    <span>
                      <FontAwesomeIcon
                        className="text-info fw-bold"
                        icon={faDollarSign}
                      />
                    </span>{" "}
                    <span className="fw-bold">Job Title: </span>{" "}
                    <span>{data.title}</span>
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
                  <span>{data.contactInfo.phone}</span>
                </div>
                <div className="mt-2">
                  <span>
                    <FontAwesomeIcon
                      className="text-info fw-bold"
                      icon={faDollarSign}
                    />
                  </span>{" "}
                  <span className="fw-bold">Email: </span>{" "}
                  <span>{data.contactInfo.email}</span>
                </div>
                <div className="mt-2">
                  <span>
                    <FontAwesomeIcon
                      className="text-info fw-bold"
                      icon={faDollarSign}
                    />
                  </span>{" "}
                  <span className="fw-bold">Address: </span>{" "}
                  <span>{data.contactInfo.address}</span>
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
      }
    </div>
  );
};

export default JobDetails;
