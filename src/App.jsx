import Hero from './components/Hero';
import TrustSecurity from './components/TrustSecurity';
import Features from './components/Features';
import FinalCTA from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] antialiased">
      {/* Top navigation (minimal) */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#0f172a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-emerald-500" />
            <span className="font-geist text-sm font-medium text-white">AI Stock Analyst</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#get-started" className="hover:text-white">Get Started</a>
            <a href="#" className="rounded-md bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Sign In</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustSecurity />
        <div id="features">
          <Features />
        </div>
        <FinalCTA />
      </main>

      <footer className="border-t border-white/5 bg-[#0f172a] py-8 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} AI Stock Analyst. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
