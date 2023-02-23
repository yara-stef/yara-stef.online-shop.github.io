import React from "react";

const SelectedProducts = ({ productsFound }) => {
    
    const productsFoundString = `${productsFound} Product(s) found`;
    return (
        <h3 className="selected-products">
            {productsFoundString}
        </h3>
    )
}

export default SelectedProducts;