import React from "react";
import editIcon from "../assets/static/edit.png";
import deleteIcon from "../assets/static/delete.png";
import '../assets/styles/components/Employee.scss';

const Employee = ({ imgSrc, name, lastname, jobTitle, salary, availability, status }) => {
  return (
    <div className="List__employees">
      <input type="checkbox" />
      <img
        className="List__employees--picture"
        src={imgSrc}
        alt={name}
      />
      <div className="List__employees--names">
        <h3>{name} {lastname}</h3>
        <p>{jobTitle}</p>
      </div>
      <div className="List__employees--time">
        <h3>{salary} USD</h3>
        <p>{availability}</p>
      </div>
      <p>{status}</p>
      <div className="List__employess--actions">
        <img className="List__employees--icon" src={editIcon} alt="Edit User" />
        <img
          className="List__employees--icon"
          src={deleteIcon}
          alt="Delete User"
        />
      </div>
    </div>
  );
};

export default Employee;