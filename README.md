example-1/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/           # ไฟล์ static เช่น รูปภาพ
├── src/
│   ├── app/                    # หลัก
│   ├── components/      # คอมโพเนนต์ต่างๆ
│   │   └── ExampleComponent.tsx
│   ├── hooks/           # Custom hooks
│   │   └── useExample.ts
│   ├── services/        # การจัดการ API
│   │   └── apiService.ts
│   ├── styles/          # สไตล์ CSS หรือ SCSS
│   │   └── ExampleComponent.module.css
│   ├── utils/           # ฟังก์ชันทั่วไป
│   ├── pages/           # หน้าและ API routes
│   │   ├── api/
│   │   │   └── example.ts
│   │   ├── _app.tsx     # Custom App Component
│   │   ├── _document.tsx # Custom Document Component
│   │   └── index.tsx    # หน้าแรก
│   └── layout.tsx       # Layout ของแอป
├── .gitignore            # ไฟล์สำหรับ git
├── next.config.js        # การตั้งค่าของ Next.js
├── package.json          # การตั้งค่าของแพ็กเกจและสคริปต์
├── tsconfig.json         # การตั้งค่าของ TypeScript
└── README.md             # เอกสารสำหรับโปรเจกต์
