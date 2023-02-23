import React from "react";

const ModalCart = (props) => {
    
    
    return (
        <div className={`modal ${props.show ? '' : 'hidden'}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {props.secondcomp} {props.thirdcomp} {props.fourthcomp}
            </div>
        </div>
    )
}

export default ModalCart;