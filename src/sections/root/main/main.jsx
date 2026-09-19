import Image from 'next/image'

import { CountDownTimer } from '.'

function Main() {
  return (
    <section id="home" className="root overflow-hidden">
      <h1 className="sr-only">力維盃 × リキイ 盃 排球錦標賽 2025</h1>
      <div className="aspect-[397/250] w-[200px] absolute z-0 left-1/2 -translate-x-1/2 1440:w-[700px]">
        <Image
          src="/images/win-01.webp"
          alt="力維盃排球錦標賽精彩瞬間"
          className="object-cover w-full"
          width={397}
          height={250}
          priority
        />
      </div>
      <div className="relative z-10 pt-[50px] pb-10">
        <div className="absolute z-0 top-[278px] w-full h-6 [background-image:url('/images/deco-01.webp')] bg-repeat bg-size-[auto_24px] 1440:top-[336px] 1440:h-9 1440:bg-size-[auto_36px]" />
        <div className="absolute z-0 top-[310px] bg-[#FFCC05] w-full h-[5px] 1440:top-[380px] 1440:h-[7px]" />
        <div className="absolute z-0 top-[320px] bg-[#FFCC05] w-full h-[500px] 1440:top-[394px]" />
        <div className="relative z-20 aspect-[924/1102] w-[320px] left-1/2 -translate-x-1/2 mb-4 1440:w-[400px]">
          <Image
            src="/images/main-cover-02.webp"
            alt="2025 リキイ 盃排球錦標賽海報"
            className="object-cover"
            priority
            width={924}
            height={1102}
          />
        </div>
        <CountDownTimer type="primary" />
      </div>
    </section>
  )
}

export default Main
