// src/components/common/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-content">
        {children}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Modal;