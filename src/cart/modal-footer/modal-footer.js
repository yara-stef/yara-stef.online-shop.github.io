import React from "react";

const ModalFooter = (props) => {
    return (
        <div className='modal-footer'>            
            <button className="checkout" onClick={props.prompt}>CHECKOUT</button>
        </div>        
    )
}

export default ModalFooter;