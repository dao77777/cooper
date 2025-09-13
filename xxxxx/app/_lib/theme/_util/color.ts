import { clamp } from './math'

export type ColorType = 'hex' | 'hexShort' | 'rgb' | 'rgba'

export type Quad = [number, number, number, number]

const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
const rgbaRegex =
  /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([0-9]*\.?[0-9]+)\s*\)$/
const hexRegex = /^#[0-9a-fA-F]{6}$/
const hexShortRegex = /^#([0-9a-fA-F]{3})$/

export const color2Type = (color?: string): ColorType | undefined => {
  if (!color) return undefined
  if (hexRegex.test(color)) return 'hex'
  if (hexShortRegex.test(color)) return 'hexShort'
  if (rgbRegex.test(color)) return 'rgb'
  if (rgbaRegex.test(color)) return 'rgba'

  console.error('Unsupported color format:', color)
  return undefined
}

export const hex2Quad = (hex?: string): Quad | undefined => {
  if (!hex) return undefined

  let r: number, g: number, b: number
  const colorType = color2Type(hex)
  if (colorType === 'hex') {
    hex = hex.slice(1)
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  } else if (colorType === 'hexShort') {
    hex = hex.slice(1)
    r = parseInt(hex.slice(0, 1).repeat(2), 16)
    g = parseInt(hex.slice(1, 2).repeat(2), 16)
    b = parseInt(hex.slice(2, 3).repeat(2), 16)
  } else {
    console.error('Input must be a hex color:', hex)
    return undefined
  }
  return [r, g, b, 1]
}

export const rgb2Quad = (rgb?: string): Quad | undefined => {
  if (!rgb) return undefined
  const match = rgb.match(rgbRegex)
  if (!match) {
    console.error('Input must be an rgb color:', rgb)
    return undefined
  }

  const r = parseInt(match[1], 10)
  const g = parseInt(match[2], 10)
  const b = parseInt(match[3], 10)

  return [r, g, b, 1]
}

export const rgba2Quad = (rgba?: string): Quad | undefined => {
  if (!rgba) return undefined
  const match = rgba.match(rgbaRegex)
  if (!match) {
    console.error('Input must be an rgba color:', rgba)
    return undefined
  }

  const r = parseInt(match[1], 10)
  const g = parseInt(match[2], 10)
  const b = parseInt(match[3], 10)
  const a = parseFloat(match[4])

  return [r, g, b, a]
}

export const color2Quad = (color?: string): Quad | undefined => {
  if (!color) return undefined
  const colorType = color2Type(color)
  if (colorType === 'hex' || colorType === 'hexShort') {
    return hex2Quad(color)
  } else if (colorType === 'rgb') {
    return rgb2Quad(color)
  } else if (colorType === 'rgba') {
    return rgba2Quad(color)
  } else {
    console.error('Unsupported color format:', color)
    return undefined
  }
}

export const rgb2Rgba = (rgb?: string) => (alpha: number = 1): string | undefined => {
  if (!rgb) return undefined

  const quad = rgb2Quad(rgb)
  if (!quad) return undefined
  const [r, g, b] = quad
  const rAlpha = clamp(alpha)(0)(1)
  return `rgba(${r}, ${g}, ${b}, ${rAlpha})`
}

export const hex2Rgb = (hex?: string): string | undefined => {
  const quad = hex2Quad(hex)
  if (!quad) return undefined
  const [r, g, b] = quad
  return `rgb(${r}, ${g}, ${b})`
}

export const hex2Rgba = (hex?: string) => (alpha: number = 1): string | undefined => {
  const quad = hex2Quad(hex)
  if (!quad) return undefined
  const [r, g, b] = quad
  const rAlpha = clamp(alpha)(0)(1)
  return `rgba(${r}, ${g}, ${b}, ${rAlpha})`
}

export const alphaColor = (color: string) => (alpha: number): string | undefined => {
  const quad = color2Quad(color)
  if (!quad) return undefined
  const [r, g, b, a] = quad
  const rAlpha = a * clamp(alpha)(0)(1)
  return `rgba(${r}, ${g}, ${b}, ${rAlpha})`
}
