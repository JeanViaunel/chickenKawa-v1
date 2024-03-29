import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: info@shellychickenfarm.com</p>
            <p>Phone: +886 123 456 789</p>
            <p>Address: 123 Farm Lane, Sunnyville, USA</p>
            <p>
              <Link>LinkedIn</Link>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <Link className="hover:text-gray-500">Facebook</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500">Twitter</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500">Instagram</Link>
              </li>
            </ul>
          </div>

          {/* Copyright Notice */}
          <div>
            <p>Design by Victor</p>
            <p className="text-sm">
              &copy; {year} Shelly Farm
              <br /> All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
