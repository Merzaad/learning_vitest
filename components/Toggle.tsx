'use client';
import { useState } from 'react';

type props = { children: React.ReactNode };
export default function Toggle({ children }: props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`border border-teal-300 p-2 rounded-lg hover:bg-gray-800 cursor-pointer ${
        toggle ? 'text-teal-300 bg-gray-800' : ''
      }`}
      onClick={() => setToggle(!toggle)}
      role="toggle"
    >
      {children}
    </div>
  );
}
