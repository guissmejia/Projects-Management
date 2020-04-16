import React from 'react'
import Modal from './Modal'

const EditEmployeeModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h3>Actualizar Empleado</h3>
        <div className="Modal__content">
          <input type="text" placeholder="Nombre:" />
          <input type="text" placeholder="Apellido:" />
          <input type="text" placeholder="Cargo:" />
          <input type="number" placeholder="Salario" />
          <label>
            Disponibilidad
            <select name="employee-availability">
              <option value="activo">Full Time</option>
              <option value="inactivo">Half Time</option>
            </select>
          </label>
          <label>
            Estado
            <select name="employee-status">
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </label>
        </div>
        <button className="Modal__button--save" type="submit">
          Guardar
        </button>
      </div>
    </Modal>
  );
};

export default EditEmployeeModal;
