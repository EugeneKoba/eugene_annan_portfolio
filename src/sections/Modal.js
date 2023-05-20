import React from 'react'
import ModalData from "./ModalData"
import cross_icon from "../icons/cross-icon.png"

const Modal = ({ data, open, onClose }) => {
  // Return null when openModal state is false
  if (!open) {
    return null
  }
  return (
    <>
      <div className="modal">
        <div className="modal-cross-box" onClick={onClose}>
          <img src={cross_icon} alt="cross"/>
        </div>
      <ModalData data={data}/>
      </div>
    </>
  )
}

export default Modal
