import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const menuItems = [
    {
      title: 'Tentang Kami',
      items: [
        { name: 'Profil', link: '/tentang/profil' },
        { name: 'Visi & Misi', link: '/visi-misi' },
        { name: 'Sejarah', link: '/sejarah' },
        { name: 'Struktur Organisasi', link: '/tentang/struktur' },
      ]
    },
    {
      title: 'Akademik',
      items: [
        { name: 'Program Studi', link: '/program-studi' },
        { name: 'Kalender Akademik', link: '/akademik/kalender' },
        { name: 'Sistem Akademik', link: '/akademik/sistem' },
      ]
    },
    {
      title: 'Kemahasiswaan',
      items: [
        { name: 'Organisasi Mahasiswa', link: '/kemahasiswaan/organisasi' },
        { name: 'Beasiswa', link: '/kemahasiswaan/beasiswa' },
        { name: 'Unit Kegiatan', link: '/kemahasiswaan/ukm' },
        { name: 'Prestasi', link: '/kemahasiswaan/prestasi' },
      ]
    },
    {
      title: 'Fasilitas',
      items: [
        { name: 'Ruang Kelas', link: '/fasilitas/kelas' },
        { name: 'Perpustakaan', link: '/fasilitas/perpustakaan' },
        { name: 'Laboratorium', link: '/fasilitas/lab' },
        { name: 'Masjid', link: '/fasilitas/masjid' },
      ]
    }
  ];

  const directLinks = [
    { name: 'Jurnal', link: 'https://alwafi.ac.id/journal', icon: '📝' }
  ];

  const handleDropdownChange = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 1000);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'shadow-md py-2 backdrop-blur-sm bg-white/90' 
          : 'bg-gradient-to-b from-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveDropdown(null);
              }}
            >
              <img
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-14'
                }`}
                src="https://alwafi.ac.id/assets/img/stit.png"
                alt="STIT Al Wafi Logo"
              />
              {/* <span className={`hidden md:inline-block font-bold transition-all duration-300 ${
                isScrolled ? 'text-gray-800 text-lg' : 'text-white text-xl'
              }`}>
                STIT Al Wafi
              </span> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {menuItems.map((menu, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                // onMouseLeave={handleDropdownChange}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {menu.title}
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === index && (
                  <div 
                  className="absolute left-0 mt-1 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform opacity-100 scale-100 transition-all duration-200 origin-top-left">
                    <div className="py-1">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.link}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-2 ml-2">
              {directLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  <span className="mr-1">{link.icon}</span>
                  {link.name}
                </a>
              ))}
              
              <Link
                to="/daftar"
                className={`ml-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute top-0 left-0 right-0 bg-white shadow-xl transform transition-all duration-300">
          <div className="px-5 pt-4 pb-6">
            <div className="flex items-center justify-between">
              <Link 
                to="/" 
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img
                  className="h-12"
                  src="https://alwafi.ac.id/assets/img/stit.png"
                  alt="STIT Al Wafi Logo"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">STIT Al Wafi</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-1">
              {menuItems.map((menu, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0">
                  <button
                    className="w-full text-left px-3 py-3 text-base font-medium text-gray-800 rounded-lg hover:bg-gray-50 flex justify-between items-center"
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                  >
                    <span>{menu.title}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === index ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === index && (
                    <div className="pl-4 pb-2 space-y-1">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.link}
                          className="block px-3 py-2 text-base text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {directLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {link.icon} {link.name}
                </a>
              ))}
              
              <Link
                to="/daftar"
                className="block w-full px-4 py-3 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;