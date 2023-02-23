import React, {useState, useEffect} from "react";

const ModalProducts = (props) => {
    
     const [updateQuantity, setUpdateQuantity] = useState([]);
    useEffect(() => {
        const productsList = props.productsSelected.reduce((productsSelected, currentProduct) => {
            const indexOfAlreadyAddedProduct = productsSelected.findIndex(({ id }) => currentProduct.id === id);
            const productNotAddedPreviously = indexOfAlreadyAddedProduct < 0;

            if (productNotAddedPreviously) {
                productsSelected.push({ ...currentProduct, quantity: 1 });
            } else {
                productsSelected[indexOfAlreadyAddedProduct].quantity++;
            }

            return productsSelected;
               
        }, []);
        setUpdateQuantity(productsList);
    }, [props.productsSelected]);

    
    const subtotal = props.productsSelected.reduce((total, productSelected) => total + (productSelected.price * productSelected.quantity), 0);

    return (
        <ul  className='modal-products'>
            {updateQuantity.map(productSelected => {
                return (
                    <li key={productSelected.id} className='modal-grid-container'>
                            <img className="product-image-cart" src={productSelected.img} alt='product'></img> 
                            <div>
                            <div className="product-name">{productSelected.name}</div>
                            <div className="quantity">{ props.sizes}</div>
                            <div className="quantity">Quantity: {productSelected.quantity}</div>
                            </div>  
                        <div>
                            <div id={productSelected.id} className="btn" onClick={() => props.close(productSelected)}>
                                <button className="btn-close">
                                <b>X</b>
                            </button>
                            </div>
                            
                                <span className="price">$</span>
                            <span className="price">{productSelected.price }</span>
                                <div className="btn-change-quantity">
                                    <span>
                                        <button onClick={() =>  props.decrement(productSelected)} className="decrement">-</button>
                                        <button onClick={() =>  props.increment(productSelected)} className="increment" >+</button>
                                    </span>
                                </div>                                
                        </div>
                        
                    </li>
                    
                )
            })}   
            <div className="subtotal">
                SUBTOTAL
                <span className="curency">$
                    <span className="sum">{subtotal.toFixed(2)} </span>
                </span>
            </div>
        </ul>
        
    )
}

export default ModalProducts;