import { memo } from 'react'

import { QaContainer } from '.'

function Qa() {
  return (
    <section id="qa" className="root">
      <span className="absolute top-2 left-0 w-full h-2 bg-green-primary" />
      <div className="wrapper max-w-[350px] mx-auto pt-10 pb-5 space-y-20 1440:max-w-[1174px] 1440:pt-16 1440:pb-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-start items-center text-blue-primary 1440:flex-row 1440:items-end">
            <h2 className="font-anton font-normal leading-snug text-[84px] whitespace-nowrap 1440:leading-none">
              Q & A
            </h2>
            <p className="text-base max-w-[260px] text-center mx-auto 1440:text-lg 1440:mx-0 1440:max-w-none 1440:text-left 1440:leading-tight 1440:pb-2 1440:ml-12">
              一起深度了解
              <br className="1440:hidden" />
              關於「リキイ 盃」的常見問題，
              <br />
              讓你迅速找到好解答！
            </p>
          </div>
          <QaContainer />
        </div>
      </div>
    </section>
  )
}

export default memo(Qa)
