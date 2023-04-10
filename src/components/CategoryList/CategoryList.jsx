import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import './CategoryList.css'
const CategoryList = ({ dataList }) => {
  return (
    <div>
      <div className="category-list my-4">
        <div className="col  rounded-3 common-styles p-4">
          <img className=" rounded-1 " src={dataList.icon} alt="" />
          <div>
            <h4 className=" mt-3 ">{dataList.title}</h4>
            <p className="">{dataList.availability}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
