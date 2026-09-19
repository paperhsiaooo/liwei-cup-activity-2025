import { render } from '@testing-library/react'

import CardList from '../card-list'

const declarations = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  nick_name: `選手${i + 1}`,
  declaration_data: 'a,b,c',
}))
const options = {
  Category1: [{ value: 'a', label: 'A' }],
  Category2: [{ value: 'b', label: 'B' }],
  Category3: [{ value: 'c', label: 'C' }],
}

describe('CardList marquee', () => {
  it('renders each row twice, hides the duplicate copy from a11y tree, and uses no headings', () => {
    const { container } = render(
      <CardList
        battleDeclarations={declarations}
        declarationsOptions={options}
      />,
    )
    // 15 張 × 2 份複本
    const cards = container.querySelectorAll('[data-marquee-copy]')
    expect(cards).toHaveLength(30)
    expect(
      container.querySelectorAll('[data-marquee-copy="1"][aria-hidden="true"]'),
    ).toHaveLength(15)
    expect(container.querySelectorAll('h1, h2, h3, h4')).toHaveLength(0)
  })
})
