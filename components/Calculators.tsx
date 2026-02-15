'use client';

import { useMemo, useState } from 'react';

export function Calculators() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(5);

  const emi = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const totalMonths = years * 12;
    const value =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Number.isFinite(value) ? value : 0;
  }, [amount, rate, years]);

  const totalPayable = emi * years * 12;

  return (
    <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-card md:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Interactive EMI Calculator</h3>
        <label className="block text-sm font-medium text-slate-600">
          Loan Amount (₹)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm font-medium text-slate-600">
          Interest Rate (%)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm font-medium text-slate-600">
          Tenure (Years)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="rounded-xl bg-brand-50 p-6">
        <p className="text-sm text-slate-600">Estimated Monthly EMI</p>
        <p className="mt-1 text-3xl font-bold text-brand-700">₹ {emi.toFixed(0)}</p>
        <p className="mt-4 text-sm text-slate-600">Total Payable</p>
        <p className="text-2xl font-semibold text-slate-900">₹ {totalPayable.toFixed(0)}</p>
        <p className="mt-4 text-xs text-slate-500">
          Real-time updates with instant mobile-friendly feedback.
        </p>
      </div>
    </div>
  );
}
