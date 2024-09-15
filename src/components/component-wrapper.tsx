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
    <div className="flex justify-center items-center p-4 bg-gray-100 rounded-lg overflow-hidden">
      <div
        className={`bg-white rounded-md shadow-md ${className}`}
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          maxWidth: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}