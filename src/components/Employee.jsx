import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import EditEmployeeModal from './EditEmployeeModal';
import DeleteEmployeeModal from './DeleteEmployeeModal';
import '../assets/styles/components/Employee.scss';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';

const Employee = ({
  _id,
  name,
  lastname,
  jobTitle,
  salary,
  availavility,
  status,
}) => {

  const [IsOpenModalEdit, setOpenModalEdit] = useState(false,{
    id: '',
    name: '',
    lastname: '',
    jobTitle: '',
    salary: '',
    availavility: '',
    status: '',
  });

  const [IsOpenModalDelete, setOpenModalDelete] = useState(false);

  const onEditEmployee = () => {
    setOpenModalEdit(true);
  };

  const onCloseModalEdit = () => {
    setOpenModalEdit(false);
  };

  const onUpdateEmployee = async (e, id) => {
    e.preventDefault();
  }

  const onDeleteEmployee = () => {
    setOpenModalDelete(true);
  };
  
  const onCloseModalDelete = () => {
    setOpenModalDelete(false);
  };
  
  const onHandleDeleteEmployee = async (id) => {
    await axios.delete(`https://projects-management-api.vercel.app/api/employees/${id}`)
    setOpenModalDelete(false);
  }

  return (
    <div className="List__employees">
      <img
        className="List__employees--picture"
        src="https://source.unsplash.com/category/people/"
        alt={name}
      />
      <div className="List__employees--names">
        <h3>
          {name} {lastname}
        </h3>
        <p>{jobTitle}</p>
      </div>
      <div className="List__employees--time">
        <h3>{salary} USD</h3>
        <p>{availavility}</p>
      </div>
      <p>{status}</p>
      <div className="List__employees--actions">
        <button
          className="List__employees--edit"
          type="submit"
          onClick={onEditEmployee}
        >
          <MdModeEdit />
        </button>
        <EditEmployeeModal
          isOpen={IsOpenModalEdit}
          onClose={onCloseModalEdit}
          updateEmployee={() => onUpdateEmployee(_id)}
        />
        <button
          className="List__employees--delete"
          type="submit"
          onClick={onDeleteEmployee}
        >
          <MdDelete />
        </button>
        <DeleteEmployeeModal
          isOpen={IsOpenModalDelete}
          onClose={onCloseModalDelete}
          deleteEmployee={() => onHandleDeleteEmployee(_id)}
        />
      </div>
    </div>
  );
};

Employee.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  jobTitle: PropTypes.string,
  salary: PropTypes.string,
  availability: PropTypes.string,
  status: PropTypes.string,
};

export default Employee;
