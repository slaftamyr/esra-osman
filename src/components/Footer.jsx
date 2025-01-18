import React from "react";

function Footer() {
  return (
    <footer className="bg-pink-200 py-8">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100015036013619&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl hover:scale-125 transition-transform"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="mailto:esraosman129@gmail.com"
            className="text-pink-600 text-2xl hover:scale-125 transition-transform"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="tel:+24969063700"
            className="text-pink-600 text-2xl hover:scale-125 transition-transform"
          >
            <i className="fas fa-phone"></i>
          </a>
        </div>
        <p className="text-gray-600">
          &copy; 2025 Esra Osman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
