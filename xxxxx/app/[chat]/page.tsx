'use client'

import { useParams } from "next/navigation"
import { FC } from "react"
import { motion } from 'motion/react'
import { Textarea } from "../_lib/shadcn/components/ui/textarea"
import { MessageSquareMore } from "lucide-react"
import { Input } from "../_lib/shadcn/components/ui/input"

const Page: FC = () => {
  const { chat } = useParams()

  return (
    <div
      key={`./${chat}`}
      className="relative w-full h-full"
    >
      <h1>Chat Page: {chat}</h1>
      <motion.div
        className="absolute left-1/2 bottom-[40px] -translate-1/2"
        layoutId="chat-input"
      >
        <Input className="rounded-full w-[800px] min-h-[60px] px-10 focus-visible:ring-0 focus-visible:border-neutral-950 transition-all duration-300 resize-none" />
        <MessageSquareMore className="absolute right-10 bottom-1/2 translate-x-full translate-y-1/2 w-[20px] h-[20px] hover:text-[#FFA2A2] transition-all duration-300 cursor-pointer" />
      </motion.div>
    </div>
  )
}

export default Page