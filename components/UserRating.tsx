'use client';

import { useState } from 'react';

export function UserRating() {
  const [value, setValue] = useState(4);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-700">Rate your experience</p>
      <div className="mt-2 flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => {
          const score = index + 1;
          return (
            <button
              key={score}
              type="button"
              aria-label={`Rate ${score} star`}
              onClick={() => setValue(score)}
              className={score <= value ? 'text-amber-400' : 'text-slate-300'}
            >
              ★
            </button>
          );
        })}
      </div>
      <p className="mt-1 text-xs text-slate-500">Your current rating: {value}/5</p>
    </div>
  );
}
