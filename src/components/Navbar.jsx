import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
          📘 Teachers Portal
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-300 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-300 transition">About</a>
          </li>
          <li>
            <a href="#teachers" className="hover:text-yellow-300 transition">Teachers</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-yellow-300 transition">Gallery</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-blue-600 px-6 py-4 space-y-3 text-sm font-medium">
          <li>
            <a href="#home" className="block hover:text-yellow-300">Home</a>
          </li>
          <li>
            <a href="#about" className="block hover:text-yellow-300">About</a>
          </li>
          <li>
            <a href="#teachers" className="block hover:text-yellow-300">Teachers</a>
          </li>
          <li>
            <a href="#gallery" className="block hover:text-yellow-300">Gallery</a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-yellow-300">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
