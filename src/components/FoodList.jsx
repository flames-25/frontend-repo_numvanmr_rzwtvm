import React, { useEffect, useState } from 'react';

export default function FoodList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const backend = import.meta.env.VITE_BACKEND_URL || '';

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`${backend}/donations`);
        if (res.ok) {
          const data = await res.json();
          setItems(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [backend]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-manrope text-3xl font-extrabold text-gray-900 md:text-4xl">Available Food</h2>
          <p className="mt-1 text-gray-600">Browse recent donations and request pickup.</p>
        </div>
        <a href="#donate" className="hidden rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:block">Donate</a>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-2xl bg-gray-100" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.length === 0 && (
            <div className="col-span-full rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-600">No donations yet. Be the first to contribute!</div>
          )}
          {items.map((it) => (
            <div key={it.id || it._id} className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{it.foodName}</h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">{it.quantity}</span>
              </div>
              <div className="mt-2 text-sm text-gray-600">Location: {it.location}</div>
              <div className="mt-1 text-sm text-gray-600">Contact: {it.contact}</div>
              <button className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:brightness-110">Request Pickup</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
