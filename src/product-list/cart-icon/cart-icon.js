import React from "react";


const CartIcon = (props) => {
    
    
    return (
        <button className={`shopping-bag ${props.show ? 'hidden' : ''}` } onClick={props.onModal}>
                <img src="./img/cart.jpg" alt='cart' className="shopping-bag-img" />
                <div className="total-items-in-cart">
                <output> {props.numberOfProductsInCart }</output>
                </div>
            </button>
    )
}

export default CartIcon;