import React, {useState} from "react";
import SizesFilter from './product-list/sizes-filter/sizes.js';
import SelectedProducts from './product-list/selected-products/selected-products.js';
import ProductList from './product-list/product-list.js';
import products from "./product-list/product-card/product-card.js";
import CartIcon from "./product-list/cart-icon/cart-icon.js";
import ModalCart from "./cart/cart.js";
import ModalHeader from "./cart/modal-header/modal-header";
import ModalBody from "./cart/modal-body/modal-body.js";
import ModalProducts from "./cart/modal-products/modal-products.js";
import ModalFooter from "./cart/modal-footer/modal-footer.js";

const App = () => {
    const [filterProducts, setFilterProducts] = useState(products);
    const [size, setSize] = useState(products.size);
    const handleSizeChange = (selectedSizes) => {       
        
        let filtered = filterProducts.filter(product => { 
            console.log(selectedSizes);           
            if (product.size.some(item => selectedSizes.includes(item))) {
               return product;                
            }           
        })

        if (selectedSizes.length > 1) {
            let filteredMoreThanOne = filtered.filter(item => {          
                if (item.size.includes(selectedSizes[0] && selectedSizes[1])) {
                    console.log(item);
                    console.log(selectedSizes[0], selectedSizes[1]);
               return item;                
            }         
        }) 
            filtered = filteredMoreThanOne;    
        }
        
        if (!filtered.length) {
            filtered = products;
        } 
        

        setFilterProducts(filtered);
        console.log(filtered);
        setSize(selectedSizes.toString());
    }
    
    
    const [productsToBuy, setProductsToBuy] = useState([]);
    
    
    const handleProductSelect = (selectedProduct) => {
        let productsToBuyArr = [...productsToBuy];   
        if (productsToBuyArr.includes(selectedProduct)) {
            productsToBuyArr = productsToBuyArr.filter(item => item !== selectedProduct);
        } else {
            productsToBuyArr.push(selectedProduct);
            console.log(selectedProduct.id)
        }        
        setProductsToBuy(productsToBuyArr);    
        console.log(selectedProduct)       
    }

       
    const [show, setShow] = useState(false);
    
    const [displayParagraph, setDisplayParagraph] = useState(true);
      
    const decrementProducts = (selectedProduct) => {
        let productsToBuyArr = [...productsToBuy];
        const indexOfAlreadyAddedProduct = productsToBuyArr.findLastIndex(({ id }) => selectedProduct.id === id);
        if (indexOfAlreadyAddedProduct > -1) {
            productsToBuyArr.splice(indexOfAlreadyAddedProduct, 1)
        }        
        setProductsToBuy(productsToBuyArr);      
    }
  
    
    const incrementProducts = (selectedProduct) => {
        let productsToBuyArr = [...productsToBuy];
        productsToBuyArr.push(selectedProduct);       
        setProductsToBuy(productsToBuyArr);
        console.log(productsToBuyArr);
    }
    

    const deleteFromCart = (selectedProduct ) => {
        let productsToBuyArr = productsToBuy.filter(({ id }) => selectedProduct.id !== id);
        setProductsToBuy(productsToBuyArr);        
        console.log(productsToBuyArr);        
    }
    
    const message = () => {
        alert("It is working already! =)")
    }


    return (
        <>  <SizesFilter onFilterChange={handleSizeChange} />
            <SelectedProducts productsFound={filterProducts.length} />
            <ProductList display={() => setDisplayParagraph(false)} products={filterProducts} onProductSelect={handleProductSelect} />
            <CartIcon onModal={() => setShow(true)} numberOfProductsInCart={productsToBuy.length} show={show} />
            <ModalCart secondcomp={<ModalHeader numberOfProductsInCart={productsToBuy.length}
                 onClose={() => setShow(false)} />} onClose={() => setShow(false)} show={show}
                thirdcomp={<ModalBody displayParagraph={displayParagraph} secondcomp={<ModalProducts sizes={size} close={deleteFromCart} productsSelected={productsToBuy} 
                     decrement={decrementProducts} increment={incrementProducts}
                quantity={productsToBuy.length}  />}  />}
                fourthcomp={<ModalFooter prompt={message}  />}
            />                 
        </>
    );
}

export default App;

