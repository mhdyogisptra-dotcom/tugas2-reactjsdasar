import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Bookstore</h5>
            <p>Toko buku online favoritmu.</p>
            <p><i className="fa-solid fa-map-marker-alt me-2"></i> Jl. Bacaan No. 123, Jakarta</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Link Cepat</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/team" className="text-light text-decoration-none">Team</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Ikuti Kami</h5>
            <div className="mb-3">
              <a href="#" className="text-light me-3"><i className="fa-brands fa-facebook fa-lg"></i></a>
              <a href="#" className="text-light me-3"><i className="fa-brands fa-instagram fa-lg"></i></a>
              <a href="#" className="text-light"><i className="fa-brands fa-twitter fa-lg"></i></a>
            </div>
            <p className="small">Developed by <strong>Muhammad Yogi Saputra</strong><br />© 2023 Bookstore.</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center small">&copy; 2023 by Muhammad Yogi Saputra.</div>
      </div>
    </footer>
  );
}

export default Footer;
