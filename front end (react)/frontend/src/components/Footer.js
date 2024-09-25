// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="text-center p-3">
        © {new Date().getFullYear()} E-Commerce Platform
      </div>
    </footer>
  );
}

export default Footer;
