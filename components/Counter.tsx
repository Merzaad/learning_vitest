'use client';

import { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((prev) => prev + 1);

  return (
    <div className="border border-white p-4 rounded-lg flex flex-col">
      <div className="p-3 rounded-sm" data-testid="count">
        {count}
      </div>
      <button
        id="increase"
        onClick={increase}
        className="border rounded-lg hover:bg-white hover:text-black"
      >
        +
      </button>
    </div>
  );
}
