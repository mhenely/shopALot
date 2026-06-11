import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CategoryFilters from './CategoryFilters'

const subcategories = ['Liverpool', 'Barcelona', 'Valencia']

describe('CategoryFilters', () => {
  it('renders an "All" chip plus one per subcategory', () => {
    render(<CategoryFilters subcategories={subcategories} active="all" onChange={() => {}} />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    subcategories.forEach((sub) =>
      expect(screen.getByRole('button', { name: sub })).toBeInTheDocument()
    )
  })

  it('marks the active chip with aria-pressed', () => {
    render(<CategoryFilters subcategories={subcategories} active="Liverpool" onChange={() => {}} />)
    expect(screen.getByRole('button', { name: 'Liverpool' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls onChange with the chip value when clicked', async () => {
    const onChange = vi.fn()
    render(<CategoryFilters subcategories={subcategories} active="all" onChange={onChange} />)
    await userEvent.click(screen.getByRole('button', { name: 'Barcelona' }))
    expect(onChange).toHaveBeenCalledWith('Barcelona')
  })

  it('shows the item count when provided', () => {
    render(<CategoryFilters subcategories={subcategories} active="all" onChange={() => {}} shown={7} />)
    expect(screen.getByText('7 items')).toBeInTheDocument()
  })
})
