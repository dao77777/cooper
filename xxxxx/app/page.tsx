'use client'

import { MessageSquareMore } from "lucide-react"
import { Textarea } from "./_lib/shadcn/components/ui/textarea"
import { motion } from 'motion/react'
import { SlideInOut } from "./_lib/motion/constant"

export default function Home() {
  return (
    <motion.div
      key='./'
      className="w-full h-full flex-1 flex items-center justify-center bg-white"
      {...SlideInOut}
    >
      <div className="w-[800px] flex flex-col items-center justify-center gap-6">
        <span className="group text-2xl text-neutral-950 tracking-widest">
          <span className="text-[#FFA2A2]">你</span>今天在想什么<span className="inline-block group-hover:text-[#FFA2A2]">？</span>
        </span>
        <motion.div layoutId="chat-input" className="relative w-full">
          <Textarea className="min-h-[100px] p-5 focus-visible:ring-0 focus-visible:border-neutral-950 transition-all duration-300 resize-none" />
          <MessageSquareMore className="absolute right-5 bottom-5 w-[20px] h-[20px] hover:text-[#FFA2A2] transition-all duration-300 cursor-pointer" />
        </motion.div>
      </div>
    </motion.div>
  )
}
