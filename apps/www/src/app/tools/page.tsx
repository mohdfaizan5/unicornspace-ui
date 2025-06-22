import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 '>
        <Link href={"/tools/resources"} className='underline flex items-center gap-2'>Resources <MoveRight/> </Link>
    </div>
  )
}

export default page