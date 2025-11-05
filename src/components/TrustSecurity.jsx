import { motion } from 'framer-motion';
import { Shield, Lock, Trash2 } from 'lucide-react';

export default function TrustSecurity() {
  const items = [
    {
      icon: Shield,
      title: 'Kite Secure Login',
      text: 'You log in only on the official Zerodha website. We never see your credentials.',
    },
    {
      icon: Lock,
      title: '100% Simulated',
      text: 'No real orders are ever placed. This is a risk-free sandbox, guaranteed.',
    },
    {
      icon: Trash2,
      title: 'No Token Storage',
      text: 'Your access token is used once for the initial sync and is immediately discarded.',
    },
  ];

  return (
    <section className="relative bg-[#0f172a] py-12 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-emerald-500/30 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex items-center gap-3">
                <item.icon className="h-5 w-5 text-emerald-400" />
                <h3 className="font-medium text-white">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
