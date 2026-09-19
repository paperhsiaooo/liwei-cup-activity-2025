import Image from 'next/image'

import { URL } from '@/constants/url'
import { VERSION } from '@/constants/version'

function Card({ children }) {
  return <div className="w-full">{children}</div>
}

function CardContent({
  name = '',
  declaration1 = '',
  declaration2 = '',
  declaration3 = '',
  no = 0,
}) {
  return (
    <div className="bg-yellow-primary rounded-3xl h-[286px]">
      <div className="relative p-5">
        {/* 頭像 */}
        <div className="relative w-[90px] aspect-square">
          <Image
            src={`${URL.BattleListCDN}${VERSION.AvatarCDN}/avatar/${no}.png`}
            alt={`${name} 選手頭像`}
            width={1024}
            height={1024}
          />
        </div>

        {/* 內容 */}
        <div className="relative z-10 space-y-1 min-w-0 flex-1">
          <div className="flex flex-row justify-start items-end gap-x-3">
            <h3 className="text-2xl font-bold text-blue-primary font-noto-sans-jp break-words">
              {name}
            </h3>
          </div>
          <p className="text-sm font-bold text-blue-primary font-noto-sans-jp whitespace-normal">
            我是{declaration1}、{declaration2}。<br />
            <br />
            我告訴你們「{declaration3}」
          </p>
        </div>

        {/* 序號 */}
        <div className="absolute z-10 top-5 right-5">
          <p className="text-xl text-white font-normal font-anton">{no}</p>
        </div>

        {/* 序號 - bg */}
        <div className="absolute z-0 top-5 right-3">
          <p className="text-[135px] leading-none text-white/25 font-normal font-anton">
            {no}
          </p>
        </div>
      </div>
    </div>
  )
}

export { Card, CardContent }
