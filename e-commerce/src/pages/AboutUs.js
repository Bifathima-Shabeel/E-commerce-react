
function AboutUs() {
    return (
        <div className="container my-5">
           
           
            <div className="row">
                <div className="col-md-6">
                    <h2>Our Story</h2>
                    <p>
                        Our company was founded with the aim to deliver quality and affordable products across various categories. With a strong commitment to customer satisfaction, we have become a trusted name in the industry. Our team works tirelessly to ensure the best shopping experience for our valued customers.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src="/images/about.jpg" 
                        alt="Team"
                        className="img-fluid rounded"
                    />
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Our Mission</h2>
                    <p>
                        At our core, we strive to be the leading provider of high-quality, cost-effective products while ensuring customer satisfaction at every step. Our mission is to continuously innovate and create products that bring joy to our customers.
                    </p>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="row mt-5">
                <div className="col-md-6">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Customer First:</strong> Our customers are at the heart of everything we do.</li>
                        <li><strong>Integrity:</strong> We are committed to honesty and transparency.</li>
                        <li><strong>Excellence:</strong> We aim for the highest quality in every product.</li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div className="col-md-6">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or inquiries, feel free to reach out to us!</p>
                    <p><strong>Email:</strong> contact@ourcompany.com</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
