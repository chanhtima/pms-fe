# Example-1

Example-1 is a Next.js application with TypeScript and various built-in features. This project includes custom hooks, API services, and modular components.

## โครงสร้างของโปรเจกต์

example-1/
├── public/
│ ├── favicon.ico # ไอคอนของเว็บไซต์
│ ├── robots.txt # ไฟล์ robots.txt
│ └── assets/ # ไฟล์ static เช่น รูปภาพ
├── src/
│ ├── app/ # โฟลเดอร์หลัก
│ ├── components/ # คอมโพเนนต์ต่างๆ
│ │ └── ExampleComponent.tsx # คอมโพเนนต์ตัวอย่าง
│ ├── hooks/ # Custom hooks
│ │ └── useExample.ts # ตัวอย่างของ custom hook
│ ├── services/ # การจัดการ API
│ │ └── apiService.ts # ฟังก์ชันการติดต่อกับ API
│ ├── styles/ # สไตล์ CSS หรือ SCSS
│ │ └── ExampleComponent.module.css # สไตล์ของ ExampleComponent
│ ├── utils/ # ฟังก์ชันทั่วไป
│ ├── pages/ # หน้าและ API routes
│ │ ├── api/
│ │ │ └── example.ts # API route ตัวอย่าง
│ │ ├── _app.tsx # Custom App Component
│ │ ├── _document.tsx # Custom Document Component
│ │ └── index.tsx # หน้าแรก
│ └── layout.tsx # Layout ของแอป
├── .gitignore # ไฟล์สำหรับ git
├── next.config.js # การตั้งค่าของ Next.js
├── package.json # การตั้งค่าของแพ็กเกจและสคริปต์
├── tsconfig.json # การตั้งค่าของ TypeScript
└── README.md # เอกสารสำหรับโปรเจกต์


## การติดตั้ง

1. **Clone โปรเจกต์**
   ```bash
   git clone https://github.com/username/example-1.git
2. **ติดตั้ง package**
    npm install
2. **Run โปรเจกต์**
    npm run dev


