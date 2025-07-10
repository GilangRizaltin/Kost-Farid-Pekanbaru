import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  // CSS untuk modal
  const modalStyles = `
  .slick-dots-bottom {
    bottom: 70px !important;
  }
  .slick-dots-bottom li button:before {
    color: white !important;
    opacity: 0.5 !important;
    font-size: 8px !important;
  }
  .slick-dots-bottom li.slick-active button:before {
    color: white !important;
    opacity: 1 !important;
  }
  `;

  const [showModal, setShowModal] = useState(false);
  
  // Tampilkan modal saat komponen pertama kali di-mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); // Muncul setelah 2 detik
    
    return () => clearTimeout(timer);
  }, []);

    // Inject CSS saat komponen mount
    useEffect(() => {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = modalStyles;
      document.head.appendChild(styleElement);
      
      return () => {
        document.head.removeChild(styleElement);
      };
    }, []);

  const heroSlides = [
    {
      image: "/images/background_stit_3.jpeg",
      title: "STIT Al Wafi Bogor",
      subtitle: "Membentuk Generasi Pendidik Islam yang Berkualitas"
    },
    {
      image: "/images/background_stit_2.jpeg",
      title: "Pendidikan Berkualitas",
      subtitle: "Kurikulum Terintegrasi dengan Nilai-nilai Islam"
    },
    {
      image: "/images/background_stit_1.jpeg",
      title: "Fasilitas Modern",
      subtitle: "Mendukung Pembelajaran yang Optimal"
    }
  ];

  const features = [
    {
      icon: "fas fa-graduation-cap",
      title: "Program Studi",
      desc: "MPI (S1)",
      link: "/program-studi"
    },
    {
      icon: "fas fa-users",
      title: "Pendaftaran",
      desc: "PMB 2024",
      link: "/daftar"
    },
    {
      icon: "fas fa-book",
      title: "Perpustakaan",
      desc: "E-Library",
      link: "/perpustakaan"
    },
    {
      icon: "fas fa-mosque",
      title: "Fasilitas",
      desc: "Kampus",
      link: "/fasilitas"
    }
  ];

  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <Slider {...sliderSettings} className="h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-transparent">
                <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Features Grid */}
      <section className="py-8 -mt-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <Link 
                key={index}
                to={feature.link}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <i className={`${feature.icon} text-3xl text-gray-800 mb-4 group-hover:scale-110 transition-transform`}></i>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50 relative -mt-15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mengapa memilih kost putra farid pekanbaru?
            </h2>
            <p className="text-lg text-gray-600">
              Tempat tinggal yang nyaman dan aman.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="https://alwafi.ac.id/img/webp/gambar-asesmen-lapangan-edit.webp"
                    alt="Manajemen Pendidikan Islam"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Manajemen Pendidikan Islam (S1)
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Program Studi Manajemen Pendidikan Islam (MPI) didirikan untuk menghasilkan 
                    lulusan sarjana (S1) dengan gelar S.Pd. yang kompeten dalam mengelola 
                    pendidikan berbasis nilai-nilai keislaman.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Karakter C5U:</h4>
                    <p className="text-sm text-gray-600">
                      <strong>Credible, Capable, Confidence, Communicative, Creative</strong> 
                      dan menjadi teladan (<strong>Uswah</strong>) di masyarakat.
                    </p>
                  </div>
                  <Link to="/program-studi" className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600">
                    Pelajari lebih lanjut
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Promosi Beasiswa & Diskon Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span
              className="inline-block px-5 py-1.5 mb-5 text-sm font-semibold rounded-full shadow-lg"
              style={{ background: "#EDE9E3", color: "#6B4F27", letterSpacing: "0.1em" }}
            >
              Promo Spesial Tahun Ajaran 2025/2026
            </span>
            <h2 className="text-4xl font-extrabold mb-5 text-gray-900 leading-tight">
              <span style={{ color: "#6B4F27" }}>Harga Kamar Kost</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Indah itu ketika mendapatkan harga yang sangat worth it untuk sebuah kost yang nyaman dan aman.
              Pesan <span style={{ color: "#6B4F27", fontWeight: 600 }}>kamar kostmu</span> sekarang.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Assalamualaikum%2C+saya+ingin+info+beasiswa+STIT+Al+Wafi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 text-lg"
              style={{
                background: "#6B4F27",
                color: "#fff",
              }}
            >
              <i className="fab fa-whatsapp mr-3 text-2xl"></i>
              Hubungi Admin Sekarang
            </a>
          </div>
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beasiswa Alumni WIIBS */}
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <i className="fas fa-user-graduate text-4xl mb-5" style={{ color: "#6B4F27" }}></i>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Beasiswa Alumni WIIBS</h3>
              <ul className="text-gray-600 text-left mb-2 space-y-1">
                <li><i className="fas fa-check-circle mr-2" style={{ color: "#6B4F27" }}></i>Beasiswa untuk Alumni Al-Wafi Islamic boarding school</li>
                <li><i className="fas fa-check-circle mr-2" style={{ color: "#6B4F27" }}></i>100% gratis biaya perkuliahan</li>
                <li><i className="fas fa-check-circle mr-2" style={{ color: "#6B4F27" }}></i>Bersedia mengikuti program beasiswa hingga selesai</li>
                <li><i className="fas fa-check-circle mr-2" style={{ color: "#6B4F27" }}></i>Memiliki prestasi akademik atau non-akademik</li>
                <li><i className="fas fa-check-circle mr-2" style={{ color: "#6B4F27" }}></i>Aktif dalam kegiatan keagamaan dan sosial</li>
              </ul>
              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: "#F5F3F0", color: "#6B4F27" }}>
                100% Gratis
              </span>
            </div>
            {/* Beasiswa S1 untuk Penghafal Al Quran */}
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <i className="fas fa-book-reader text-4xl mb-5" style={{ color: "#6B4F27" }}></i>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Beasiswa S1 untuk Penghafal Al Quran</h3>
              <div className="text-gray-600 text-left mb-2 space-y-1">
                <h4 className="font-semibold mb-1">Komponen:</h4>
                <ul className="list-disc list-inside">
                  <li>Bebas biaya perkuliahan selama 4 tahun (8 semester).</li>
                  <li>Program pembinaan khusus bagi mahasiswa hafizh Al-Qur’an.</li>
                  <li>Kesempatan magang dan pengabdian di lembaga pendidikan Islam.</li>
                </ul>
                <h4 className="font-semibold mt-3 mb-1">Syarat:</h4>
                <ul className="list-disc list-inside">
                  <li>Berusia maksimal 22 tahun pada saat pendaftaran.</li>
                  <li>Memiliki hafalan minimal 20 Juz Al-Qur'an.</li>
                  <li>Lulus pendidikan menengah atas (SMA/MA/pondok pesantren atau sederajat).</li>
                  <li>Memiliki surat rekomendasi dari lembaga pendidikan atau pesantren tempat menghafal Al-Qur’an.</li>
                  <li>Bersedia mengikuti program beasiswa hingga selesai.</li>
                </ul>
              </div>
              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: "#F5F3F0", color: "#6B4F27" }}>
                100% Gratis
              </span>
            </div>
            {/* Beasiswa untuk Kader Pesantren */}
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <i className="fas fa-user-shield text-4xl mb-5" style={{ color: "#6B4F27" }}></i>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Beasiswa untuk Kader Pesantren</h3>
              <div className="text-gray-600 text-left mb-2 space-y-1">
                <h4 className="font-semibold mb-1">Komponen:</h4>
                <ul className="list-disc list-inside">
                  <li>Bebas biaya perkuliahan selama 4 tahun (8 semester).</li>
                  <li>Program pembinaan khusus bagi mahasiswa hafizh Al-Qur’an.</li>
                  <li>Kesempatan magang dan pengabdian di lembaga pendidikan Islam.</li>
                </ul>
                <h4 className="font-semibold mt-3 mb-1">Syarat:</h4>
                <ul className="list-disc list-inside">
                  <li>Muslim/muslimah usia maksimal 25 tahun.</li>
                  <li>Hafal minimal 3 juz Al-Qur’an (dibuktikan dengan sertifikat atau rekomendasi).</li>
                  <li>Lulusan SMA/sederajat dengan nilai rata-rata minimal 75.</li>
                  <li>Memiliki rekomendasi resmi dari pesantren pengirim.</li>
                  <li>Berkomitmen untuk kembali mengabdi di pesantren setelah menyelesaikan studi.</li>
                </ul>
              </div>
              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: "#F5F3F0", color: "#6B4F27" }}>
                50% Gratis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600" 
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Mulai Perjalanan Akademik Anda
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Bergabunglah dengan STIT Al Wafi Bogor dan wujudkan impian Anda
            </p>
            <Link to="/daftar" className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section - Redesigned */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lokasi Kost <span className="text-blue-600">Putra Farid Pekanbaru</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan lokasi kost kami yang strategis di Daerah Pekanbaru
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-2/3">
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.984693592425!2d101.4637227!3d0.4488184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5af005d35914f%3A0x5fe1173b41857f24!2sKost%20Putra%20Farid!5e0!3m2!1sen!2sid!4v{{timestamp}}"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="STIT Al Wafi Location"
                  className="min-h-[400px]"
                ></iframe>
              </div>
            </div>

            <div className="w-full lg:w-1/3 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Alamat</h3>
                  <p className="text-gray-600">
                    Jl. Air Dingin Ujung Simpang Tiga disamping Kantor KUA Bukit Raya, Kec. Bukit Raya, Kota Pekanbaru, Riau 28282
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Kontak</h3>
                  <p className="text-gray-600">+62 852 1544 2596 (WhatsApp Only)</p>
                  <p className="text-gray-600">+62 812 7608 593</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Jam Operasional</h3>
                  <p className="text-gray-600">Senin - Minggu: 08.00 - 20.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/maps/place/Kost+Putra+Farid/@0.4488184,101.4637227,96m/data=!3m1!1e3!4m6!3m5!1s0x31d5af005d35914f:0x5fe1173b41857f24!8m2!3d0.4486776!4d101.4636514!16s%2Fg%2F11mdf9dly1?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;