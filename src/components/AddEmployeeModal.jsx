import React from 'react';
import Modal from './Modal';

const AddEmployeeModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h3>Agregar Empleado</h3>
        <form onSubmit={props.addEmployee} className="Modal__content">
          <input
            type="text"
            name="name"
            onChange={props.onHandleChange}
            placeholder="Nombre:"
          />
          <input
            type="text"
            name="lastname"
            onChange={props.onHandleChange}
            placeholder="Apellido:"
          />
          <input
            type="text"
            name="jobTitle"
            onChange={props.onHandleChange}
            placeholder="Cargo:"
          />
          <input
            type="number"
            name="salary"
            onChange={props.onHandleChange}
            placeholder="Salario:"
          />
          <input
            type="text"
            name="availavility"
            onChange={props.onHandleChange}
            placeholder="Disponibilidad: Ej: Full Time, Half Time"
          />
          <input
            type="text"
            name="status"
            onChange={props.onHandleChange}
            placeholder="Estado: Ej: Activo, Inactivo"
          />
          <input
            type="text"
            name="project"
            onChange={props.onHandleChange}
            placeholder="Proyecto:"
          />
          <button className="Modal__button--save" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
