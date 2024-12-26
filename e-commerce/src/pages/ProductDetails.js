import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from '../context/CartContext';
function ProductDetails() {
    const { id }= useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) =>setProduct(data))
    .catch((error) => console.error("Error fetching products",error));
},[id]);

const handleAddToCart = () => {
    if (product) {
        addToCart(product);  
    }
};


if (!product) {
    return <div>Loading....</div>;
}
  return ( 
    <div className="container mt-5">
    <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
            <img 
                src={product.image} 
                alt={product.title} 
                className="img-fluid rounded shadow-sm" 
                style={{
                    maxWidth: "100%", 
                    maxHeight: "400px", 
                    objectFit: "contain", 
                }}
            />
        </div>

    
        <div className="col-md-6">
            <h1 className="display-4">{product.title}</h1>
            <p className="text-muted">Category: {product.category}</p>
            <p>{product.description}</p>
            <h4 className="text-success">${product.price}</h4>
            <button onClick={handleAddToCart} className="btn btn-primary btn-lg mt-3">
                Add to Cart
            </button>
        </div>
    </div>
</div>
     );

    }
export default ProductDetails;