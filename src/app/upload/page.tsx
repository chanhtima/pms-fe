"use client"
import UploadFile from '@/src/components/Upload/FloatInput';
import React, { useState } from 'react';

export default function Upload() {
    const [files, setFiles] = useState<File[]>([]);
    console.log(files);
    return (
        <>
            <div>Upload</div>
            <div className="p-4 bg-gray-100">
                <div className="text-2xl font-bold text-center">Hello, Tailwind CSS!</div>
                <UploadFile files={files} setFiles={setFiles} />
            </div>
        </>
    );
}
