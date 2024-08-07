import React from 'react'
import { Image } from 'primereact/image'
import { CardDashboardProps } from '@/src/models/home.model'
import { formatNumberWithCommas } from '@/src/utils/formatNumberWithCommas'


export default function CardDashboard({
    icon,
    numbers,
    name,
    unit,
}: CardDashboardProps) {
    return (
        <div className="box-layout-globals text-center space-y-4 ">
            <div className=" flex items-center justify-center gap-4">
                <Image src={icon.src} alt={name} className='w-10 h-10' />
                <div className="text-xl text-orange-1 font-medium">
                    {name}
                </div>

            </div>
            <div className=" text-[36px]  sm:text-[50px] xl:text-[70px] font-medium text-orange-1 ">
                {formatNumberWithCommas(numbers)}
            </div>
            <div className="text-xl text-orange-1 font-medium">
                {unit}
            </div>
        </div>
    )
}
