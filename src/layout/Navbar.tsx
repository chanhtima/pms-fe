import React from 'react';
import { Avatar } from 'primereact/avatar';
import { MegaMenu } from 'primereact/megamenu';
import { items } from '../router/menuData';
import Logo from 'pms_logo.svg';

export default function Navbar() {
    return (
        <div className="globals-padding border-b shadow-md">
            <nav className="flex justify-between items-center">
                {/* Logo and website name */}
                <a href="/" className="flex items-center gap-2">
                    <Avatar image="pms_logo.svg"  />
                    <div className=' font-medium '>เทศบาลเมืองสามพราน</div>
                </a>
                <div className="flex items-center max-lg:flex-row-reverse gap-2">
                    {/* MegaMenu component can be enabled by uncommenting */}
                    {/* <MegaMenu model={items} breakpoint="1280px" /> */}
                    {/* User info */}
                    <div className="flex items-center gap-2  text-xs">
                        <div className="max-sm:hidden">Admin@gmail.com</div>
                        <Avatar icon="pi pi-user" style={{ backgroundColor: '#4C3B28', color: '#ffffff' }} shape="circle" />
                    </div>
                </div>
            </nav>
        </div>
    );
}
