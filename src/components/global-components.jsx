'use client'

import { Toaster } from 'react-hot-toast'

import { Footer } from '@/sections/root/footer'
import useDialogContext from '@/store/dialog-context'

import CustomDialogView from './common/custom-dialog/custom-dialog-view'

export default function GlobalComponents({ children }) {
  const isOpen = useDialogContext(state => state.isOpen)
  const setIsOpen = useDialogContext(state => state.setIsOpen)

  const handleOpenChange = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <CustomDialogView
        title={'機會的列車，只鳴笛一次'}
        description={
          '有些東西就像限動一樣，錯過就回不來了，除非你知道問題的答案'
        }
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        onClose={handleClose}
      />
      {children}
      <Footer />
    </div>
  )
}
