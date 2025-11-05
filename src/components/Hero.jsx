import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const accent = '#10b981';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityParallax = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden bg-[#0f172a] text-white">
      {/* Background glow + grid with parallax */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0',
          }}
        />
      </motion.div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 pt-28 md:flex-row md:gap-12 md:px-10">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full md:w-1/2"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Futuristic paper trading for Zerodha users</span>
          </div>
          <h1 className="font-geist text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Stop Guessing. <span className="text-emerald-400">Start Simulating.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            AI Stock Analyst is the only paper trading sandbox that syncs with your live Zerodha portfolio.
            Practice on a 1:1 risk-free copy of your real holdings.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-base font-medium text-[#0b1220] shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              style={{ backgroundColor: accent }}
            >
              Start Trading for Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              Watch a 60s demo
            </button>
          </div>
        </motion.div>

        {/* Right: Visual - mock dashboard with subtle zoom/pan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-full md:w-1/2"
        >
          <motion.div
            aria-label="AI Stock Analyst dashboard preview"
            className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] shadow-2xl"
            animate={{ scale: [1.02, 1.06, 1.02], x: [0, -6, 0], y: [0, 4, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
            <div className="flex h-full w-full">
              {/* Chat side */}
              <div className="flex w-2/5 flex-col border-r border-white/10 bg-[#0d1525]/70 p-4 backdrop-blur">
                <div className="mb-3 h-2 w-16 rounded bg-white/10" />
                <div className="mb-4 flex-1 space-y-3 overflow-hidden">
                  <div className="h-16 rounded-md bg-white/5" />
                  <div className="h-16 rounded-md bg-white/5" />
                  <div className="h-16 rounded-md bg-white/5" />
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <div className="h-9 flex-1 rounded-md bg-white/5" />
                  <div className="h-9 w-9 rounded-md bg-emerald-500/80" />
                </div>
              </div>
              {/* Portfolio side */}
              <div className="flex w-3/5 flex-col p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="mb-4 h-8 w-40 rounded bg-white/10" />
                <div className="mb-4 grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-md bg-white/5" />
                  <div className="h-24 rounded-md bg-white/5" />
                  <div className="h-24 rounded-md bg-white/5" />
                </div>
                <div className="grid flex-1 grid-cols-5 gap-3">
                  <div className="col-span-3 rounded-md bg-white/5" />
                  <div className="col-span-2 space-y-3">
                    <div className="h-20 rounded-md bg-white/5" />
                    <div className="h-20 rounded-md bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
