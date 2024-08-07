'use client';
import React, { useRef, useState } from 'react';
import { items } from '../router/menuData';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';

export default function TopMenu() {
    const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
    const menu = useRef<TieredMenu>(null); // Define the menu reference using useRef

    const isActive = (url?: string) => `/${url}` === currentPath;
    const highlightActiveMenuItems = (menuItems: MenuItem[]): MenuItem[] => {
        return menuItems.map(item => {
            if (item.items) {
                return {
                    ...item,
                    items: highlightActiveMenuItems(item.items.flat())
                };
            }
            return {
                ...item,
                className: item.url && isActive(item.url) ? "border-b-2 border-orange-1" : undefined
            };
        });
    };

    const highlightedItems = highlightActiveMenuItems(items);

    return (
        <>
            <div className="max-xl:hidden">
                <MegaMenu model={highlightedItems} breakpoint="1025px" />
            </div>
            <div className="xl:hidden">
                <TieredMenu model={highlightedItems} popup ref={menu} />
                <Button
                    icon="pi pi-bars"
                    className='!bg-white !text-sugar-1'
                    onClick={(event) => {
                        if (menu.current) {
                            menu.current.toggle(event);
                        }
                    }}
                />
            </div>
        </>
    )
}
