import React, { useState, useEffect } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Register', href: '#register' },
    { name: 'Venue', href: '#venue' },
  ];
  return (
    <nav className={`fixed w-full z-[60] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 top-0' 
          : 'bg-transparent top-0'
      }`}>
        <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DS</span>
            </div>
            <span className={`font-display font-bold text-xl ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              DataSci Summit
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary">
              Register Now
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden transition-all duration-300 overflow-hidden z-[70] ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 glass-effect mt-4 relative z-[70]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 pt-2">
              <button className="btn-primary w-full">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;