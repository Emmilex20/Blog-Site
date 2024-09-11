import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Stateside Scoop</h2>
            <p className="text-base mb-4">
              Your trusted source for breaking news, trending stories, and
              insightful analysis.
            </p>
            <p className="text-sm">
              <a
                href="mailto:aginaemmanuel6@gmail.com"
                className="hover:underline"
              >
                <strong>Contact Us:</strong> aginaemmanuel6@gmail.com
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=100082759790899"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/Emmilex1996"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/emmilex20/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/chidozie-agina-2a50742a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Stateside Scoop. All rights
            reserved.
          </p>
          <p className="text-xs mt-2">
            This site uses cookies to provide you with a better experience. By
            using this site, you agree to our{" "}
            <a href="/privacy-policy" className="text-gray-400 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-and-conditions" className="text-gray-400 hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
