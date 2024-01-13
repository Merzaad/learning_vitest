import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Counter from './Counter';

test('counter', async () => {
  render(<Counter />);
  const increaseButton = screen.getByRole('button', { name: '+' });
  await increaseButton.click();
  const count = screen.getByTestId('count');
  expect(count.textContent).toBe('1');
});
