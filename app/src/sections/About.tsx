import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Lightbulb } from 'lucide-react';

const aboutImages = [
  '/images/about-1.jpeg',
  '/images/about-2.jpeg',
  '/images/about-3.jpeg',
];

const values = [
  {
    icon: Heart,
    title: 'Empati',
    desc: 'Memahami dan menghargai perjalanan unik setiap anak',
  },
  {
    icon: Users,
    title: 'Inklusi',
    desc: 'Menciptakan ruang belajar yang merangkul perbedaan',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi',
    desc: 'Mengembangkan metode kreatif untuk pembelajaran aksesibel',
  },
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen py-24 px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sage-500 text-sm font-medium tracking-wider uppercase mb-3">

          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-800">
            Tentang Saya
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Photo Slider */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <AnimatePresence mode="sync">
                <motion.img
                  key={currentImageIndex}
                  src={aboutImages[currentImageIndex]}
                  alt={`About photo ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage/30 to-transparent pointer-events-none" />

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/70'
                      }`}
                    data-clickable
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-mint/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-sage/20 rounded-full -z-10" />
          </motion.div>

          {/* Right - Profile Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-sage-700/85 leading-relaxed">
              <p className="text-lg">
                Saya <strong className="text-sage-800">Mareta Eka Witanto Putri</strong>,
                seorang praktisi pendidikan khusus yang berdedikasi untuk menciptakan
                lingkungan belajar inklusif di mana setiap anak terlepas dari kemampuan
                atau latar belakang mereka dapat berkembang dengan penuh percaya diri.
              </p>

              <p>
                Perjalanan saya dalam dunia pendidikan inklusi dimulai dari keyakinan
                mendalam bahwa perbedaan bukanlah hambatan, melainkan kekuatan yang
                memperkaya proses pembelajaran bagi semua pihak. Setiap anak memiliki
                potensi unik yang perlu didukung dengan pendekatan yang tepat, penuh
                empati, dan dipersonalisasi sesuai kebutuhannya.
              </p>

              <p>
                Melalui berbagai pelatihan dan pengalaman langsung di lapangan, saya
                terus mengembangkan metode-metode kreatif untuk menjangkau anak-anak
                dengan kebutuhan khusus mulai dari penggunaan bahasa isyarat, terapi
                kerajinan tangan, hingga program-program inklusi yang membangun jembatan
                antara anak berkebutuhan khusus dan masyarakat luas.
              </p>

              <p className="italic text-sage-600 border-l-4 border-mint pl-4">
                &ldquo;Pendidikan yang benar-benar bermakna adalah yang mampu mencapai
                setiap jiwa, tanpa terkecuali.&rdquo;
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  className="bg-sage/5 border border-sage/10 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <value.icon className="w-6 h-6 text-sage-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-sage-800 text-sm mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-sage-600/70">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
