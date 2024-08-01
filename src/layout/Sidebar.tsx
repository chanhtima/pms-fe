'use client';
import React, { useRef } from 'react'
import { items } from '../router/menuData';
import { MegaMenu } from 'primereact/megamenu';
export default function Sidebar() {
    const toast = useRef(null);
    // const router = useRouter();
    return (
        <div>
            <MegaMenu model={items} orientation="vertical" breakpoint="767px" />
        </div>
    )
}
