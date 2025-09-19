'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/app/_lib/shadcn/components/ui/avatar"
import { FC, memo } from "react"
import { motion, AnimatePresence } from 'motion/react'
import { FadeInOut } from "@/app/_lib/motion/constant"

type UserCardProps = {
  isSimpleMode?: boolean
  onClick?: () => void
}

export const UserCard: FC<UserCardProps> = memo(({
  isSimpleMode,
  onClick
}) => {
  return (
    <div
      className={`w-full h-full px-2.5
      flex items-center justify-start gap-3
      ${!isSimpleMode && 'bg-neutral-950/5 hover:bg-neutral-950/10 backdrop-blur-xs'}
      transition-all duration-300 cursor-pointer`}
      onClick={onClick}
    >
      <Avatar className={`w-[40px] h-[40px] border-2 border-neutral-950/0 ${isSimpleMode && 'hover:border-neutral-950'} transition-all duration-300`}>
        <AvatarImage src="https://github.com/dao77777.png" alt="@dao77777" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <AnimatePresence>
        {!isSimpleMode && (
          <motion.span
            className="text-xs text-neutral-950"
            {...FadeInOut}
          >dao77777</motion.span>
        )}
      </AnimatePresence>
    </div>
  )
})