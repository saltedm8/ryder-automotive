"use client";

import { useState } from "react";

const DEFAULT_APR = 13.9;

function calculateMonthly(principal: number, deposit: number, months: number, apr: number): number {
  const p = Math.max(0, principal - deposit);
  if (p <= 0 || months <= 0) return 0;
  const r = apr / 100 / 12;
  return (p * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

export default function FinanceCalculator() {
  const [price, setPrice] = useState(5000);
  const [deposit, setDeposit] = useState(500);
  const [months, setMonths] = useState(48);
  const [apr] = useState(DEFAULT_APR);

  const principal = Math.max(0, price - deposit);
  const monthly = calculateMonthly(price, deposit, months, apr);
  const totalRepay = monthly * months;

  return (
    <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded">
      <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
        Finance Calculator
      </h3>
      <p className="text-charcoal-400 text-sm mb-4">
        Estimate your monthly payments. Representative APR {apr}%. Subject to status.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-charcoal-400 text-sm mb-1">Cash price (£)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value) || 0)}
            min={500}
            max={50000}
            step={100}
            className="input-dark"
          />
        </div>
        <div>
          <label className="block text-charcoal-400 text-sm mb-1">Deposit (£)</label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value) || 0)}
            min={0}
            max={price}
            step={100}
            className="input-dark"
          />
        </div>
        <div>
          <label className="block text-charcoal-400 text-sm mb-1">Term (months)</label>
          <select
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="select-dark"
          >
            <option value={24}>24 months</option>
            <option value={36}>36 months</option>
            <option value={48}>48 months</option>
            <option value={60}>60 months</option>
          </select>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-charcoal-800">
        <div className="flex justify-between text-charcoal-400 text-sm mb-1">
          <span>Amount to finance</span>
          <span>£{principal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-white font-bold text-xl mt-2">
          <span>Est. monthly</span>
          <span className="text-gold-400">£{monthly.toFixed(2)}</span>
        </div>
        <p className="text-charcoal-500 text-xs mt-2">
          Total repayable £{totalRepay.toLocaleString(undefined, { minimumFractionDigits: 2 })}. For illustration only.
        </p>
      </div>
    </div>
  );
}
