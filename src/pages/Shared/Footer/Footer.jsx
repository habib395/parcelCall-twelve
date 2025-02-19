import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-center text-base-content dark:text-gray-300 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Services */}
        <nav>
          <h6 className="footer-title text-lg font-semibold text-gray-800 dark:text-gray-200">Services</h6>
          <a className="link link-hover block">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-lg font-semibold text-gray-800 dark:text-gray-200">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title text-lg font-semibold text-gray-800 dark:text-gray-200">Legal</h6>
          <a className="link link-hover block">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
          <a className="link link-hover block">Cookie policy</a>
        </nav>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
