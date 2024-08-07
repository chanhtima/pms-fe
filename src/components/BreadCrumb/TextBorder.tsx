import { TextBorderProps } from '@/src/models/home.model'
import React from 'react'

export default function TextBorder({name}:TextBorderProps) {
  return (
    <div className=' text-white text-xl mb-4'>
      <div className="pb-4  border-b-2">
        {name}
      </div>
    </div>
  )
}
