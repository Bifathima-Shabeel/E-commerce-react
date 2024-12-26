import React from 'react';

function ContactUs() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Contact Us</h2>

      <div className="row">
        <div className="col-md-6">
          <h4>Our Contact Information</h4>
          <ul className="list-unstyled">
            <li><strong>Email:</strong> support@example.com</li>
            <li><strong>Phone:</strong> +1 123-456-7890</li>
            <li><strong>Address:</strong> 1234 Example St, City, Country</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h4>Send Us a Message</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
