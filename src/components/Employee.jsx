import React from "react";
import PropTypes from 'prop-types'
// import EditEmployeeModal from './EditEmployeeModal';
// import DeleteEmployeeModal from './DeleteEmployeeModal';
import '../assets/styles/components/Employee.scss';
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";


const Employee = ({ imgSrc, name, lastname, jobTitle, salary, availability, status }, props) => {
  
  return (
    <div className="List__employees">
      <input type="checkbox" />
      <img className="List__employees--picture" src={imgSrc} alt={name} />
      <div className="List__employees--names">
        <h3>
          {name} {lastname}
        </h3>
        <p>{jobTitle}</p>
      </div>
      <div className="List__employees--time">
        <h3>{salary} USD</h3>
        <p>{availability}</p>
      </div>
      <p>{status}</p>
      <div className="List__employees--actions">
        <button
          className="List__employees--edit"
          type="submit"
          onClick={props.onOpenModal}
        >
          <MdModeEdit/>
        </button>
        <button
          className="List__employees--delete"
          type="submit"
          onClick={props.onOpenModal}
          >
          <MdDelete/>
        </button>
      </div>
    </div>
  );
};

Employee.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  lastname: PropTypes.string,
  jobTitle: PropTypes.string,
  salary: PropTypes.string,
  availability: PropTypes.string,
  status: PropTypes.string
}

export default Employee;
