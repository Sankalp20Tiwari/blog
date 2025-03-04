import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray text-white py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold">.blog</h1>
            <p className="text-gray-400 mt-2 text-sm">
              Crafting Stories, One Blog at a Time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-300">Follow Us</h3>
            <div className="flex mt-2 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-900 pt-4 text-center text-sm text-gray-400">
          &copy; 2024 .blog | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

