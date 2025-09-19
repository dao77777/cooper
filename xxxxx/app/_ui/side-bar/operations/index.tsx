'use client'

import { SquarePen } from "lucide-react"
import { FC, memo } from "react"
import { motion, AnimatePresence } from 'motion/react'
import { FadeInOut } from "@/app/_lib/motion/constant"

export type OperationsProps = {
  isSimpleMode?: boolean
  onNewChat?: () => void
}

export const Operations: FC<OperationsProps> = memo(({ isSimpleMode, onNewChat }) => {
  return (
    <section className="px-2.5">
      <motion.div
        className={`
          rounded-sm p-2.5 
          flex items-center gap-2
          hover:bg-neutral-200 ${isSimpleMode && 'hover:text-[#FFA2A2]'}
          transition-all duration-300 cursor-pointer
          `}
        {...FadeInOut}
        onClick={onNewChat}
      >
        <SquarePen className="shrink-0 w-[20px] h-[20px]" />
        <AnimatePresence mode="popLayout">
          {!isSimpleMode && (
            <motion.span
              className="shrink-0 whitespace-nowrap text-sm text-neutral-950"
              {...FadeInOut}
            >新聊天</motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
})
