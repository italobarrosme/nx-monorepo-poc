import { Card } from './card'
import { render } from '@testing-library/react'

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />)
    expect(baseElement).toBeTruthy()
  })
})
