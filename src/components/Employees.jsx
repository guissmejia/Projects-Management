import React from "react";
import Employee from './Employee'
import EmployeesItems from '../data/employeesData'
import '../assets/styles/components/Employees.scss'

const Employees = () => {
  return (
    <section className="Employee__table">
      <div className="Employee__table--options">
        <div className="Add--employee">
          <button type="submit">Agregar</button>
        </div>
        <div className="Employees--options">
          <input type="checkbox" />
          <h4>Foto</h4>
          <h4>Empleado</h4>
          <h4>Salario</h4>
          <h4>Estado</h4>
          <h4>Acciones</h4>
        </div>
      </div>
      {EmployeesItems.map(({ id, imgSrc, name, lastname, jobTitle, salary, availability, status }) => {
        return (
          <Employee
            key={id}
            imgSrc={imgSrc}
            name={name}
            lastname={lastname}
            jobTitle={jobTitle}
            salary={salary}
            availability={availability}
            status={status}
          />
        );
      })}
    </section>
  );
};

export default Employees;
