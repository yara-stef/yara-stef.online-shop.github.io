import React, { useState } from "react";

const SizesFilter = ({onFilterChange}) => {
    const sizes = ['xs', 's', 'm', 'ml', 'l', 'xl', 'xxl'];
    const [appliedSizes, setAppliedSizes] = useState([]);
    const handleClick = (size) => {
        let applied = [...appliedSizes];          
        if (applied.includes(size)) {
            applied = applied.filter(item => item !== size);
        } else {
            applied.push(size);
        }
        setAppliedSizes(applied);   
        
        onFilterChange(applied);
    }
    return (
        <div className='sizes'>
            <h3>Sizes:</h3>
            <div> 
                {
                    sizes && sizes.length ? 
                    sizes.map((size, index) => {
                        return (
                            <button key={index} className={`btn-size ${appliedSizes.includes(size) ? 'active' : ''}`} onClick={() => handleClick(size)}>
                                {size.toUpperCase()}
                            </button>
                        )
                    }) : <p>No available filter</p>
                }                    
            </div>
         </div>
    )
}

export default SizesFilter;

// const SizesFilter = () => {
//     const [sizes, setSizes] = useState( [
//         { label: 'xs', applied: false },
//         { label: 's', applied: false },
//         { label: 'm', applied: false },
//         { label: 'ml', applied: false },
//         { label: 'l', applied: false },
//         { label: 'xl', applied: false },
//         { label: 'xxl', applied: false }
//     ]);
//     const handleClick = (label) => {
//         const one = sizes.map(size => {
//             if (size.label === label) {
//                 size.applied = !size.applied;
//             }
//             return size             
//         })
//         setSizes(one);
        
//         // const [selectedItems, setSelectedItems] = useState([]);
//         // const productFilter = (product) => {
//         //     const selected = [...selectedItems];
//         //     const check = products.map(product => {
//         //         if (product.size.includes(sizes.label)) {
//         //             selected.push(product);
//         //         }
//         //     })
//         //     setSelectedItems(selected);
//         // } 
//         // productFilter();
//         // }
    
//     return (
//         <div className='sizes'>
//             <h3>Sizes:</h3>
//             <div> 
//                 {
//                     sizes && sizes.length ? 
//                     sizes.map((size, index) => {
//                         return (
//                             <button key={index} className={`btn-size ${size.applied ? 'active' : ''}`} onClick={() => handleClick(size.label)}>{size.label.toUpperCase()}</button>
//                         )
//                     }) : <p>No available filter</p>
//                 }                    
//             </div>
//          </div>
//     )
// }