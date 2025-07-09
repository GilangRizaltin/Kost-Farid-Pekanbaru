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

  const lecturers = [
  {
    name: "Prof. Mohd. Zambri bin Jaafar",
    expertise: "Manajemen Pendidikan",
    photo: "https://ui-avatars.com/api/?name=Prof+Mohd+Zambri+bin+Jaafar&background=E5E7EB&color=374151&size=128",
    title: "Guru Besar"
  },
  {
    name: "Prof. Maila Dinia Husni Rahiem, M.A., Ph.D.",
    expertise: "Manajemen PAUD",
    photo: "https://ui-avatars.com/api/?name=Prof+Maila+Dinia+Husni+Rahiem&background=E5E7EB&color=374151&size=128",
    title: "Guru Besar"
  },
  {
    name: "Dr. Ali Saman Hasan, Lc., LL.M., M.A.",
    expertise: "Manajemen Pondok Pesantren",
    photo: "https://alwafi.ac.id/img/webp/pp-data0=ust_ali.webp",
    title: "Ketua STIT"
  },
  {
    name: "Dr. Marullah Marzuq, M.Ag., LL.M.",
    expertise: "Metodologi Pembelajaran PAUD",
    photo: "https://ui-avatars.com/api/?name=Dr+Marullah+Marzuq&background=E5E7EB&color=374151&size=128",
    title: "Dosen Senior"
  },
  {
    name: "Kartiko Adi Pramono, Dipl.Ing.HTL.ACMC",
    expertise: "Teknologi Pendidikan",
    photo: "https://ui-avatars.com/api/?name=Kartiko+Adi+Pramono&background=E5E7EB&color=374151&size=128",
    title: "Dosen"
  },
  {
    name: "Eri Kusmar, S.H., M.Env. Mgmt",
    expertise: "Manajemen Lingkungan & Sumber Daya",
    photo: "https://ui-avatars.com/api/?name=Eri+Kusmar&background=E5E7EB&color=374151&size=128",
    title: "Dosen"
  },
  {
    name: "Muhammad Bakri Rahimin, Lc., M.E",
    expertise: "Ekonomi Syariah",
    photo: "https://ui-avatars.com/api/?name=Muhammad+Bakri+Rahimin&background=E5E7EB&color=374151&size=128",
    title: "Dosen"
  },
  {
    name: "Suworo, M.M",
    expertise: "Manajemen",
    photo: "https://ui-avatars.com/api/?name=Suworo&background=E5E7EB&color=374151&size=128",
    title: "Dosen"
  },
  {
    name: "Muhammad Asadullah, B.A., M.H.",
    expertise: "Syariah",
    photo: "https://ui-avatars.com/api/?name=Muhammad+Asadullah&background=E5E7EB&color=374151&size=128",
    title: "Dosen"
  },
  {
    name: "Dr.(c) Fortin Sri Haryani, M.Pd.",
    expertise: "Manajemen Pendidikan",
    photo: "https://ui-avatars.com/api/?name=Fortin+Sri+Haryani&background=E5E7EB&color=374151&size=128",
    title: "Dosen"
  },
  {
    name: "Sri Kartini, S.Pd., M.Pd.",
    expertise: "Pengembangan Kurikulum",
    photo: "https://ui-avatars.com/api/?name=Sri+Kartini&background=E5E7EB&color=374151&size=128",
    title: "Dosen"
  },
];



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

  const achievements = [
    {
      number: "A",
      label: "Akreditasi",
      desc: "BAN-PT"
    },
    {
      number: "2000+",
      label: "Alumni",
      desc: "Tersebar di Indonesia"
    },
    {
      number: "50+",
      label: "Dosen",
      desc: "Berkualifikasi S2/S3"
    },
    {
      number: "100%",
      label: "Lulusan",
      desc: "Terserap Dunia Kerja"
    }
  ];

  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);

  return (
    <div className="min-h-screen">
      {/* Modal Promosi Beasiswa */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <div className="relative bg-white rounded-xl w-full max-w-md mx-auto overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white h-12 w-12 rounded-full p-2 transition-all"
            >
              <i className="fas fa-times text-xl text-gray-700"></i>
            </button>
            
            {/* Square Image Slider */}
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              <div className="absolute inset-0">
                <Slider 
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={2500}
                  arrows={false}
                  className="h-full"
                  dotsClass="slick-dots-bottom" // Custom class for dots
                >
                  <div className="h-full">
                    <img 
                      src="/images/beasiswa2.jpg" 
                      alt="Beasiswa 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full">
                    <img 
                      src="/images/beasiswa1.jpg" 
                      alt="Beasiswa 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Slider>
                
                {/* Overlay Gradient - now shorter to make space for button */}
                <div className="absolute bottom-16 left-0 right-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </div>
            
          </div>
          {/* Button at Bottom Center - now with more spacing */}
          <div className="absolute bottom-32 left-0 right-0 flex justify-center z-10 px-4">
              <Link 
                to="/kemahasiswaan/beasiswa"
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base sm:px-8 sm:py-3"
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                SYARAT & DAFTAR
              </Link>
            </div>
        </div>
      )}
      
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

      {/* Sambutan Ketua Section */}

      {/* Sambutan Ketua Section */}
      <section className="py-20 bg-gray-50 relative isolate">
        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="md:flex">
              {/* Foto Ketua */}
              <div className="md:w-1/3 p-8 flex flex-col items-center justify-center bg-gray-800 relative overflow-hidden">
                {/* Mosque pattern overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mosque.png')] opacity-20"></div>
                <div className="absolute inset-0 bg-black/30"></div>
                
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg mb-6 relative z-10">
                  <img
                    src="https://alwafi.ac.id/img/webp/pp-data0=ust_ali.webp"
                    alt="Dr. Ali Saman Hasan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">Dr. Ali Saman Hasan, Lc., LL.M., M.A.</h3>
                  <p className="text-yellow-400 font-medium">Ketua STIT Al Wafi Bogor</p>
                </div>
              </div>
              
              {/* Sambutan */}
              <div className="md:w-2/3 p-8 md:p-12 bg-white">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    <span className="pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-yellow-500">
                      Sambutan Ketua
                    </span>
                  </h2>
                </div>
                
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <blockquote className="border-r-4 border-yellow-500 pr-4 italic text-gray-800 font-medium text-xl mb-6 text-right font-serif">
                    "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
                  </blockquote>
                  
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Dengan izin Allah Subhanahu wa Ta'ala, STIT Al Wafi Bogor hadir untuk membentuk pendidik Islami yang menguasai ilmu pengetahuan modern sekaligus berpegang teguh pada nilai-nilai Al-Qur'an dan Sunnah.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-500">
                    <p className="font-semibold text-gray-900 mb-1 font-arabic">الرؤية (Visi):</p>
                    <p className="text-gray-800 italic">
                      "Menjadi lembaga pendidikan tinggi Islam unggulan yang menghasilkan pendidik profesional dan berakhlak mulia pada tahun 2034."
                    </p>
                  </div>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Program Studi Manajemen Pendidikan Islam (MPI) kami dirancang khusus untuk mencetak sarjana pendidikan yang tidak hanya kompeten secara akademik tetapi juga memiliki karakter <span className="text-yellow-600 font-medium">C5U</span> (Credible, Capable, Confidence, Communicative, Creative, dan Uswah).
                  </p>

                  <div className="pt-4 border-t border-gray-200 mt-6">
                    <p className="text-right italic text-gray-800 font-medium font-serif">
                      وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Program Studi
            </h2>
            <p className="text-lg text-gray-600">
              Manajemen Pendidikan Islam - Mencetak Pendidik Profesional Berkarakter Islami
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

      {/* Pengajar Profesional Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
        {/* Islamic SVG pattern background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="26" fill="none" stroke="#60a5fa" strokeWidth="2" />
                <circle cx="30" cy="30" r="12" fill="none" stroke="#facc15" strokeWidth="2" />
                <line x1="30" y1="4" x2="30" y2="56" stroke="#60a5fa" strokeWidth="1"/>
                <line x1="4" y1="30" x2="56" y2="30" stroke="#60a5fa" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pengajar <span className="text-blue-700">Profesional</span> &amp; <span className="text-yellow-600">Inspiratif</span>
            </h2>
            <p className="text-lg text-gray-600">
              Dosen-dosen STIT Al Wafi adalah para ahli di bidangnya, berpengalaman nasional &amp; internasional, siap membimbing Anda menjadi pendidik unggul.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {lecturers.map((lect, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative mb-4">
                  <img
                    src={lect.photo}
                    alt={lect.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-0 right-0 bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-full shadow font-semibold">
                    {lect.title}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{lect.name}</h3>
                <div className="text-blue-700 font-medium text-sm mb-2">{lect.expertise}</div>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                  {/* Bintang rating visual */}
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-xs text-gray-400">Pengalaman &amp; Dedikasi</span>
              </div>
            ))}
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
              <span style={{ color: "#6B4F27" }}>Beasiswa Kuliah Gratis</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Raih kesempatan istimewa untuk menempuh pendidikan tinggi di STIT Al Wafi Bogor!  
              Dapatkan <span style={{ color: "#6B4F27", fontWeight: 600 }}>beasiswa kuliah gratis</span> untuk tahun ajaran <span className="font-semibold" style={{ color: "#6B4F27" }}>2025/2026</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <div
                className="flex items-center px-5 py-2 rounded-lg font-semibold shadow border border-gray-300"
                style={{ background: "#F5F3F0", color: "#6B4F27" }}
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Beasiswa Full
              </div>
            </div>
            <p className="text-md text-gray-600 mb-10">
              Kuota terbatas! Segera hubungi admin kami untuk informasi lebih lanjut dan konsultasi pendaftaran.
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
              Lokasi Kampus <span className="text-blue-600">STIT Al Wafi</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan lokasi kampus kami yang strategis di Kabupaten Bogor
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-2/3">
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.095095927011!2d106.81999999999999!3d-6.595000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c123456789ab%3A0x123456789abcdef!2sSTIT%20Al%20Wafi%20Bogor!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid"
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Alamat Kampus</h3>
                  <p className="text-gray-600">
                    Jl. Raya Arco No.1 RT. 02 / RW. 01, Ragamukti, Citayam, 
                    Kec. Tajur Halang, Kabupaten Bogor, Jawa Barat 16320
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
                  <p className="text-gray-600">+62 123 4567 890</p>
                  <p className="text-gray-600">info@stit-alwafi.ac.id</p>
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
                  <p className="text-gray-600">Senin - Jumat: 08.00 - 16.00 WIB</p>
                  <p className="text-gray-600">Sabtu: 08.00 - 14.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://maps.google.com?q=STIT+Al+Wafi+Bogor" 
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