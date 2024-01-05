import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => (
  <div
    className="modal show d-flex align-items-center justify-content-center"
    style={{
      border: "1px solid black",
      borderRadius: "5%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      className="modal-dialog"
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
      <button onClick={onClose} className="btn-close" aria-label="Close">
        閉じる
      </button>
    </div>
  </div>
);

export default Modal;
