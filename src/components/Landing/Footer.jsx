import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-2 justify-between">
        <img
                className={`transition-all duration-300 h-24 md:h-12 lg:h-24`}
                src="https://alwafi.ac.id/assets/img/stit.png"
                alt="STIT Al Wafi Logo"
              />
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Kontak</h3>
            <div className="space-y-2">
              <p>Jl. Raya Bogor KM 47, Nanggewer</p>
              <p>Cibinong, Bogor</p>
              <p>Jawa Barat 16912</p>
              <p className='cursor-pointer'>Email: info@alwafi.ac.id</p>
              <p className='cursor-pointer'>Telp: (021) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className='max-w-32'>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/program-studi" className="hover:text-blue-400">Program Studi</Link>
              </li>
              <li>
                <Link to="/tentang" className="hover:text-blue-400">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/daftar" className="hover:text-blue-400">Pendaftaran</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} STIT Al Wafi Bogor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
