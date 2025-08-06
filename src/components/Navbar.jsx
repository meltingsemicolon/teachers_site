import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <span className="text-yellow-300 text-3xl">📘</span>
          <span>Teachers Portal</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {["Home", "About", "Teachers", "Gallery", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-300 transition duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-blue-800 bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4 flex justify-between items-center border-b border-blue-600">
          <h2 className="text-xl font-semibold">📘 Teachers Portal</h2>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-6 py-6 text-lg font-medium">
          {["Home", "About", "Teachers", "Gallery", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-300 transition duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
