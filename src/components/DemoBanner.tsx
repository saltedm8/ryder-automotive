'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const STORAGE_KEY = 'ryder-demo-banner-dismissed';

export default function DemoBanner() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setMounted(true);
    setDismissed(localStorage.getItem(STORAGE_KEY) === '1');
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem(STORAGE_KEY, '1');
    setDismissed(true);
  };

  if (!mounted || dismissed) return null;

  const banner = (
    <div
      role="alert"
      aria-live="polite"
      className="fixed top-0 left-0 right-0 z-[2147483647] flex items-center justify-center gap-4 px-4 py-2 bg-amber-500 text-charcoal-950 font-semibold text-sm shadow-md"
    >
      <span>This is a demo and not the live website</span>
      <button
        type="button"
        onClick={handleDismiss}
        onMouseDown={handleDismiss}
        aria-label="Dismiss demo notice"
        className="rounded px-2 py-1.5 min-w-[32px] bg-black/20 hover:bg-black/30 transition-colors text-lg leading-none cursor-pointer"
      >
        ×
      </button>
    </div>
  );

  return createPortal(banner, document.body);
}
