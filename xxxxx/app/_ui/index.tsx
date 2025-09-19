'use client'

import { FC, memo } from "react"
import { Layout } from "./layout"
import { SideBar } from "./side-bar"
import { useParams, useRouter } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"

type UIProps = {
  children?: React.ReactNode
}

export const UI: FC<UIProps> = memo(({ children }) => {
  const router = useRouter()
  const { chat } = useParams()

  const handleCheckedChatChange = (chat?: string) => {
    router.push(chat ?? '')
  }

  return (
    <Layout>
      <Layout.SideBar>
        <SideBar
          checkedChat={chat as string | undefined}
          onCheckedChatChange={handleCheckedChatChange}
          onNewChat={() => router.push('./')}
        />
      </Layout.SideBar>
      <Layout.Main>
        {children}
      </Layout.Main>
    </Layout>
  )
})