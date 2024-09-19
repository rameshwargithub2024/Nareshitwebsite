
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export function DEmo() {
//     const [products, setProducts] = useState([]);

//     function LoadProducts() {
//         axios.get("https://fakestoreapi.com/products")
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error("Error loading products:", error);
//             });
//     }

//     useEffect(() => {
//         LoadProducts();
//     }, []);

//     return (
//         <div className="container-fluid">
//             <h2>Product List</h2>
//             {products.length > 0 ? (
//                 <ul>
//                     {products.map((product, index) => (
//                         <li key={index}>
//                             <h3>{product.title}</h3>
//                             <p>Price: ${product.price}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Loading products...</p>
//             )}
//         </div>
//     );
// }

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export function LoadProduct(){
    const[product, setProduct] = useState({title:"", id:0, prise:"",image:""});

    function LoadProduct(){
          axios.get("https://fakestoreapi.com/products")
          .then(Response => {
            setProduct(Response.data);
          })
          .catch((err)=>{
                 console.log("not yet loaded" ,err);
          })
    }



    useEffect(()=>{
        LoadProduct();
    },[]);

    return(
        <div className="container-fluid">
            <div className="card w-25">
                <img src={product.image} width={30} alt="" className="card-img-top" />
                <div className="h4">{product.title}</div>
                <div><span>{product.prise}</span></div>
            </div>
        </div>
    )
}
