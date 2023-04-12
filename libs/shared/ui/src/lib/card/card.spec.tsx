import { Card } from './card'
import { render } from '@testing-library/react'

const componentRender = () => {
  const props = {
    img: 'img',
    title: 'title',
    text: 'text',
    description: 'description',
    altImg: 'altImg'
  }

  return render(<Card {...props} />)
}

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = componentRender()

    expect(baseElement).toBeTruthy()
  })

  it('should render prop img', () => {
    const { getByAltText } = componentRender()

    expect(getByAltText('altImg')).toBeTruthy()
  })

  it('should render prop title', () => {
    const { getByText } = componentRender()

    expect(getByText('title')).toBeTruthy()
  })

  it('should render prop text', () => {
    const { getByText } = componentRender()

    expect(getByText('text')).toBeTruthy()
  })

  it('should render prop description', () => {
    const { getByText } = componentRender()

    expect(getByText('description')).toBeTruthy()
  })
})
