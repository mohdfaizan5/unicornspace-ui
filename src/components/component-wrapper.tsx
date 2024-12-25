import React from 'react'

interface ComponentWrapperProps {
  children: React.ReactNode
  width?: string
  height?: string
  scale?: number
  className?: string
}

export default function ComponentWrapper({
  children,
  width = '100%',
  scale = 1,
  height = 'auto',
  className = '',
}: ComponentWrapperProps) {
  return (
    <div className="flex justify-center items-center p-2  g-gray-100 rounded-lg overflow-hidden">
      <div
        className={`scale-[90%] md:scale-[95%] bg-background border p-2 md:p-5 rounded-md shadow-md ${className}`}
        style={{
          width,
          height,
          // transform: `scale(${scale})`,
          transformOrigin: 'center',
          maxWidth: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}