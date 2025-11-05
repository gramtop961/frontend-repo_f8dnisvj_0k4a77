import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-[#0b1220] py-20 text-white">
      <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h3 className="font-geist text-3xl font-semibold sm:text-4xl">Ready to Trade Smarter?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Sign up in 30 seconds. Connect your Zerodha account. Start making better decisions today.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-base font-medium text-[#0b1220] shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Start for Free
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
