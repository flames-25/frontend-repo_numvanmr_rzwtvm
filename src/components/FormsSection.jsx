import React, { useState } from 'react';

const initialDonor = { foodName: '', quantity: '', location: '', contact: '' };
const initialNgo = { organization: '', email: '', location: '', verificationId: '' };

export default function FormsSection() {
  const [donor, setDonor] = useState(initialDonor);
  const [ngo, setNgo] = useState(initialNgo);
  const [message, setMessage] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  async function submitDonor(e) {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch(`${backend}/donations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donor),
      });
      if (!res.ok) throw new Error('Failed to save donation');
      setDonor(initialDonor);
      setMessage('Donation submitted successfully!');
    } catch (err) {
      setMessage(err.message);
    }
  }

  async function submitNgo(e) {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch(`${backend}/ngos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ngo),
      });
      if (!res.ok) throw new Error('Failed to register NGO');
      setNgo(initialNgo);
      setMessage('NGO registered successfully!');
    } catch (err) {
      setMessage(err.message);
    }
  }

  return (
    <section id="donate" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-manrope text-3xl font-extrabold text-gray-900 md:text-4xl">Take Action</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">Donate surplus food or register your organization to help distribute it.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={submitDonor} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Donate Food</h3>
          <div className="mt-4 grid gap-4">
            <input value={donor.foodName} onChange={(e)=>setDonor({...donor, foodName:e.target.value})} placeholder="Food Name" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500" required />
            <input value={donor.quantity} onChange={(e)=>setDonor({...donor, quantity:e.target.value})} placeholder="Quantity (e.g., 10 plates)" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500" required />
            <input value={donor.location} onChange={(e)=>setDonor({...donor, location:e.target.value})} placeholder="Pickup Location" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500" required />
            <input value={donor.contact} onChange={(e)=>setDonor({...donor, contact:e.target.value})} placeholder="Contact (phone or email)" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500" required />
          </div>
          <button className="mt-5 w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700">Submit Donation</button>
        </form>

        <form id="ngo" onSubmit={submitNgo} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Register as NGO</h3>
          <div className="mt-4 grid gap-4">
            <input value={ngo.organization} onChange={(e)=>setNgo({...ngo, organization:e.target.value})} placeholder="Organization Name" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500" required />
            <input type="email" value={ngo.email} onChange={(e)=>setNgo({...ngo, email:e.target.value})} placeholder="Email" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500" required />
            <input value={ngo.location} onChange={(e)=>setNgo({...ngo, location:e.target.value})} placeholder="Location" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500" required />
            <input value={ngo.verificationId} onChange={(e)=>setNgo({...ngo, verificationId:e.target.value})} placeholder="Verification ID" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-emerald-500" required />
          </div>
          <button className="mt-5 w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700">Register NGO</button>
        </form>
      </div>

      {message && (
        <div className="mx-auto mt-6 w-full max-w-md rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-emerald-800">
          {message}
        </div>
      )}
    </section>
  );
}
