import React from 'react';
import { Outlet } from 'react-router-dom';  // Outlet untuk render child routes
import Navbar from './Navbar';  // Buat dulu Navbar
import Footer from './Footer';  // Buat dulu Footer

function Layout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <div className="container">
          <Outlet />  {/* Render halaman child di sini */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
