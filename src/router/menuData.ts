import { MenuItem } from "primereact/menuitem";

export const items: MenuItem[] = [
    {
        label: 'หน้าหลัก',
        url: 'home'
    },
    {
        label: 'จัดการโครงการ', 
        // icon: 'pi pi-fw pi-calendar',
        url: 'form'
    },
    {
        label: "ค้าหาติดตามโครงการ",
        // icon: "pi pi-fw pi-table",
        url: "status",
    },
    {
        label: 'ประวัติการทำรายการ', 
        // icon: 'pi pi-fw pi-calendar',
        url: 'form'
    },
    {
        label: "Dashboard",
        // icon: "pi pi-fw pi-table",
        url: "editor",
    },
   
];
