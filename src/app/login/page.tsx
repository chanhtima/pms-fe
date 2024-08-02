'use client';
import { user } from '@/src/models/login.model'
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from 'primereact/button';
import FloatInput from '@/src/components/Input/FloatInput';
import FloatInputIIcons from '@/src/components/Input/FloatInputIIcons';

export default function page() {
    const defaultValues: user = {
        user: "",
        password: ""
    }
    const methods = useForm<user>({ defaultValues, shouldFocusError: true });
    const { handleSubmit, reset, control, formState: { errors } } = methods;

    const onSubmit = (data: user) => {
        console.log(data);
    
    };
    return (
        <div className='flex items-center justify-center min-h-screen md:min-h-[80vh]'>
            <div className="box-layout-globals md:w-[500px] min-h-32">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className=" grid grid-cols-1">
                            <FloatInputIIcons
                                name="user"
                                label="user"
                                type="text"
                                icon={(<i className="pi pi-user"></i>)}
                                IconFields // ถ้าต้องการให้ ไอคคอนอยู่ใน  Fields
                            />
                            <FloatInput
                                name="password"
                                label="Password"
                                type="password"
                                toggleMask
                                maxLength={8}
                            />
                        </div>
                        <div className="flex justify-center ">
                            <Button type="submit" className=" bg-sugar-1 text-white  py-2 px-6 mt-4" label='บันทึก' />
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}
