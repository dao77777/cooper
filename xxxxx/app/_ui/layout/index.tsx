'use client'

import { Children, FC, memo, ReactNode } from "react"

export type LayoutProps = {
  children?: ReactNode
}

export type Layout = FC<LayoutProps> & {
  SideBar: FC<SideBarProps>
  Main: FC<MainProps>
}

export const Layout = (({ children }) => {
  const sideBar = Children.toArray(children).find((child: any) => child?.type === SideBar)
  const main = Children.toArray(children).find((child: any) => child?.type === Main)

  return (
    <div className="relative w-dvw h-dvh flex text-sm text-neutral-950">
      <aside>
        {sideBar}
      </aside>
      <main className="flex-1 h-full overflow-hidden">
        {main}
      </main>
    </div>
  )
}) as Layout

type SideBarProps = {
  children?: ReactNode
}

const SideBar: FC<SideBarProps> = memo(({ children }) => children)

type MainProps = {
  children?: ReactNode
}

const Main: FC<MainProps> = memo(({ children }) => children)

Layout.SideBar = SideBar
Layout.Main = Main