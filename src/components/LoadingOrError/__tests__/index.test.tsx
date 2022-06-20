import { render, screen } from '@testing-library/react'
import LoadingOrError from '../index'

describe('LoadingOrError', () => {
  test('renders LoadingOrError component', () => {
    render(<LoadingOrError />)
    expect(screen.getByText('LoadingOrError')).toBeInTheDocument()
  })
})
