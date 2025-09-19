'use client'

import { Children, createContext, FC, memo, ReactNode, useContext } from "react"
import { motion, AnimatePresence } from 'motion/react'
import { SkeletonGroup } from "@/app/_component/skeleton-group"
import { FadeInOut } from "@/app/_lib/motion/constant"

type ChatHistoryCtx = {
  checkedK?: string
  onClick?: (k: string) => void
} | undefined

const chatHistoryCtx = createContext<ChatHistoryCtx>(undefined)

export type ChatHistoryProps = {
  value?: string
  onChange?: (value: string) => void
  isLoading?: boolean
  children?: ReactNode
}

type ChatHistory = FC<ChatHistoryProps> & {
  Item: FC<ItemProps>
}

export const ChatHistory = (({
  value,
  onChange,
  isLoading,
  children
}) => {
  const items = Children.toArray(children).filter((child: any) => child?.type === Item)

  return (
    <chatHistoryCtx.Provider value={{
      checkedK: value,
      onClick: onChange
    }}>
      <div className="h-full flex flex-col gap-2 overflow-hidden">
        <p className="px-5 whitespace-nowrap text-sm text-neutral-400">聊天</p>
        <div className="relative flex-1 overflow-hidden">
          <div className="w-full h-full px-2.5 flex flex-col overflow-auto
               scrollbar-thin
              scrollbar-thumb-neutral-200
              scrollbar-track-neutral-50
              scrollbar-thumb-rounded
              ">
            <div className="shrink-0 w-full h-[20px]" />
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                <motion.div
                  key='loading'
                  className="px-2.5 shrink-0 w-full flex flex-col gap-5"
                  {...FadeInOut}
                >
                  <SkeletonGroup />
                </motion.div>
              ) : (
                <motion.div
                  key='content'
                  className="w-full flex flex-col gap-2"
                  {...FadeInOut}
                >{items}</motion.div>
              )}
            </AnimatePresence>
            <div className="shrink-0 w-full h-[80px]" />
          </div>
          <div className="absolute left-0 top-0 w-full h-[20px] bg-gradient-to-b from-neutral-50 to-neutral-50/0" />
          <div className="absolute left-0 bottom-0 w-full h-[80px] bg-gradient-to-b from-neutral-100/0 to-neutral-100"></div>
        </div>
      </div>
    </chatHistoryCtx.Provider>
  )
}) as ChatHistory

type ItemProps = {
  k: string
  v: string
}

const Item: FC<ItemProps> = memo(({ k, v }) => {
  const {
    checkedK,
    onClick
  } = useContext(chatHistoryCtx)!

  const isChecked = k === checkedK

  return (
    <div
      key={k}
      className={`rounded-sm p-2.5 
      ${isChecked && 'bg-neutral-200'} hover:bg-neutral-200 active:bg-neutral-300 whitespace-nowrap text-sm text-neutral-950
      cursor-pointer transition-all duration-300`}
      onClick={() => onClick?.(k)}
    >{v}</div>
  )
})

ChatHistory.Item = Item