import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Learn more about our company and our mission to bring you the world's best quality products.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/products" className="text-white">Products</Link></li>
                            <li><Link to="/contact" className="text-white">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li><a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a></li>
                            <li><a href="#" className="text-white mx-2"><i className="bi bi-twitter"></i></a></li>
                            <li><a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <p>&copy; {new Date().getFullYear()} E-Shoppee Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
