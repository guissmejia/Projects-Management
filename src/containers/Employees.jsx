import React, { useState } from 'react';
import Employee from '../components/Employee';
import AddEmployeeModal from '../components/AddEmployeeModal';
import '../assets/styles/containers/Employees.scss';
import useEmployeesState from '../hooks/useEmployeesState';
import axios from 'axios';

const API = 'https://projects-management-api.vercel.app/api/employees';

const Employees = () => {
  const employeesState = useEmployeesState(API);

  const [modal, setModal] = useState(false);

  const [form, setValues] = useState({
    name: '',
    lastname: '',
    jobTitle: '',
    salary: '',
    availavility: '',
    status: '',
  });

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateEmployee = async (e) => {
    e.preventDefault();
    await axios.post(API, {
      name: form.name,
      lastname: form.lastname,
      jobTitle: form.jobTitle,
      salary: form.salary,
      availavility: form.availavility,
      status: form.status,
    });
    setModal(false);
  };

  return (
    <section className="Employee__table">
      <div className="Employee__table--options">
        <form className="Add--employee">
          <button
            onClick={handleOpenModal}
            className="Add--employee-button"
            type="submit"
          >
            Agregar
          </button>
          <AddEmployeeModal
            isOpen={modal}
            onClose={handleCloseModal}
            addEmployee={handleCreateEmployee}
            onHandleChange={handleChange}
          />
        </form>
        <div className="Employees--options">
          <h4>Foto</h4>
          <h4>Empleado</h4>
          <h4>Salario</h4>
          <h4>Estado</h4>
          <h4>Acciones</h4>
        </div>
      </div>
      {employeesState.length > 0
        ? employeesState.map((item) => {
            return <Employee key={item._id} {...item} />;
          })
        : 'No users created'}
    </section>
  );
};

export default Employees;
