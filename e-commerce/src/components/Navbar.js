import { NavLink } from "react-router-dom";
import { useCart } from '../context/CartContext'; 

function Navbar() {

    const { getCartItemCount } = useCart();  // Access the function to get the cart item count

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">E-Shoppee</NavLink>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>

                    {/* Cart link aligned to the right */}
                    <ul className="navbar-nav ms-auto">
  <li className="nav-item">
    <NavLink className="nav-link" to="/cart">
      <div className="position-relative">
        {/* Cart Icon */}
        <i className="bi bi-cart" style={{ fontSize: '1.5rem' }}></i> 

        
        {getCartItemCount() > 0 && (
          <span className="badge bg-warning position-absolute top-0 start-10 translate-middle rounded-circle">
            {getCartItemCount()}
          </span>
        )}
      </div>
    </NavLink>
  </li>
</ul>



                </div>
            </div>
        </nav>
    );
}

export default Navbar;
