import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const [donations, setDonations] = useState(1280);
  const [ngos, setNgos] = useState(245);

  useEffect(() => {
    const interval = setInterval(() => {
      setDonations((n) => n + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) setNgos((n) => n + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8m2v2c2d4m4Qn7An/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm">
          FoodRescueAI • Reduce waste, feed more
        </span>
        <h1 className="font-manrope text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Connect Food Donors with NGOs in Real Time
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          A simple way for restaurants, events, and homes to donate surplus food — and for NGOs to distribute it fast.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#donate" className="rounded-xl bg-emerald-600 px-6 py-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl">
            Donate Food
          </a>
          <a href="#ngo" className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            Register as NGO
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4">
          <div className="rounded-2xl border border-emerald-100 bg-white/70 p-5 text-left backdrop-blur-md shadow-sm">
            <p className="text-sm text-gray-500">Total food donated</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">
              {donations.toLocaleString()} kg
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white/70 p-5 text-left backdrop-blur-md shadow-sm">
            <p className="text-sm text-gray-500">NGOs registered</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">{ngos.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
