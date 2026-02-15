'use client';

import { useState } from 'react';

interface Entry {
  id: number;
  title: string;
  status: 'Draft' | 'Published';
}

export function AdminCMS() {
  const [entries, setEntries] = useState<Entry[]>([
    { id: 1, title: 'Top AI Tools for Students', status: 'Published' },
    { id: 2, title: 'Loan Comparison Guide', status: 'Draft' }
  ]);
  const [title, setTitle] = useState('');

  return (
    <div className="rounded-2xl bg-white p-6 shadow-card">
      <h3 className="text-xl font-semibold">Admin CMS</h3>
      <p className="mt-1 text-sm text-slate-600">Manage tools, posts, and calculators from one panel.</p>
      <form
        className="mt-4 flex flex-col gap-3 md:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim()) return;
          setEntries((prev) => [
            ...prev,
            { id: Date.now(), title: title.trim(), status: 'Draft' }
          ]);
          setTitle('');
        }}
      >
        <input
          className="w-full rounded-lg border border-slate-200 p-2"
          placeholder="New content title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-lg bg-brand-700 px-4 py-2 font-medium text-white hover:bg-brand-500"
        >
          Create
        </button>
      </form>
      <ul className="mt-4 space-y-2">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3"
          >
            <span className="font-medium">{entry.title}</span>
            <span className="rounded-full bg-slate-200 px-2 py-1 text-xs">{entry.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
