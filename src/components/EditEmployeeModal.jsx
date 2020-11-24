import React from 'react';
import Modal from './Modal';

const EditEmployeeModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h3>Actualizar Empleado</h3>
        <form onSubmit={props.updateEmployee} className="Modal__content">
          <label>
            Nombres
            <input
              type="text"
              name="name"
/*               value={props.employeeSelected.name}
 */              
            />
          </label>
          <label>
            Apellidos
            <input
              type="text"
              name="lastname"
/*               value={props.employeeSelected.lastname}
 */            />
          </label>
          <label>
            Cargo
            <input
              type="text"
              name="jobTitle"
/*               value={props.employeeSelected.jobTitle}
 */              
            />
          </label>
          <label>
            Salario
            <input
              type="text"
              name="salary"
/*               value={props.employeeSelected.salary}
 */              
            />
          </label>
          <label>
            Disponibilidad
            <select
              name="availavility"
/*               value={props.employeeSelected.availavility}
 */              
            >
              <option value="">Seleccionar</option>
              <option value="Full Time">Full Time</option>
              <option value="Half Time">Half Time</option>
            </select>
          </label>
          <label>
            Estado
            <select name="status" 
              /* value={props.employeeSelected.status} */ >
              <option value="">Seleccionar</option>
              <option value="Active">Activo</option>
              <option value="Inactive">Inactivo</option>
            </select>
          </label>
          <button 
            className="Modal__button--save"
            type="submit"
            >
            Guardar
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditEmployeeModal;
