'use client';
import TextBorder from '@/src/components/BreadCrumb/TextBorder'
import TemplateStep from '@/src/components/Steps/TemplateStep';
import React from 'react'

export default function page() {
  return (
    <div>
          <TextBorder name='ระบบค้นหาติดตามสถานะโครงการ' />
          <TemplateStep/>
    </div>
  )
}
