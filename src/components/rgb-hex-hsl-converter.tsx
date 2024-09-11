"use client"
import React, { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { ClipboardIcon } from 'lucide-react'

type ColorState = {
  hex: string
  rgb: [number, number, number]
  cmyk: [number, number, number, number]
  hsv: [number, number, number]
  hsl: [number, number, number]
}

const initialColor: ColorState = {
  hex: '#ffffff',
  rgb: [255, 255, 255],
  cmyk: [0, 0, 0, 0],
  hsv: [0, 0, 100],
  hsl: [0, 0, 100],
}

export default function EnhancedUniversalColorConverter() {
  const [color, setColor] = useState<ColorState>(initialColor)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const updateColor = (newColor: Partial<ColorState>) => {
    setColor(prevColor => {
      const updatedColor = { ...prevColor, ...newColor }
      if ('hex' in newColor) {
        updatedColor.rgb = hexToRgb(updatedColor.hex)
      }
      if ('rgb' in newColor) {
        updatedColor.hex = rgbToHex(updatedColor.rgb)
      }
      updatedColor.cmyk = rgbToCmyk(updatedColor.rgb)
      updatedColor.hsv = rgbToHsv(updatedColor.rgb)
      updatedColor.hsl = rgbToHsl(updatedColor.rgb)
      return updatedColor
    })
  }

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value
    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
      updateColor({ hex })
    }
  }

  const handleRgbChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(255, Number(e.target.value)))
    const newRgb = [...color.rgb] as [number, number, number]
    newRgb[index] = value
    updateColor({ rgb: newRgb })
  }

  const handleCmykChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)))
    const newCmyk = [...color.cmyk] as [number, number, number, number]
    newCmyk[index] = value
    const rgb = cmykToRgb(newCmyk)
    updateColor({ rgb })
  }

  const handleHsvChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = index === 0 ? Math.max(0, Math.min(360, Number(e.target.value))) : Math.max(0, Math.min(100, Number(e.target.value)))
    const newHsv = [...color.hsv] as [number, number, number]
    newHsv[index] = value
    const rgb = hsvToRgb(newHsv)
    updateColor({ rgb })
  }

  const handleHslChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = index === 0 ? Math.max(0, Math.min(360, Number(e.target.value))) : Math.max(0, Math.min(100, Number(e.target.value)))
    const newHsl = [...color.hsl] as [number, number, number]
    newHsl[index] = value
    const rgb = hslToRgb(newHsl)
    updateColor({ rgb })
  }

  const handleHexColorPickerChange = (newColor: string) => {
    updateColor({ hex: newColor })
  }

  // Conversion functions
  const hexToRgb = (hex: string): [number, number, number] => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [r, g, b]
  }

  const rgbToHex = (rgb: [number, number, number]): string => {
    return '#' + rgb.map(x => x.toString(16).padStart(2, '0')).join('')
  }

  const rgbToCmyk = (rgb: [number, number, number]): [number, number, number, number] => {
    const [r, g, b] = rgb.map(x => x / 255)
    const k = 1 - Math.max(r, g, b)
    if (k === 1) return [0, 0, 0, 100]
    const c = (1 - r - k) / (1 - k)
    const m = (1 - g - k) / (1 - k)
    const y = (1 - b - k) / (1 - k)
    return [Math.round(c * 100), Math.round(m * 100), Math.round(y * 100), Math.round(k * 100)]
  }

  const cmykToRgb = (cmyk: [number, number, number, number]): [number, number, number] => {
    const [c, m, y, k] = cmyk.map(x => x / 100)
    const r = 255 * (1 - c) * (1 - k)
    const g = 255 * (1 - m) * (1 - k)
    const b = 255 * (1 - y) * (1 - k)
    return [Math.round(r), Math.round(g), Math.round(b)]
  }

  const rgbToHsv = (rgb: [number, number, number]): [number, number, number] => {
    const [r, g, b] = rgb.map(x => x / 255)
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const d = max - min
    let h = 0
    const s = max === 0 ? 0 : d / max
    const v = max

    if (max !== min) {
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
      }
      h /= 6
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)]
  }

  const hsvToRgb = (hsv: [number, number, number]): [number, number, number] => {
    const [h, s, v] = hsv.map((x, i) => i === 0 ? x / 360 : x / 100)
    let r, g, b
    const i = Math.floor(h * 6)
    const f = h * 6 - i
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)

    switch (i % 6) {
      case 0: [r, g, b] = [v, t, p]; break
      case 1: [r, g, b] = [q, v, p]; break
      case 2: [r, g, b] = [p, v, t]; break
      case 3: [r, g, b] = [p, q, v]; break
      case 4: [r, g, b] = [t, p, v]; break
      case 5: [r, g, b] = [v, p, q]; break
      default: [r, g, b] = [0, 0, 0]; break
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }

  const rgbToHsl = (rgb: [number, number, number]): [number, number, number] => {
    const [r, g, b] = rgb.map(x => x / 255)
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0, s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
      }
      h /= 6
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
  }

  const hslToRgb = (hsl: [number, number, number]): [number, number, number] => {
    const [h, s, l] = hsl.map((x, i) => i === 0 ? x / 360 : x / 100)
    let r, g, b

    if (s === 0) {
      r = g = b = l
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-black/5 border rounded-lg shadow-xl text-white">
      <section className='flex mb-4 gap-10'>
        <HexColorPicker color={color.hex} onChange={handleHexColorPickerChange} />
        <div className='w-96 h-[198px] border p-2 rounded-md ml-[-2px]' style={{
          backgroundColor: color.hex
        }}></div>
      </section>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
          <span className="font-semibold">HEX</span>
          <div className="flex items-center">
            <input
              type="text"
              value={color.hex}
              onChange={handleHexChange}
              className="bg-transparent border-none focus:outline-none text-right"
            />
            <button
              onClick={handleCopy}
              className="ml-2 p-1 hover:bg-gray-600 rounded"
            >
              <ClipboardIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        {copied && <div className="text-sm text-green-500">Copied to clipboard!</div>}

        <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
          <span className="font-semibold">RGB</span>
          <div className="flex gap-2">
            {color.rgb.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                onChange={handleRgbChange(index)}
                className="w-16 bg-gray-600 border-none rounded px-2 py-1 text-right"
                min="0"
                max="255"
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
          <span className="font-semibold">CMYK</span>
          <div className="flex gap-2">
            {color.cmyk.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                onChange={handleCmykChange(index)}
                className="w-16 bg-gray-600 border-none rounded px-2 py-1 text-right"
                min="0"
                max="100"
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
          <span className="font-semibold">HSV</span>
          <div className="flex gap-2">
            {color.hsv.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                onChange={handleHsvChange(index)}
                className="w-16 bg-gray-600 border-none rounded px-2 py-1 text-right"
                min={index === 0 ? "0" : "0"}
                max={index === 0 ? "360" : "100"}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
          <span className="font-semibold">HSL</span>
          <div className="flex gap-2">
            {color.hsl.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                onChange={handleHslChange(index)}
                className="w-16 bg-gray-600 border-none rounded px-2 py-1 text-right"
                min={index === 0 ? "0" : "0"}
                max={index === 0 ? "360" : "100"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}