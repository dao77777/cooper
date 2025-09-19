'use client'

import { FC, memo, useState } from "react"
import { motion, AnimatePresence } from 'motion/react'
import { UserCard } from "./user-card"
import { ChatHistory } from "./chat-history"
import { Logo } from "./logo"
import { Operations } from "./operations"
import { FadeInOut } from "@/app/_lib/motion/constant"

export type SideBarProps = {
  checkedChat?: string
  onCheckedChatChange?: (checkedChat: string) => void
  onNewChat?: () => void
}

export const SideBar: FC<SideBarProps> = memo(({
  checkedChat,
  onCheckedChatChange,
  onNewChat
}) => {
  const [isOpened, setIsOpened] = useState(true)

  const handleToggle = () => {
    setIsOpened(!isOpened)
  }

  return (
    <aside className={`relative shadow ${isOpened ? 'w-[300px]' : 'w-[60px]'} h-full shrink-0 pt-5 
    flex flex-col gap-6 
    bg-neutral-50 transition-all duration-300`}>
      <Logo
        isSimpleMode={!isOpened}
        onToggle={handleToggle}
      />
      <Operations
        isSimpleMode={!isOpened}
        onNewChat={onNewChat}
      />
      <AnimatePresence mode="popLayout">
        {isOpened && (
          <motion.main
            className="flex-1 flex flex-col gap-2 overflow-hidden"
            {...FadeInOut}
          >
            <ChatHistory value={checkedChat} onChange={onCheckedChatChange} isLoading={false}>
              {new Array(50).fill(0).map((_, idx) => (
                <ChatHistory.Item key={idx} k={idx.toString()} v={`聊天记录 ${idx + 1}`} />
              ))}
            </ChatHistory>
          </motion.main>
        )}
      </AnimatePresence>
      <footer className="absolute left-0 bottom-0 w-full h-[80px]">
        <UserCard isSimpleMode={!isOpened} />
      </footer>
    </aside >
  )
})
