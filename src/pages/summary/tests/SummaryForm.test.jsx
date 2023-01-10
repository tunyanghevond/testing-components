import { screen, render, fireEvent } from '@testing-library/react'
import SummeryForm from '../SummaryForm'

test('Initial conditions', () => {
  render(<SummeryForm />)
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })
  expect(checkbox).not.toBeChecked()
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  })
  expect(confirmButton).toBeDisabled()
})

test('Checkbox enables button on first click and disable on second click', () => {
  render(<SummeryForm />)
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  })
  fireEvent.click(checkbox)
  expect(confirmButton).toBeEnabled()

  fireEvent.click(checkbox)
  expect(confirmButton).toBeDisabled()
})
