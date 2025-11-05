import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, LineChart } from 'lucide-react';

const Section = ({ eyebrow, title, description, reverse = false, visual }) => (
  <div className={`relative mx-auto max-w-7xl items-center gap-10 px-6 py-16 md:flex md:px-10 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2"
    >
      <p className="mb-2 text-xs uppercase tracking-widest text-emerald-400/80">{eyebrow}</p>
      <h2 className="font-geist text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-xl text-white/70">{description}</p>
      <ul className="mt-6 space-y-2 text-sm text-white/70">
        <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /><span>Built for Indian markets and Zerodha users</span></li>
        <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" /><span>Fast, accurate sync and instant simulation</span></li>
      </ul>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full md:w-1/2"
    >
      {visual}
    </motion.div>
  </div>
);

function VisualTwin() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 flex items-center justify-between text-white/70">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="text-sm">Zerodha</span>
        </div>
        <div className="text-xs">→</div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="text-sm">AI Stock Analyst</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-white/10 p-4">
          <p className="mb-2 text-xs uppercase tracking-wider text-white/50">Live Holdings</p>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-center justify-between"><span>ASIANPAINT.NS</span><span>40</span></div>
            <div className="flex items-center justify-between"><span>TCS.NS</span><span>15</span></div>
            <div className="flex items-center justify-between"><span>HDFCBANK.NS</span><span>20</span></div>
          </div>
        </div>
        <div className="rounded-lg border border-emerald-500/30 p-4">
          <p className="mb-2 text-xs uppercase tracking-wider text-emerald-300/80">Digital Twin</p>
          <div className="space-y-2 text-sm text-white">
            <div className="flex items-center justify-between"><span>ASIANPAINT.NS</span><span>40</span></div>
            <div className="flex items-center justify-between"><span>TCS.NS</span><span>15</span></div>
            <div className="flex items-center justify-between"><span>HDFCBANK.NS</span><span>20</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualCopilot() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] p-0">
      <div className="flex h-10 items-center gap-3 border-b border-white/10 px-4 text-xs text-white/60">
        <div className="h-2 w-2 rounded-full bg-red-400/60" />
        <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <div className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-3">AI Co-Pilot</span>
      </div>
      <div className="p-4">
        <div className="mb-3 rounded-md bg-white/5 p-3 text-sm text-white/80">
          <span className="mr-1 text-white/40">User:</span>
          {'>'} AI, sell all 40 shares of ASIANPAINT.NS from my paper account.
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-md bg-emerald-500/10 p-3 text-sm text-emerald-300"
        >
          <div className="mb-1 inline-flex items-center gap-1"><MessageSquare className="h-4 w-4" /> Agent</div>
          <div>
            <span className="mr-1">✅ Done.</span> Sold 40 shares of <span className="font-medium text-emerald-200">ASIANPAINT.NS</span> at ₹2512.20.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function VisualTools() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-4 flex items-center gap-3">
        <LineChart className="h-5 w-5 text-emerald-400" />
        <div className="h-4 w-28 rounded bg-white/10" />
      </div>
      <div className="flex gap-4">
        <div className="w-1/2 rounded-lg border border-white/10 p-4">
          <div className="mb-3 flex gap-2 text-xs text-white/60">
            <span className="rounded bg-white/10 px-2 py-1">Holdings</span>
            <span className="rounded bg-white/5 px-2 py-1">Watchlist</span>
            <span className="rounded bg-white/5 px-2 py-1">History</span>
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-center justify-between"><span>INFY.NS</span><span className="text-emerald-400">+1.2%</span></div>
            <div className="flex items-center justify-between"><span>RELIANCE.NS</span><span className="text-red-400">-0.5%</span></div>
            <div className="flex items-center justify-between"><span>HINDUNILVR.NS</span><span className="text-emerald-400">+0.8%</span></div>
          </div>
        </div>
        <div className="w-1/2 space-y-4">
          <div className="h-28 rounded-lg border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-4" />
          <div className="h-28 rounded-lg border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-4" />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="relative bg-[#0f172a] py-8 text-white">
      <Section
        eyebrow="Feature 01"
        title="Sync Your Real Portfolio in One Click."
        description={
          "Stop practicing with fake money on a blank slate. Our platform creates a 'digital twin' of your live Zerodha account. We sync all your holdings, including T1, MTF, ETFs, and your cash balance (even if it's negative) to build the most realistic paper trading environment ever."
        }
        visual={<VisualTwin />}
      />
      <Section
        reverse
        eyebrow="Feature 02"
        title="Your Personal AI Trading Agent."
        description={
          "Powered by Google's Gemini, our AI agent can connect directly to your paper portfolio. Ask it to analyze your holdings, give you recommendations, or even execute paper trades for you using simple chat commands."
        }
        visual={<VisualCopilot />}
      />
      <Section
        eyebrow="Feature 03"
        title="Find Your Next Opportunity."
        description={
          'Don\'t just trade—analyze. Use our built-in market screeners (RSI, EMA) to scan over 15+ NSE indices like Nifty 50 and Bank Nifty. Or, ask the AI to find stocks that match your exact criteria.'
        }
        visual={<VisualTools />}
      />
    </section>
  );
}
