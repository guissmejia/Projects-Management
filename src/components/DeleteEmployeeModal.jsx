import React from 'react';
import Modal from './Modal';

const DeleteEmployeeModal= (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Estás seguro?</h1>
        <p>Estas a punto de eliminar este usuario</p>
        <div>
          <button
            onClick={props.deleteEmployee}
            className="Modal__button--save"
          >
            Eliminar
          </button>
          <button onClick={props.onClose} className="Modal__button--save">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteEmployeeModal;
