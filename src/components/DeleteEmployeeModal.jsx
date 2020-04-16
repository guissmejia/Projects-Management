import React from 'react';
import Modal from './Modal';

const DeleteEmployeeModal= (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Estás seguro?</h1>
        <p>Estas a punto de eliminar este usuario.</p>
        <div>
          <button
            onClick={props.onDeleteEmployee}
            className="Modal__button--save"
          >
            Delete
          </button>
          <button onClick={props.onClose} className="Modal__button--save">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteEmployeeModal;
