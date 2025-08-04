const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Teachers Portal</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#teachers" className="hover:text-yellow-300">Teachers</a></li>
          <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
