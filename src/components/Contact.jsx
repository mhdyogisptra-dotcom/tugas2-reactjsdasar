import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Hubungi Kami</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nama</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Pesan</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
