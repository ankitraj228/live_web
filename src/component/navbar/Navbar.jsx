import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0B1D2F] text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-bold">Mike</span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-cyan-400">About Us</Link>
        <Link to="/services" className="hover:text-cyan-400">Services</Link>
        <Link to="/projects" className="hover:text-cyan-400">Projects</Link>
        <Link to="/contact" className="hover:text-cyan-400">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
