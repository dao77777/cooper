'use client'

import { FC, memo, useState } from "react"
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeftFromLine, ArrowRightFromLine, Brain } from "lucide-react"
import { FadeInOut } from "@/app/_lib/motion/constant"

export type LogoProps = {
  isSimpleMode?: boolean
  onToggle?: () => void
}

export const Logo: FC<LogoProps> = memo(({
  isSimpleMode,
  onToggle
}) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <header className={`${!isSimpleMode && 'px-5'} flex items-center ${!isSimpleMode ? 'justify-between' : 'flex-start'} `}>
      <motion.div
        className={`${isSimpleMode && 'px-3.5'} flex items-center gap-2`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`${isSimpleMode && 'rounded-sm p-1.5 hover:bg-neutral-200 hover:text-[#FFA2A2] cursor-pointer transition-colors duration-300'}`}
          onClick={onToggle}
        >
          <AnimatePresence mode="popLayout">
            {isSimpleMode && isHover
              ? (
                <motion.div
                  key='open'
                  {...FadeInOut}
                >
                  <ArrowRightFromLine className="w-[20px] h-[20px]" />
                </motion.div>
              )
              : (
                <motion.div
                  key='icon'
                  {...FadeInOut}
                >
                  <Brain className="w-[20px] h-[20px]" />
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
        <AnimatePresence mode="popLayout">
          {!isSimpleMode && (
            <motion.span
              className="text-sm text-neutral-950 font-semibold"
              {...FadeInOut}
            >Cooper</motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence mode="popLayout">
        {!isSimpleMode && (
          <motion.div
            className="rounded-sm p-1.5 flex items-center justify-center hover:bg-neutral-200 hover:text-[#FFA2A2] cursor-pointer transition-all duration-300"
            onClick={onToggle}
            {...FadeInOut}
          >
            <ArrowLeftFromLine className="w-[20px] h-[20px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
})