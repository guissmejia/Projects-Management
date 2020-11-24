import React from 'react';
import Modal from './Modal';

const AddEmployeeModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h3>Agregar Empleado</h3>
        <form onSubmit={props.addEmployee} className="Modal__content">
          <label>
            Nombres
            <input type="text" name="name" onChange={props.onHandleChange} required/>
          </label>
          <label>
            Apellidos
            <input
              type="text"
              name="lastname"
              onChange={props.onHandleChange}
            />
          </label>
          <label>
            Cargo
            <input
              type="text"
              name="jobTitle" 
              onChange={props.onHandleChange} required
            />
          </label>
          <label>
            {' '}
            Salario
            <input type="text" name="salary" onChange={props.onHandleChange} required/>
          </label>
          <label>
            {' '}
            Disponibilidad
            <select name="availavility" onChange={props.onHandleChange} required>
              <option value="">Seleccionar</option>
              <option value="Full Time">Full Time</option>
              <option value="Half Time">Half Time</option>
            </select>
          </label>
          <label>
            {' '}
            Estado
            <select name="status" onChange={props.onHandleChange} required>
              <option value="">Seleccionar</option>
              <option value="Active">Activo</option>
              <option value="Inactive">Inactivo</option>
            </select>
          </label>
          <button className="Modal__button--save" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
