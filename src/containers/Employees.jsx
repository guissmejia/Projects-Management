import React, { useState, useEffect } from 'react';
import Employee from '../components/Employee';
import AddEmployeeModal from '../components/AddEmployeeModal';
import '../assets/styles/components/Employees.scss';
import useEmployeesState from '../hooks/useEmployeesState';

const API = 'https://projects-management-api.vercel.app/api/employees';

const Employees = (props) => {

const employeesState = useEmployeesState(API);

  return (
    <section className="Employee__table">
      <div className="Employee__table--options">
        <form className="Add--employee">
          <button
            onClick={props.onOpenModal}
            className="Add--employee-button"
            type="submit"
          >
            Agregar
          </button>
          <AddEmployeeModal
            isOpen={props.modalIsOpen}
            onClose={props.onCloseModal}
            addEmployee={props.onAddEmployee}
            onHandleChange={props.onHandleChangeAdd}
          />
        </form>
        <div className="Employees--options">
          <input type="checkbox" />
          <h4>Foto</h4>
          <h4>Empleado</h4>
          <h4>Salario</h4>
          <h4>Estado</h4>
          <h4>Acciones</h4>
        </div>
      </div>
      {employeesState &&
        employeesState.map((item) => {
         return <Employee key={item._id} {...item} />;
        })}
    </section>
  );
};

export default Employees;
