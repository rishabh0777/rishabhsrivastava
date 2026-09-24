"use client";
import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-6 px-2 border-t-2 flex md:flex-row sm:flex-col-reverse items-center justify-between shadow-md rounded-t-xl">
      {/* Left */}
      <div className="text-center mt-4">
        © {new Date().getFullYear()} All Rights Reserved. Designed & Coded with <span className="text-red-500">❤️</span>
      </div>

      {/* Center */}
      <div className="flex gap-4 mt-4">
        
        <a href="https://www.linkedin.com/in/rishabh-srivastava-1b17461b0?utm_source=share&utm_compaign=share_via&utm_content=profile&utm_medium=auto" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://www.instagram.com/_rishabhsrivastava07?igsh=bWj2ZmFmZnFxeTZh" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        <a href="mailto:rishabhsrivastava7777@gmail.com" className="hover:underline">Email</a>
      </div>

      {/* Right */}
      <button onClick={scrollToTop} className="hover:underline">Back to top ↑</button>
    </footer>
  );
};

export default Footer;