import { SITE_URL } from '@/constants/site'
import { Address } from '@/sections/root/address'
import { Declaration } from '@/sections/root/declarations'
import { Main } from '@/sections/root/main'
import { Memory } from '@/sections/root/memory'
import { Qa } from '@/sections/root/qa'
import { Slogan } from '@/sections/root/slogan'

// ponytail: 賽事已結束，宣言資料在建置時固定；要不重新部署就更新，改 r2IncrementalCache + revalidate
export const dynamic = 'force-static'

export const metadata = {
  alternates: { canonical: SITE_URL },
}

export default function Root() {
  return (
    <main className="relative overflow-hidden">
      <Main />
      <Slogan className="relative z-20" />
      <Memory className="relative z-10" />
      <Address />
      <Declaration />
      <Qa />
    </main>
  )
}
