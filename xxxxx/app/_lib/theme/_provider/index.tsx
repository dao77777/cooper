'use client'

import { createContext, FC, memo, ReactNode, useContext } from "react";

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

export type ThemeCtx = {
  /** Primary Color */
  primaryColor: string
  /** Function Color */
  successColor?: string
  warningColor?: string
  errorColor?: string
  /** Mask Color*/
  maskColor?: string
  /** Background Color */
  bgLv1?: string
  bgLv2?: string
  bgLv3?: string
  bgLv4?: string
  /** Background Reverse Color */
  bgRLv1?: string
  bgRLv2?: string
  bgRLv3?: string
  bgRLv4?: string
  /** Foreground Color */
  fgLv1?: string
  fgLv2?: string
  fgLv3?: string
  fgLv4?: string
  /** Foreground Reverse Color */
  fgRLv1?: string
  fgRLv2?: string
  fgRLv3?: string
  fgRLv4?: string
  /** Text */
  fontFamily?: string
  fontSizeXs?: string | number
  fontSizeSm?: string | number
  fontSize?: string | number
  fontSizeLg?: string | number
  fontSizeXl?: string | number
  fontWeightLight?: string | number
  fontWeightNormal?: string | number
  fontWeightBold?: string | number
  lineHeight?: string | number
  /** Radius */
  borderRadiusXs?: string | number
  borderRadiusSm?: string | number
  borderRadius?: string | number
  borderRadiusLg?: string | number
  borderRadiusXl?: string | number
  /** Padding */
  paddingXs?: string | number
  paddingSm?: string | number
  padding?: string | number
  paddingLg?: string | number
  paddingXl?: string | number
  /** Gap */
  gapXs?: string | number
  gapSm?: string | number
  gap?: string | number
  gapLg?: string | number
  gapXl?: string | number
  /** Border */
  borderColor?: string
  /** Track */
  trackColor?: string
} | undefined

export const themeCtx = createContext<ThemeCtx>(undefined)

export const ThemeProvider: FC<{ children?: ReactNode }> = memo(({ children }) => {
  return (
    <themeCtx.Provider value={{
      /** Primary Color */
      primaryColor: '#FFA2A2',
      /** Function Color */
      successColor: '#CCE023',
      warningColor: '#FFDAC1',
      errorColor: '#FF4D4F',
      /** Mask Color */
      maskColor: 'rgba(0, 0, 0, 0.05)',
      /** Background Color */
      bgLv1: '#FFFFFF',
      bgLv2: '#FCFCFC',
      bgLv3: '#F7F7F7',
      bgLv4: '#F4F4F4',
      /** Foreground Color */
      fgLv1: '#151718',
      fgLv2: 'rgba(0, 0, 0, 0.45)',
      fgLv3: 'rgba(0, 0, 0, 0.3)',
      fgLv4: 'rgba(0, 0, 0, 0.15)',
      /** Text */
      fontFamily: '"PingFang SC",  "Microsoft YaHei", sans-serif',
      fontSizeXs: '8px',
      fontSizeSm: '12px',
      fontSize: '14px',
      fontSizeLg: '16px',
      fontSizeXl: '20px',
      fontWeightLight: 300,
      fontWeightNormal: 400,
      fontWeightBold: 500,
      lineHeight: 1.5,
      /** Radius */
      borderRadiusXs: '4px',
      borderRadiusSm: '8px',
      borderRadius: '10px',
      borderRadiusLg: '12px',
      borderRadiusXl: '16px',
      /** Padding */
      paddingXs: '14px',
      paddingSm: '18px',
      padding: '20px',
      paddingLg: '22px',
      paddingXl: '26px',
      /** Gap */
      gapXs: '6px',
      gapSm: '10px',
      gap: '12px',
      gapLg: '14px',
      gapXl: '28px',
      /** Border */
      borderColor: '#E5E5E5',
      /** Track */
      trackColor: '#D8D8D8',
    }}>
      {children}
    </themeCtx.Provider>
  )
})