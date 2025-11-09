import React from 'react';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import FormsSection from './components/FormsSection';
import FoodList from './components/FoodList';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-emerald-600" />
          <span className="font-manrope text-lg font-extrabold text-gray-900">FoodRescueAI</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#donate" className="hover:text-gray-900">Donate</a>
          <a href="#ngo" className="hover:text-gray-900">NGO</a>
          <a href="#available" className="hover:text-gray-900">Available</a>
        </nav>
        <a href="#donate" className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">Get Started</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} FoodRescueAI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Contact</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero3D />
      <AboutSection />
      <div id="available">
        <FoodList />
      </div>
      <FormsSection />
      <Footer />
    </div>
  );
}
