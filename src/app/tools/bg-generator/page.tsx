"use client"
import { Slider } from '@radix-ui/react-slider'
import React, { useState } from 'react'
import { HexColorInput, HexColorPicker } from 'react-colorful'
function GradientGenerator() {
  const [color1, setcolor1] = useState('#e66465')
  const [color2, setcolor2] = useState('#9198e5')
  const [direction, setdirection] = useState('90')
  function gradientStyle() {
    return{
      background:`linear-gradient(${direction}deg,${color1},${color2} )`
    }
  }
  return (
    <section className='flex flex-col gap-5  ' >
      <h1 className="text-3xl font-bold mb-8 text-center font-passion">Gradient Generator</h1>
      <div style={gradientStyle()} className='h-72 md:w-[680px]   border ' > </div>
      
      <div className=' border flex flex-col md:flex-row gap-5 items-center justify-center px-10 py-5' >
        <div className='flex gap-x-5 flex-col items-center'>
        <h1 className="text-xl font-bold mb-3 text-center font-passion">Color 1</h1>
          <HexColorPicker className='' color={color1} onChange={setcolor1} ></HexColorPicker>
          <HexColorInput className='border-2 border-black text-center w-20 mt-3 ' color={color1} onChange={setcolor1} ></HexColorInput>
        </div>
        <div className='flex  gap-x-5 flex-col items-center '>
        <h1 className="text-xl font-bold mb-3 text-center font-passion ">Color 2</h1>
          <HexColorPicker className='' color={color2} onChange={setcolor2} ></HexColorPicker>
          <HexColorInput className='border-2 border-black text-center w-20 mt-3 ' color={color2} onChange={setcolor2} ></HexColorInput>
        </div>
        <div>
      <input
        value={direction}
        onChange={(e) => setdirection(e.target.value)}
        type="range"
        min={0}
        max={100}
      />
      <p>Direction: {direction}</p>
      
      </div>
      </div>
      <p className='text-center' > background: linear-gradient({direction}deg , {color1}, {color2});</p>
    </section>
  )
}

export default GradientGenerator