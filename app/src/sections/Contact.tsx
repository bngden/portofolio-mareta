import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/6282245885315',
    color: 'hover:bg-green-500/10 hover:text-green-600 hover:border-green-300',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/justwithtata/',
    color: 'hover:bg-pink-500/10 hover:text-pink-600 hover:border-pink-300',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/maretaeka',
    color: 'hover:bg-blue-500/10 hover:text-blue-600 hover:border-blue-300',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:maretaeka26@email.com',
    color: 'hover:bg-amber-500/10 hover:text-amber-600 hover:border-amber-300',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[70vh] py-24 px-6 lg:px-8 relative flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-mint/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <p className="text-sage-500 text-sm font-medium tracking-wider uppercase mb-3">
          Hubungi Saya
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-800 mb-4">
          Mari Berkolaborasi
        </h2>
        <p className="text-sage-600/80 mb-12 max-w-lg mx-auto">
          Tertarik untuk berdiskusi tentang pendidikan inklusi atau ingin
          mengajak kolaborasi? Saya selalu terbuka untuk percakapan yang bermakna.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full bg-white/60 border border-sage/15 flex items-center justify-center text-sage-600 transition-all duration-300 shadow-soft ${link.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-clickable
              aria-label={link.name}
            >
              <link.icon size={22} />
            </motion.a>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="bg-white/30 backdrop-blur-sm border border-sage/10 rounded-2xl p-6 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sage-700/80 italic text-sm leading-relaxed">
            &ldquo;Bersama-sama, kita bisa menciptakan dunia yang lebih inklusif
            di mana setiap anak memiliki kesempatan untuk bersinar.&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-sage-500 text-xs">
            <Heart size={12} className="fill-sage-400" />
            <span>Mareta Eka Witanto Putri</span>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="mt-12 text-xs text-sage-500/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Mareta Eka Witanto Putri. Dibuat dengan dedikasi untuk pendidikan inklusif.
        </motion.p>
      </motion.div>
    </section>
  );
}
