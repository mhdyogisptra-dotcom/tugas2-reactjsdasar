import React from 'react';

function Team() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Tim Bookstore Kami</h1>
      <p className="text-center lead mb-4">Tim passionate tentang buku, dipimpin oleh Muhammad Yogi Saputra.</p>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <img src="https://picsum.photos/300/200?random=1" className="card-img-top" alt="Alice" />
            <div className="card-body">
              <h5 className="card-title">Alice Johnson</h5>
              <p className="card-text">CEO. Penggemar self-help.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <img src="https://picsum.photos/300/200?random=2" className="card-img-top" alt="Bob" />
            <div className="card-body">
              <h5 className="card-title">Bob Smith</h5>
              <p className="card-text">Backend Developer.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow">
            <img src="https://picsum.photos/300/200?random=3" className="card-img-top" alt="Carol" />
            <div className="card-body">
              <h5 className="card-title">Carol Lee</h5>
              <p className="card-text">Kurator Buku.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow border-primary">
            <img src="https://picsum.photos/300/200?random=4" className="card-img-top" alt="Yogi" />
            <div className="card-body">
              <h5 className="card-title">Muhammad Yogi Saputra</h5>
              <p className="card-text">Frontend Developer. Pembuat website ini.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
