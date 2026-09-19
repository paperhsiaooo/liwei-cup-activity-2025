'use client'

import { memo } from 'react'
import { useTimer } from 'react-timer-hook'

import { cn } from '@/lib/utils'

function CountDownTimer({ type = 'primary' | 'secondary' }) {
  const { days, hours, minutes, seconds, isRunning } = useTimer({
    // Ensure SSR and CSR count down to the same UTC+8 instant
    expiryTimestamp: new Date('2025-11-15T12:00:00+08:00'),
  })

  const isExpired =
    !isRunning || (days === 0 && hours === 0 && minutes === 0 && seconds === 0)

  if (isExpired) {
    return (
      <div className="relative z-10">
        <h2
          className={cn(
            'text-[30px] font-black font-noto-sans-tc text-center 1440:text-[100px]',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-blue-primary',
          )}
        >
          一球，打穿你防線
        </h2>
      </div>
    )
  }

  return (
    <div className="relative z-10">
      <p className="text-center font-anton font-normal text-4xl text-white flex justify-center items-end flex-row gap-x-3 1440:gap-x-10">
        <span
          suppressHydrationWarning={true}
          className={cn(
            'text-[30px] 1440:text-[100px] leading-none',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-blue-primary',
          )}
        >
          {days}
        </span>
        <span
          className={cn(
            'text-[14px] 1440:text-[45px]',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-green-primary',
          )}
        >
          DAYS
        </span>
        <span
          suppressHydrationWarning={true}
          className={cn(
            'text-[30px] 1440:text-[100px] leading-none',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-blue-primary',
          )}
        >
          {hours}
        </span>
        <span
          className={cn(
            'text-[14px] 1440:text-[45px]',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-green-primary',
          )}
        >
          HRS
        </span>
        <span
          suppressHydrationWarning={true}
          className={cn(
            'text-[30px] 1440:text-[100px] leading-none',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-blue-primary',
          )}
        >
          {minutes}
        </span>
        <span
          className={cn(
            'text-[14px] 1440:text-[45px]',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-green-primary',
          )}
        >
          MINS
        </span>
        <span
          suppressHydrationWarning={true}
          className={cn(
            'text-[30px] 1440:text-[100px] leading-none',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-blue-primary',
          )}
        >
          {seconds}
        </span>
        <span
          className={cn(
            'text-[14px] 1440:text-[45px]',
            type === 'primary' && 'text-white',
            type === 'secondary' && 'text-green-primary',
          )}
        >
          SEC
        </span>
      </p>
    </div>
  )
}

export default memo(CountDownTimer)
