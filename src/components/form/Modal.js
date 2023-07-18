import React from 'react';



const Modal = ({isOpen, onClose, address}) =>{
    if (!isOpen) return null;

    return (
        <div className="modal" style={{position:'fixed', right:10, top:100}}>
            <div className="modal-content">

                <h2>Address Information</h2>
                <p>{address}</p>
            </div>

        </div>
    )
}

export default Modal;