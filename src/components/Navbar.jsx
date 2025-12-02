import { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <TrendingUp className={`h-8 w-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Zerodha 2.0
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 cursor-pointer" onClick={() => navigate('/auth')}>
              Sign up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 text-sm font-medium ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <button 
            className="w-full mt-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer">
              Sign up
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
