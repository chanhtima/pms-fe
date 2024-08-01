'use client';
import Editors from '@/src/components/Editors/Editors'
import React, { useState } from 'react'

export default function page() {
  const [text, setText] = useState('');
  return (
    <div>
      <Editors
       data={text}
       setData={setText}
      />
    </div>
  )
}
