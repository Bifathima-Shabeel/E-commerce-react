import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

function ProductCard(props) {
    const product = props.product;
    const { addToCart } = useCart();

    const handleAddToCart = (event) => {
        event.stopPropagation();  
        addToCart(product);  
    };

    return (
        <div className="card mb-4 shadow-sm" style={{ width: '100%', maxWidth: '18rem' }}>
            <Link to={`/product/${product.id}`} >
                <div className="card-img-container" style={{ height: '250px', overflow: 'hidden' }}>
                    <img 
                        src={product.image} 
                        className="card-img-top img-fluid" 
                        alt={product.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                </div>
                <div className="card-body p-3">
                    <h5 className="card-title text-truncate" style={{ fontSize: '1rem', lineHeight: '1.2' }}>
                        {product.title}
                    </h5>
                    <p className="card-text" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                        ${product.price}
                    </p>
                </div>
            </Link>

            {/* Add to Cart Button */}
            <div className="d-flex justify-content-between align-items-center p-3">
                <button onClick={handleAddToCart} className="btn btn-warning btn-sm w-100">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
