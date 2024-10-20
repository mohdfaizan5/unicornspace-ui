import CodeHighlight from '@/components/code-highlight'
import React from 'react'
const customScrollBarCode = `
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}`

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold font-passion ">Work In Progress</h1>
      {/* <CodeHighlight code={customScrollBarCode} /> */}

    </div>
  )
}

export default page