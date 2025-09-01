import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-blue-900 dark:border-gray-300 text-gray-700 dark:text-gray-200 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 dark:text-gray-200 mb-4">
            News<span className="text-black dark:text-gray-200">Pulse</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Stay updated with the latest news around the globe. 
            Trusted source for Business, Technology, Sports, Health, 
            and much more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/business" className="hover:text-blue-500">Business</Link></li>
            <li><Link to="/technology" className="hover:text-blue-500">Technology</Link></li>
            <li><Link to="/sports" className="hover:text-blue-500">Sports</Link></li>
            <li><Link to="/health" className="hover:text-blue-500">Health</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: <span className="text-blue-500">support@newspulse.com</span></p>
          <p className="mt-2">Dhaka, Bangladesh</p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">NewsPulse</span>. All Rights Reserved.
        <p><a href="https://amdadislam.netlify.app/">Developed By Amdad Islam</a></p>
      </div>
    </footer>
  );
};

export default Footer;
