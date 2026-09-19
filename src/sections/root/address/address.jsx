import Image from 'next/image'
import { memo } from 'react'

import { InfoDate, InfoDestination, InfoDistance, InfoDuration } from './'

function Address() {
  return (
    <section id="address" className="root bg-orange-primary">
      <div className="relative pt-[500px] pb-5 max-w-[375px] mx-auto 1440:max-w-[1440px] 1440:pt-[630px] 1440:pb-[300px]">
        <div className="absolute top-[120px] left-7 w-[157px] aspect-[1464/961] 1440:hidden">
          <Image
            src="/images/picture/05.webp"
            alt="2025 力維盃排球賽現場照片"
            width={1464}
            height={961}
          />
        </div>

        <div className="absolute z-10 top-[150px] right-7 w-[145px] aspect-[1469/1753] 1440:w-[237px] 1440:top-[250px] 1440:left-[1028px]">
          <Image
            src="/images/picture/04.webp"
            alt="2025 力維盃排球賽現場照片"
            width={1469}
            height={1753}
          />
        </div>

        <div className="absolute top-[266px] left-7 w-[277px] aspect-[2730/1400] 1440:hidden">
          <Image
            src="/images/picture/03.webp"
            alt="2025 力維盃排球賽現場照片"
            width={2730}
            height={1400}
          />
        </div>

        <div className="absolute top-[440px] left-[48px] z-10 1440:top-[480px] 1440:left-[340px]">
          <p className="absolute left-[34px] top-[32px] w-4 h-4 bg-white 1440:w-10 1440:h-10 1440:left-[76px] 1440:top-[76px]" />
          <p className="absolute z-20 left-0 top-[56px] w-[52px] h-[107px] bg-[linear-gradient(160deg,_#71F57C_0%,_rgba(113,245,124,0)_62%)] 1440:w-[116px] 1440:h-[374px] 1440:top-[130px]" />
          <p className="absolute left-[38px] top-[106px] w-[28px] h-[28px] bg-[#70EEEA] 1440:w-16 1440:h-16 1440:left-[90px] 1440:top-[256px]" />
          <p className="absolute left-[80px] top-0 w-[12px] h-[12px] bg-white 1440:w-[29px] 1440:h-[29px] 1440:left-[188px]" />
        </div>

        {/* 板橋 */}
        <div className="relative flex justify-center items-center 1440:mb-12">
          <p className="font-noto-sans-jp font-black text-white text-[83px] leading-[140px] 1440:text-[236px] 1440:leading-[306px]">
            板<br />橋
          </p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="whitespace-nowrap font-noto-sans-jp font-black text-blue-primary text-[34px] leading-[120%] tracking-[5%] text-center 1440:text-[161px]">
              僑中分館
              <br className="1440:hidden" />
              三米線
            </p>
          </div>
        </div>

        {/* 資訊 - 手機版 */}
        <div className="relative flex justify-center max-w-[320px] mx-auto 1440:hidden">
          <div className="w-full flex flex-row flex-wrap">
            <InfoDate />
            <InfoDistance />
            <InfoDestination />
            <InfoDuration />
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-blue-primary" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-[95%] bg-blue-primary" />
        </div>

        {/* 資訊 - 桌機版 */}
        <div className="relative hidden 1440:block max-w-[1175px] mx-auto">
          <p className="w-full h-0.5 rounded-full bg-blue-primary" />

          <div className="absolute left-0 -top-[4px]">
            <p className="w-2.5 h-2.5 rounded-full bg-green-primary mb-3" />
            <p className="text-blue-primary text-[25px] leading-[100%] font-antonio font-bold mb-6">{`// Date`}</p>
            <p className="text-white text-[25px] leading-[100%] font-antonio font-bold mb-5">
              2025, SATURDAY
            </p>
            <p className="text-white text-[100px] leading-none font-anton font-normal">
              11
              <span className="relative bottom-2 text-[45px] leading-none font-noto-sans-tc font-extrabold mx-3.5">
                /
              </span>
              15
            </p>
          </div>

          <div className="absolute left-[25%] -top-[4px]">
            <p className="w-2.5 h-2.5 rounded-full bg-green-primary mb-3" />
            <p className="text-blue-primary text-[25px] leading-[100%] font-antonio font-bold">{`// Distance`}</p>
            <p className="text-white text-[45px] leading-none font-noto-sans-tc font-extrabold pt-[62px]">
              約
              <span className="relative text-[100px] leading-none font-anton font-extrabold mx-3.5">
                2.1
              </span>
              KM
            </p>
          </div>

          <div className="absolute left-[58%] -top-[4px]">
            <p className="w-2.5 h-2.5 rounded-full bg-green-primary mb-3" />
            <p className="text-blue-primary text-[25px] leading-[100%] font-antonio font-bold">{`// Destination`}</p>
            <p className="text-white text-[38px] font-noto-sans-tc font-bold leading-tight pt-[18px]">
              新北市板橋區
              <br />
              橋中一街 124 巷
              <br />
              27-5 號
            </p>
          </div>

          <div className="absolute left-[88%] -top-[4px]">
            <p className="w-2.5 h-2.5 rounded-full bg-green-primary mb-3" />
            <p className="text-blue-primary text-[25px] leading-[100%] font-antonio font-bold">{`// Duration`}</p>
            <p className="text-white text-[100px] leading-none font-antonio font-bold pt-[50px]">
              6
              <span className="relative text-[45px] leading-none font-anton font-normal mx-2.5">
                HRS
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Address)
