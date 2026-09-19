import { render, screen } from '@testing-library/react'

import QaItem from '../qa-item'

// 答案必須在首次（伺服端）渲染就存在，不能等 useEffect
describe('QaItem', () => {
  it('renders the answer HTML synchronously on first render', () => {
    render(
      <QaItem question="什麼是？" answer="<b>粗體</b>答案內容" defaultOpen />,
    )
    expect(screen.getByText('答案內容', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('粗體').tagName).toBe('B')
  })
})
