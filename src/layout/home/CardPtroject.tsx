import { CardPtrojectProps } from '@/src/models/home.model'
import Link from 'next/link'
import React from 'react'
import { Image } from 'primereact/image'

export default function CardPtroject({
    icon,
    url,
    name
}: CardPtrojectProps) {
    // กำหนด URL ตามชื่อ
    const targetUrl = name === 'จัดการโครงการ' ? '/management' : url;

    const content = (
        <div className='box-layout-globals text-center h-48 max-h-48 flex flex-col items-center justify-center '>
            <div className='grid justify-center '>
                <Image src={icon.src} alt={name}  className='w-[50%] mx-auto'   />
            </div>
            <p className='mt-4'>{name}</p>
        </div>
    );

    return targetUrl ? (
        <Link href={targetUrl}>
            {content}
        </Link>
    ) : (
        content
    );
}
