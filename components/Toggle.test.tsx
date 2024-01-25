import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Toggle from './Toggle';

test('should change background color on toggle', () => {
  const { getByRole } = render(<Toggle>toggle</Toggle>);
  const toggle = getByRole('toggle');
  fireEvent.click(toggle);
  expect(toggle).toHaveClass('bg-gray-800');
});
