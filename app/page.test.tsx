import {expect, test} from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Page from './page'

test('/', () => {
    render(<Page />)
    const main = within(screen.getByRole('main'))
    expect(main.getByRole('img', {  name: /next.js logo/i })).toBeDefined()
  })