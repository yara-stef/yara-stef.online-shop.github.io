import React, {useState} from "react";


const ProductList = ( {products, onProductSelect, display}) => {   
    const [addToCartStyle, setAddToCartStyle] = useState([]);
    const handleClick = (product) => {
        let addToCart = [...addToCartStyle];
        if (addToCart.includes(product)) {
            addToCart = addToCart.filter(item => item !== product);
        } else {
            addToCart.push(product);
        }
        setAddToCartStyle(addToCart);
        onProductSelect(product);
        display();
    }
    return (
        <div className="grid-container">            
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="product-card" id={product.id}>
                                <img src={product.img} alt=''></img>
                                <div>{product.name}</div>
                                <hr></hr>
                                <span>$</span>
                                <span>{product.price}</span>
                                <div>{product.discount}</div>
                                <div className="hidden">{product.size}</div>
                            <button id={product.id} className={`btn-item ${addToCartStyle.includes(product) ? 'active' : ''}`} onClick={() => handleClick(product)}>
                                    Add To Cart
                                </button>
                            </div>
                       )
                    })    
                }                        
        </div>                                   
    )           
}

export default ProductList;