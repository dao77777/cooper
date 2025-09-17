'use client'

import { ArrowLeftFromLine, ArrowRightFromLine, Brain, MessageSquareMore, SquarePen } from "lucide-react";
import { FC, memo, useState } from "react";
import { motion, AnimatePresence } from 'motion/react'
import { Textarea } from "./_lib/shadcn/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./_lib/shadcn/components/ui/avatar";

// primaryColor: #FFA2A2
// successColor: #CCE023,
// warningColor: #FFDAC1
// errorColor: #FF4D4F
// #F8F4F0
// 背景色: [white], bg-neutral-50, bg-neutral-100, bg-neutral-200
// 前景色: [bg-neutral-950], bg-neutral-600, bg-neutral-400
// 悬浮 padding: p-1.5, 布局 padding: [p-5]
// 间距: [gap-5], gap-6
// 过渡时间: duration-300

export default function Home() {
  return (
    <div className="w-dvw h-dvh flex">
      <SideBar />
      <main className="height-full flex-1 flex items-center justify-center bg-white">
        <div className="w-[800px] flex flex-col items-center justify-center gap-6">
          <span className="group text-2xl text-neutral-950 tracking-widest">
            <span className="text-[#FFA2A2]">你</span>今天在想什么<span className="inline-block group-hover:text-[#FFA2A2]">？</span>
          </span>
          <div className="relative w-full">
            <Textarea className="min-h-[100px] p-5 focus-visible:ring-0 focus-visible:border-neutral-950 transition-all duration-300 resize-none" />
            {/* <motion.div className="absolute right-5 bottom-5 rounded-sm p-2.5 bg-neutral-200"> */}
            <MessageSquareMore className="absolute right-5 bottom-5 w-[20px] h-[20px] hover:text-[#FFA2A2] transition-all duration-300 cursor-pointer" />
            {/* </motion.div> */}
          </div>
        </div>
      </main>
    </div>
  )
}

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const sideBarWidth = isOpen ? 'w-[300px]' : 'w-[60px]'

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const [isHover, setIsHover] = useState(false)

  return (
    <aside className={`relative shadow ${sideBarWidth} h-full shrink-0 pt-5 flex flex-col gap-6 bg-neutral-50 transition-all duration-300`}>
      <header className={`${isOpen && 'px-5'} flex items-center ${isOpen ? 'justify-between' : 'flex-start'} `}>
        <motion.div
          className={`${!isOpen && 'px-3.5'} flex items-center gap-2`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className={`${!isOpen && 'rounded-sm p-1.5 hover:bg-neutral-200 hover:text-[#FFA2A2] cursor-pointer transition-colors duration-300'}`} onClick={handleToggle}>
            <AnimatePresence mode="popLayout">
              {!isOpen && isHover
                ? (
                  <motion.div
                    key='open'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ArrowRightFromLine className="w-[20px] h-[20px]" />
                  </motion.div>
                )
                : (
                  <motion.div
                    key='icon'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Brain className="w-[20px] h-[20px]" />
                  </motion.div>
                )
              }
            </AnimatePresence>
          </div>
          <AnimatePresence mode="popLayout">
            {isOpen && (
              <motion.span
                className="text-sm text-neutral-950 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >Cooper</motion.span>
            )}
          </AnimatePresence>
        </motion.div>
        <AnimatePresence mode="popLayout">
          {isOpen && (
            <motion.div
              className="rounded-sm p-1.5 flex items-center justify-center hover:bg-neutral-200 hover:text-[#FFA2A2] cursor-pointer transition-all duration-300"
              onClick={handleToggle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArrowLeftFromLine className="w-[20px] h-[20px]" />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <section className="px-2.5">
        <div className={`
          rounded-sm p-2.5 
          flex items-center gap-2 
          hover:bg-neutral-200 ${!isOpen && 'hover:text-[#FFA2A2]'}
          transition-all duration-300 cursor-pointer
          `}>
          <SquarePen className="shrink-0 w-[20px] h-[20px]" />
          <AnimatePresence mode="popLayout">
            {isOpen && (
              <motion.span
                className="shrink-0 whitespace-nowrap text-sm text-neutral-950"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >新聊天</motion.span>
            )}
          </AnimatePresence>
        </div>
      </section>
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.main
            className="flex-1 flex flex-col gap-2 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="px-5 whitespace-nowrap text-sm text-neutral-400">聊天</p>
            <div className="relative flex-1 overflow-hidden">
              <div className="w-full h-full px-2.5 flex flex-col overflow-auto
               scrollbar-thin
              scrollbar-thumb-neutral-200
              scrollbar-track-neutral-50
              scrollbar-thumb-rounded
              ">
                <div className="shrink-0 w-full h-[20px]" />
                {new Array(50).fill(0).map((_, idx) => (
                  <div key={idx} className="rounded-sm p-2.5 whitespace-nowrap text-sm text-neutral-950 hover:bg-neutral-200 cursor-pointer transition-all duration-300">聊天{idx}</div>
                ))}
                <div className="shrink-0 w-full h-[80px]" />
              </div>
              <div className="absolute left-0 top-0 w-full h-[20px] bg-gradient-to-b from-neutral-50 to-neutral-50/0" />
              <div className="absolute left-0 bottom-0 w-full h-[80px] bg-gradient-to-b from-neutral-100/0 to-neutral-100"></div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
      <footer className="absolute left-0 bottom-0 w-full h-[80px]">
        <UserCard isSimpleMode={!isOpen} />
      </footer>
    </aside >
  )
}

type UserCardProps = {
  isSimpleMode?: boolean
  onClick?: () => void
}

const UserCard: FC<UserCardProps> = memo(({
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >dao77777</motion.span>
        )}
      </AnimatePresence>
    </div>
  )
})