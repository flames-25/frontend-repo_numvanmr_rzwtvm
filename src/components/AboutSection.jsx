import React from 'react';

export default function AboutSection() {
  const steps = [
    {
      title: 'List surplus food',
      text: 'Donors add details like quantity, pickup time, and location so nearby NGOs can respond quickly.',
    },
    {
      title: 'NGOs request pickup',
      text: 'Verified NGOs browse available food, request pickup, and coordinate handoff seamlessly.',
    },
    {
      title: 'Rescue & distribute',
      text: 'Volunteers collect the food and distribute it safely to people who need it the most.',
    },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-manrope text-3xl font-extrabold text-gray-900 md:text-4xl">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            FoodRescueAI connects food donors with NGOs to reduce waste and fight hunger. It’s fast, transparent, and free.
          </p>
          <div className="mt-8 grid gap-5">
            {steps.map((s, i) => (
              <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-1 text-sm font-semibold text-emerald-600">Step {i + 1}</div>
                <div className="text-lg font-semibold text-gray-900">{s.title}</div>
                <div className="mt-1 text-gray-600">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 animate-pulse rounded-full bg-emerald-200/60 blur-2xl" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-56 w-56 animate-[spin_14s_linear_infinite] rounded-full border-8 border-emerald-400/30" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 animate-[spin_8s_linear_infinite] rounded-full border-8 border-emerald-500/40 border-t-transparent" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-emerald-700">
            Gentle 3D-inspired motion illustrates helping hands and shared meals.
          </div>
        </div>
      </div>
    </section>
  );
}
