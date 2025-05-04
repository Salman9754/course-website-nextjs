import React from "react";

const Footer = () => {
  return (
<footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">TechPath Academy</h4>
          <p>
            Your gateway to mastering web development, AI, and cloud technologies.
            Learn at your pace with hands-on courses and expert mentors.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Full Stack Web Development</a></li>
            <li><a href="#" className="hover:text-white">React & Next.js Bootcamp</a></li>
            <li><a href="#" className="hover:text-white">Python for Data Science</a></li>
            <li><a href="#" className="hover:text-white">AWS Cloud Fundamentals</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Free Tutorials</a></li>
            <li><a href="#" className="hover:text-white">Student Projects</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>
            1234 Silicon Avenue<br />
            San Jose, CA 95110<br />
            United States
          </p>
          <p className="mt-2">
            Phone: (408) 555-0198<br />
            Email: <a href="mailto:support@techpathacademy.com" className="underline">support@techpathacademy.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">📘</a>
            <a href="#" aria-label="Twitter" className="hover:text-white">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">🔗</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">📺</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        Made by Salman Ansar <br />
        © 2025 TechPath Academy.  All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
