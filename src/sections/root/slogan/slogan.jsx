import Image from 'next/image'

import { cn } from '@/lib/utils'

function Slogan({ className }) {
  return (
    <div id="slogan" className={cn('bg-white', className)}>
      <div className="relative max-w-[375px] mx-auto 1440:max-w-[1440px]">
        {/* Word - 不僅要參加，更要留下 */}
        <div className="absolute top-6 left-9 1440:top-12 1440:left-28">
          <p className="font-black font-noto-sans-jp text-blue-primary text-[32px] leading-[120%] 1440:text-[111px]">
            不僅&nbsp;&nbsp;&nbsp;&nbsp;要參加
            <br />
            更要留下
          </p>
        </div>

        {/* Word - passionate */}
        <div className="absolute top-28 right-9 1440:top-[300px] 1440:right-[378px]">
          <p className="font-anton font-normal text-4xl uppercase text-green-primary 1440:text-[111px]">
            passionate
          </p>
        </div>

        <div className="absolute top-[140px] left-0 w-[90%] aspect-[1738/993] 1440:w-[76%] 1440:left-auto 1440:right-0 1440:top-auto 1440:-bottom-[200px]">
          <Image
            src="/images/picture/02.webp"
            alt="2025 力維盃排球賽精彩回憶"
            width={1738}
            height={993}
            className="w-full"
          />
        </div>

        <div className="absolute top-80 -right-1 1440:right-[452px] 1440:top-auto 1440:-bottom-[230px]">
          <p className="absolute -top-3 right-16 text-nowrap text-4xl text-white font-noto-sans-tc font-bold 1440:text-[111px] 1440:-top-9 1440:-right-[320px] 1440:font-extrabold">
            你的名字
          </p>
          <div className="h-10 flex flex-row gap-x-1.5 1440:h-16">
            <div className="w-2.5 h-full bg-green-primary 1440:w-9" />
            <div className="w-8 h-full bg-green-primary 1440:w-[120px]" />
            <div className="w-64 h-full bg-gradient-to-r from-[#71F57C] via-[#60A0FF] to-[#55BBE300] 1440:w-[500px]" />
          </div>
        </div>

        <div className="w-full aspect-[320/216] 1440:aspect-[320/180]" />
      </div>
    </div>
  )
}

export default Slogan
