'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ryder-demo-banner-dismissed';

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(() =>
    typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === '1'
  );

  useEffect(() => {
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === '1');
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className="sticky top-0 z-[9999] flex items-center justify-center gap-4 px-4 py-2 bg-amber-500 text-charcoal-950 font-semibold text-sm shadow-md"
    >
      <span>This is a demo and not the live website</span>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss demo notice"
        className="rounded px-2 py-1 bg-black/20 hover:bg-black/30 transition-colors text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
