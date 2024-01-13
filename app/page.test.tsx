import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Page from './page';

render(<Page />);

test('heading exists', () => {
  const header = screen.getAllByRole('heading', { level: 1 });
  expect(header).toBeDefined();
});

test('all images have alt text', () => {
  const images = Array.from(document.getElementsByTagName('img'));
  const alts = images.filter((image) => image.alt).map((image) => image.alt);
  expect(alts.length).toEqual(images.length);
});
