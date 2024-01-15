import { expect, test } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import NumberInput from './NumberInput';

test('input only accepts numbers', () => {
  const { getByLabelText, rerender } = render(<NumberInput />);
  const input = getByLabelText('numberInput') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(input.value).toBe('');
  rerender(<NumberInput initialValue="1" />);
  fireEvent.change(input, { target: { value: '123' } });
  expect(input.value).toBe('123');
});
