'use client';
import DropdownInput from '@/src/components/Input/DropdownInput ';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

export default function Page() {
    const defaultValues = {
        dropdown:"1",
        dropdown2:"3",
    }
    const methods = useForm({ shouldFocusError: true });
    // const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;
    const options = [
        { label: 'Option 1', key: '1' },
        { label: 'Option 2', key: '2' },
        { label: 'Option 3', key: '3' },
    ];

    const onSubmit = (data: any) => {
        console.log(data);
   
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DropdownInput
                    label="Select an option"
                    name="dropdown"
                    options={options}
                    placeholder="Select an option"
                    filter  //ต้องการให้พิมพ์ค้นหาใน Dropdown ให้เปิด filter
                />
                <button type="submit">บันทึก</button>
            </form>
        </FormProvider>
    );
}
