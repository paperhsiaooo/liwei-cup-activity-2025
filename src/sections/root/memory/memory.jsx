import Image from 'next/image'

import { cn } from '@/lib/utils'

function Memory({ className }) {
  return (
    <div id="memory" className={cn('bg-blue-primary', className)}>
      <div className="relative max-w-[375px] mx-auto w-full h-[1190px] 1440:max-w-[1440px] 1440:h-[3300px]">
        {/* On the count, every shot is the true of yourself */}
        <div className="absolute top-[150px] left-1/2 -translate-x-1/2 z-10 w-[271px] h-[82px] 1440:top-[400px] 1440:w-[1216px] 1440:h-[372px]">
          <p className="text-green-primary text-left font-anton font-normal text-[22px] leading-tight 1440:text-[100px]">
            ON
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            THE
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            COUNT,
          </p>
          <p className="text-green-primary text-left font-anton font-normal text-[22px] leading-tight 1440:text-[100px]">
            EVERY
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            SHOT
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            IS
          </p>
          <p className="text-white text-left font-anton font-normal text-[22px] leading-tight 1440:text-[100px]">
            THE TRUE OF YOURSELF
          </p>
        </div>

        {/* 球場上每一次喊聲，都是你・真實的樣子 */}
        <div className="absolute top-[264px] right-8 z-10 flex flex-row 1440:top-[720px] 1440:right-[110px]">
          <p
            style={{ writingMode: 'vertical-rl' }}
            className="text-white text-nowrap font-noto-sans-tc font-bold text-xl leading-tight tracking-[0.3em] 1440:text-[45px]"
          >
            都是你・<span className="text-orange-primary">真實的樣子</span>
          </p>
          <p
            style={{ writingMode: 'vertical-rl' }}
            className="text-white text-nowrap font-noto-sans-tc font-bold text-xl leading-tight tracking-[0.3em] 1440:text-[45px]"
          >
            球場上每一次喊聲
          </p>
        </div>

        {/* 這裡只留下 敢贏的人 */}
        <div className="absolute top-[650px] right-[100px] z-10 1440:top-[1500px] 1440:right-[470px]">
          <p className="text-white text-nowrap font-noto-sans-tc font-extrabold text-[45px] leading-tight 1440:text-[150px]">
            這裡&nbsp;&nbsp;只留下
          </p>
          <p className="text-orange-primary text-nowrap font-noto-sans-tc font-extrabold text-[45px] leading-tight 1440:text-[150px]">
            敢贏的人
          </p>
        </div>

        {/* Deco-01 */}
        <div className="absolute top-[460px] left-[146px] z-10 1440:top-[1012px] 1440:left-[550px]">
          <p className="absolute left-0 top-0 w-[10px] h-[10px] bg-white 1440:w-[29px] 1440:h-[29px]" />
          <p className="absolute left-[20px] top-[28px] w-[14px] h-[14px] bg-white 1440:w-10 1440:h-10 1440:top-[72px] 1440:left-[88px]" />
          <p className="absolute z-20 left-[20px] top-[48px] w-[33px] h-[107px] 1440:w-[116px] 1440:h-[374px] 1440:top-[130px] 1440:left-[88px] bg-[linear-gradient(160deg,_#71F57C_0%,_rgba(113,245,124,0)_62%)]" />
          <p className="absolute left-[8px] top-[88px] w-[22px] h-[22px] bg-[#70EEEA] 1440:w-16 1440:h-16 1440:top-[244px] 1440:left-[54px]" />
        </div>

        {/* Deco-02 */}
        <div className="absolute top-[760px] left-[254px] z-10 1440:top-[1850px] 1440:left-[872px]">
          <p className="absolute z-10 left-1 top-0 w-[10px] h-[10px] bg-white 1440:w-[29px] 1440:h-[29px]" />
          <p className="absolute left-[8px] -top-[20px] w-[25px] h-[58px] 1440:w-[83px] 1440:h-[198px] 1440:-top-[62px] 1440:left-[20px] bg-[linear-gradient(180deg,_#FA7025_10%,_rgba(250,112,37,0)_62%)]" />
        </div>

        {/* Deco-03 */}
        <div className="absolute top-[872px] left-[174px] z-10 1440:top-[2248px] 1440:left-[610px]">
          <p className="absolute z-10 left-1 top-0 w-[10px] h-[26px] bg-orange-primary 1440:w-[35px] 1440:h-[90px]" />
          <p className="absolute z-10 -left-[36px] top-0 w-[35px] h-[26px] bg-orange-primary 1440:-left-[136px] 1440:top-0 1440:w-[120px] 1440:h-[90px]" />
          <p className="absolute z-20 -left-[202px] top-0 w-[160px] h-[26px] bg-[linear-gradient(-90deg,_#FA7025_0%,_#60A0FF_45%,_rgba(85,187,227,0)_100%)] 1440:-left-[736px] 1440:top-0 1440:w-[580px] 1440:h-[90px]" />
        </div>

        {/* Deco-04 */}
        <div className="absolute top-[1062px] left-[42px] z-20 1440:top-[2860px] 1440:left-[394px]">
          <p className="absolute left-0 top-0 w-[14px] h-[14px] bg-white 1440:w-10 1440:h-10" />
          <p className="absolute z-20 left-0 top-5 w-[33px] h-[107px] bg-[linear-gradient(160deg,_#60A0FF_0%,_rgba(96,160,255,0)_62%)] 1440:w-[116px] 1440:h-[374px] 1440:top-16" />
          <p className="absolute -left-[12px] top-[60px] w-[22px] h-[22px] bg-[#70EEEA] 1440:w-16 1440:h-16 1440:-left-[34px] 1440:top-[188px]" />
          <p className="absolute left-[26px] top-[90px] w-[10px] h-[10px] bg-white 1440:w-[29px] 1440:h-[29px] 1440:left-[102px] 1440:top-[260px]" />
        </div>

        <div className="aspect-[617/1002] w-[150px] absolute z-0 left-0 top-[266px] 1440:top-[716px] 1440:w-[441px] a14">
          <Image
            src="/images/picture/07.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={617}
            height={1002}
          />
        </div>

        <div className="aspect-square w-[81px] absolute z-0 left-[190px] top-[450px] 1440:w-[233px] 1440:left-[698px] 1440:top-[990px]">
          <Image
            src="/images/picture/08.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={1504}
            height={1504}
          />
        </div>

        <div className="aspect-[1359/1939] w-[73px] absolute z-0 left-[290px] top-[512px] 1440:w-[252px] 1440:left-auto 1440:right-0 1440:top-[1300px]">
          <Image
            src="/images/picture/09.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={1359}
            height={1939}
          />
        </div>

        <div className="aspect-[2039/1023] w-[275px] absolute z-0 left-1.5 top-[750px] 1440:w-[946px] 1440:left-0 1440:top-[1835px]">
          <Image
            src="/images/picture/10.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={2039}
            height={1023}
          />
        </div>

        <div className="aspect-[2192/1536] w-[218px] absolute z-10 left-[64px] top-[980px] 1440:w-[684px] 1440:left-[460px] 1440:top-[2550px]">
          <Image
            src="/images/picture/11.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={2192}
            height={1536}
          />
        </div>

        <div className="aspect-[1431/1850] w-[89px] absolute z-10 left-[264px] top-[1100px] 1440:w-[278px] 1440:left-[780px] 1440:top-[3125px]">
          <Image
            src="/images/picture/12.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={1431}
            height={1850}
          />
        </div>

        <div className="aspect-square w-[110px] absolute z-0 left-[128px] top-[1160px] 1440:w-[233px] 1440:left-[160px] 1440:top-[2450px]">
          <Image
            src="/images/picture/13.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={864}
            height={864}
          />
        </div>

        {/* ------- 桌機版出現的圖片 ------- */}
        <div className="aspect-[1316/1416] hidden absolute z-10 1440:block 1440:w-[290px] 1440:left-[1020px] 1440:top-[2180px]">
          <Image
            src="/images/picture/14.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={1316}
            height={1416}
          />
        </div>

        <div className="aspect-[722/1101] hidden absolute z-10 1440:block 1440:w-[179px] 1440:right-0 1440:top-[2930px]">
          <Image
            src="/images/picture/15.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={722}
            height={1101}
          />
        </div>

        <div className="aspect-[1464/961] hidden absolute z-10 1440:block 1440:w-[293px] 1440:left-[136px] 1440:top-[3180px]">
          <Image
            src="/images/picture/05.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={1464}
            height={961}
          />
        </div>

        <div className="aspect-[2730/1400] hidden absolute z-0 1440:block 1440:w-[716px] 1440:left-[240px] 1440:top-[3298px]">
          <Image
            src="/images/picture/03.webp"
            alt="2025 力維盃排球賽回憶照片"
            className="object-cover w-full"
            width={2730}
            height={1400}
          />
        </div>
      </div>
    </div>
  )
}

export default Memory
