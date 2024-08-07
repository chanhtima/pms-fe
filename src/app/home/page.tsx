
import React from 'react'
import TextBorder from '@/src/components/BreadCrumb/TextBorder'
import CardDashboard from '@/src/layout/home/CardDashboard'
import icon1 from "../../../public/image/home/dashboardIcon_1.svg";
import icon2 from "../../../public/image/home/dashboardIcon_2.svg";


export default function page() {
  return (
    <div>
      <TextBorder name='ระบบรายงานบริหารโครงการ' />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         <CardDashboard
          icon={icon1}
          numbers="356"
          name="จำนวนโครงการ"
          unit="โครงการ"
         />
         <CardDashboard
          icon={icon2}
          numbers="280878563"
          name="งบประมาณ"
          unit="บาท"
         />
      </div>
    </div>
  )
}
