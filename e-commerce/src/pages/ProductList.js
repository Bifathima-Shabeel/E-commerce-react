import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function ProductList({ searchQuery }) {
    const [product, setProduct] = useState([]); // Store all products
    const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products

    // Fetch products from API on initial render
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setFilteredProducts(data); 
            })
            .catch((error) => console.error("Error fetching products", error));
    }, []); 

    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = product.filter((item) =>
            item.title.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    }, [searchQuery, product]); 
    return(
        <div className="container">
            <h1>Products</h1>
            <div className="row">
                {filteredProducts.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
