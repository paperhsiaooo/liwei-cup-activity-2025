'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

function QaItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  // Generate unique IDs for accessibility
  const questionId = `qa-question-${question.replace(/\s+/g, '-').toLowerCase()}`
  const answerId = `qa-answer-${question.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="border border-blue-primary overflow-hidden">
      {/* Question 部分 - 可點擊 */}
      <button
        onClick={toggleOpen}
        className="w-full px-4 py-3 1440:py-5 1440:px-4 cursor-pointer text-left bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex justify-between items-center group"
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={questionId}
      >
        <span className="font-bold text-base text-blue-primary pr-4 flex-1 1440:text-[22px] 1440:leading-none">
          {question}
        </span>
        <svg
          className={cn(
            'w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>

      {/* Answer 部分 - 可摺疊 */}
      <div
        id={answerId}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
        role="region"
        aria-labelledby={questionId}
      >
        <div
          className="px-4 py-4 bg-white text-blue-primary text-sm leading-relaxed 1440:text-lg"
          // ponytail: answer 是 qa-container 寫死的文案，非使用者輸入，直接 SSR 輸出讓爬蟲看得到
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  )
}

export default QaItem
