import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Team from './components/Team';
import Contact from './components/Contact';

// Komponen 404 sederhana
function NotFound() {
  return (
    <div className="container my-5 text-center">
      <h1 className="display-4">404 - Halaman Tidak Ditemukan</h1>
      <p className="lead">Kembali ke <a href="/">Home</a>.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Grup routes dengan layout shared (navbar + footer) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  {/* / → Home */}
        <Route path="team" element={<Team />} />  {/* /team */}
        <Route path="contact" element={<Contact />} />  {/* /contact */}
      </Route>
      
      {/* Fallback untuk 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
