import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleTilt = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
  }, []);

  const handleTiltReset = useCallback(() => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
  }, []);

  const playChime = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      oscillator.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
      oscillator.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5

      gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.5);
    } catch {
      // Audio not supported, silently fail
    }
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 lg:px-8 pt-20"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mint/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column - Text */}
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="text-sm md:text-base font-medium text-sage-600 mb-4 tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Halo, saya
          </motion.p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-800 mb-2 min-h-[1.2em]">
            <TypeAnimation
              sequence={[
                'Mareta Eka Witanto Putri',
                3000,
                '',
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-mint-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Special Education Practitioner
            <br />
            <span className="text-sage-500 font-normal text-lg md:text-xl">
              & Inclusive Educator
            </span>
          </motion.h2>

          <motion.p
            className="text-sage-700/80 max-w-lg mx-auto lg:mx-auto text-sm md:text-base mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Setiap anak berhak mendapatkan pendidikan yang bermakna.
            Saya percaya pada kekuatan inklusi, empati, dan pendekatan
            personal untuk membantu setiap individu berkembang.
          </motion.p>

          <motion.button
            onClick={scrollToPortfolio}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-sage hover:bg-sage-600 text-white font-medium rounded-full transition-colors shadow-soft hover:shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-clickable
          >
            Lihat Portofolio
            <ArrowDown size={18} />
          </motion.button>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div
            className="relative"
            onMouseMove={handleTilt}
            onMouseLeave={handleTiltReset}
            style={{ perspective: '1000px' }}
          >
            {/* Animated organic shape container */}
            <div
              ref={imageRef}
              className="relative w-72 h-72 md:w-96 md:h-96 transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Organic morphing shape */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                }}
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '30% 60% 70% 40% / 50% 60% 30% 60%',
                    '50% 60% 30% 60% / 30% 60% 70% 40%',
                    '60% 40% 60% 30% / 60% 30% 40% 70%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="/images/hero-portrait.jpeg"
                  alt="Mareta Eka Witanto Putri"
                  className="w-full h-full object-cover"
                  onClick={playChime}
                  data-clickable
                />
                {/* Soft overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent pointer-events-none" />
              </motion.div>

              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-4 border-2 border-mint/30 rounded-full pointer-events-none"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                }}
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '40% 60% 70% 30% / 40% 50% 60% 50%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Floating hint */}
            <motion.p
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-sage-500/60 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Klik foto untuk dengar suara
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-sage/40 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-sage/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
