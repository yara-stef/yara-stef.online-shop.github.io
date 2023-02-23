import React from "react";

const ModalHeader = (props) => {
    return (        
        <div className='modal-header'>
            <img src="./img/close-btn.png"  className="close" onClick={props.onClose} alt='close icon'></img>
            <div className="modal-header-inner">
                <img src="./img/cart.jpg" className="shopping-bag-img" alt="cart icon"></img>
            <div className="total-items-in-cart">
                <output> {props.numberOfProductsInCart }</output>
            </div>
            <h3 className="modal-title">Cart</h3>           
                        
            </div>            
            
        </div>                
    )
}

export default ModalHeader;