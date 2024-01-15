'use client';
import { useState } from 'react';

type prop = {
  initialValue?: string;
};

export default function NumberInput({ initialValue = '' }: prop) {
  const [state, setState] = useState(initialValue);
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\s/g, '');
    // @ts-ignore
    if (!isNaN(value)) {
      setState(value);
    }
  };
  return (
    <input
      className="rounded-lg bg-transparent border border-white text-center"
      value={state}
      onChange={onInputChange}
      placeholder="number input"
      aria-label="numberInput"
    />
  );
}
