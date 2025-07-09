import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Branding</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Design</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Marketing</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Company</h6>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-500 transition">About us</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Press kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Legal</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Terms of use</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Privacy policy</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Cookie policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-200 dark:border-gray-700"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold">Habibur</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;