import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
  role: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Pelatihan Bahasa Isyarat SIBI',
    organization: 'PELUBIA',
    year: '2025',
    description:
      'Mengikuti pelatihan intensif Bahasa Isyarat Indonesia (SIBI) yang diselenggarakan oleh PELUBIA. Program ini memberikan keterampilan komunikasi melalui isyarat yang esensial untuk berinteraksi dengan anak-anak tunarungu dan memfasilitasi proses pembelajaran yang lebih inklusif.',
    image: '/images/portfolio-sibi.jpeg',
    role: 'Peserta Pelatihan',
  },
  {
    id: 2,
    title: 'Pelatihan Bahasa Isyarat GEMPITA',
    organization: 'GEMPITA',
    year: '2025',
    description:
      'Berpartisipasi dalam pelatihan bahasa isyarat oleh GEMPITA untuk memperdalam pemahaman tentang metode komunikasi non-verbal. Pengalaman ini memperkuat kemampuan dalam menyampaikan materi pembelajaran yang aksesibel bagi siswa dengan berbagai kebutuhan.',
    image: '/images/portfolio-gempita1.jpeg',
    role: 'Peserta Aktif',
  },
  {
    id: 3,
    title: 'IMAGUM Back to School',
    organization: 'SDN 1 Sambijajar',
    year: '2025',
    description:
      'Berkontribusi dalam program &ldquo;Back to School&rdquo; di SDN 1 Sambijajar melalui inisiatif IMAGUM. Program ini bertujuan menyambut kembali siswa, termasuk yang memiliki kebutuhan khusus, ke lingkungan sekolah yang mendukung dan ramah inklusi.',
    image: '/images/portfolio-imagum.jpeg',
    role: 'Fasilitator Program',
  },
  {
    id: 4,
    title: 'Pelatihan Kerja Kerajinan Tangan Meronce',
    organization: 'SLB YPAC Malang',
    year: '2025',
    description:
      'Mengampu pelatihan kerajinan tangan meronce di SLB YPAC Malang. Kegiatan ini dirancang untuk mengembangkan keterampilan motorik halus siswa, meningkatkan fokus dan kreativitas, serta membuka peluang kewirausahaan di masa depan.',
    image: '/images/portfolio-kerajinan1.jpeg',
    role: 'Instruktur Pelatihan',
  },
];

export default function PortfolioMap() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section id="portfolio" className="min-h-screen py-24 px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sage-500 text-sm font-medium tracking-wider uppercase mb-3">
            Perjalanan Saya
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-800 mb-4">
            Jejak Pengalaman
          </h2>
          <p className="text-sage-600/80 max-w-2xl mx-auto">
            Setiap langkah adalah investasi untuk masa depan pendidikan yang lebih inklusif.
            Klik setiap titik untuk melihat detail pengalaman.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* SVG Connecting Line */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 pointer-events-none hidden md:block"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A1BC98" />
                <stop offset="100%" stopColor="#778873" />
              </linearGradient>
            </defs>
            <motion.line
              x1="4"
              y1="0"
              x2="4"
              y2="100%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="8 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </svg>

          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mint to-sage md:hidden" />

          {/* Nodes */}
          <div className="space-y-16 md:space-y-24">
            {portfolioItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isHovered = hoveredNode === item.id;

              return (
                <motion.div
                  key={item.id}
                  className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                      }`}
                  >
                    <motion.div
                      className={`bg-white/50 backdrop-blur-sm border border-sage/10 rounded-2xl p-6 shadow-soft inline-block max-w-md ${isLeft ? 'md:ml-auto' : 'md:mr-auto'
                        }`}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={`flex items-center gap-2 text-sm text-sage-500 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'
                          } justify-start`}
                      >
                        <Calendar size={14} />
                        <span>{item.year}</span>
                        <span className="mx-1">·</span>
                        <MapPin size={14} />
                        <span>{item.organization}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-sage-800 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-sage-600/70 mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      <button
                        onClick={() => setSelectedItem(item)}
                        className={`inline-flex items-center gap-1 text-sm font-medium text-sage-600 hover:text-sage-800 transition-colors ${isLeft ? 'md:flex-row-reverse' : ''
                          }`}
                        data-clickable
                      >
                        {isLeft && <ChevronRight size={16} className="md:rotate-180" />}
                        <span>Selengkapnya</span>
                        {!isLeft && <ChevronRight size={16} />}
                      </button>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.button
                      className={`timeline-node relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered
                          ? 'bg-sage shadow-glow'
                          : 'bg-mint hover:bg-sage'
                        }`}
                      onMouseEnter={() => setHoveredNode(item.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setSelectedItem(item)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      data-clickable
                    >
                      <span className="text-white font-semibold text-sm">
                        {item.id}
                      </span>

                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-mint"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.button>
                  </div>

                  {/* Image Preview (desktop only) */}
                  <motion.div
                    className={`hidden md:block flex-1 ${isLeft ? 'md:pl-12' : 'md:pr-12'
                      }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl shadow-soft max-w-sm ${isLeft ? 'md:mr-auto' : 'md:ml-auto'
                        }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sage/40 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-sage-700">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-900/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-sand rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent" />

                {/* Close button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  data-clickable
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <Calendar size={14} />
                    <span>{selectedItem.year}</span>
                    <span className="mx-1">·</span>
                    <MapPin size={14} />
                    <span>{selectedItem.organization}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-sage/10 rounded-full text-sm font-medium text-sage-700">
                    {selectedItem.role}
                  </span>
                </div>

                <p className="text-sage-700/85 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="mt-6 pt-4 border-t border-sage/10">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-3 bg-sage hover:bg-sage-600 text-white font-medium rounded-xl transition-colors"
                    data-clickable
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
