import Image from 'next/image'
import { Suspense } from 'react'

import { CountDownTimer } from '../main'
import { Music } from '../music'
import CardContainer from './components/card-container'

function Declaration() {
  return (
    <section id="declaration" className="root">
      <div className="pt-4 1440:pt-16">
        <div className="w-full max-w-[320px] mx-auto mb-6 1440:max-w-[1440px] 1440:mb-16">
          <h3 className="text-blue-primary text-4xl font-black font-noto-sans-tc text-center 1440:text-[111px]">
            只接發球
          </h3>
          <div className="relative w-full aspect-[2421/1537] my-6 1440:my-16">
            <Image
              src={'/images/picture/01.webp'}
              alt="リキイ 盃應戰宣言"
              width={2421}
              height={1537}
            />
          </div>
          <h3 className="text-blue-primary text-4xl font-black font-noto-sans-tc text-center 1440:text-[111px]">
            不接命運
          </h3>
        </div>

        <div className="mb-6 1440:mb-16">
          <CountDownTimer type="secondary" />
        </div>

        <Music />

        <Suspense fallback={<div>Loading...</div>}>
          <CardContainer />
        </Suspense>
      </div>
    </section>
  )
}

export default Declaration
