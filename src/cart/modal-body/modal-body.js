import React from "react";

const ModalBody = (props) => {
    return (
        <div className="modal-body">
            {props.secondcomp}
            <div className={`add-products ${props.displayParagraph ? '' : 'hidden'}`  }>Add some products in the cart :)</div>
        </div>
    )
}

export default ModalBody;