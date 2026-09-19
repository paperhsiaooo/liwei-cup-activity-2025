import ClientOnlyView from '@/components/common/client-only/client-only-view'
import ConfettiView from '@/components/confetti-view'
import { Address } from '@/sections/root/address'
import { Declaration } from '@/sections/root/declarations'
import { Main } from '@/sections/root/main'
import { Memory } from '@/sections/root/memory'
import { Qa } from '@/sections/root/qa'
import { Slogan } from '@/sections/root/slogan'

export default function Root() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed z-50 top-0 left-0 w-full h-full pointer-events-none">
        <ClientOnlyView>
          <ConfettiView />
        </ClientOnlyView>
      </div>
      <Main />
      <Slogan className="relative z-20" />
      <Memory className="relative z-10" />
      <Address />
      <Declaration />
      <Qa />
    </main>
  )
}
