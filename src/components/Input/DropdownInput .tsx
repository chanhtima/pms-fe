import { DropdownInputProps } from '@/src/models/input.model';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';

function DropdownInput({
    label,
    name,
    options,
    rules,
    disabled = false,
    filter = false,
    EN = false,
    onSelected,
    onChange: onSelectedChange,
    placeholder
}: DropdownInputProps) {
    const { control } = useFormContext();

    const handleChange = (e: any) => {
        if (onSelectedChange) {
            onSelectedChange(e);
        }
        if (onSelected) {
            onSelected(e.value);
        }
    };

    return (
        <div className="field flex flex-col">
            {label && <label htmlFor={name}>{label}</label>}
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <Dropdown
                        className=" border focus:border-none"
                        id={name}
                        {...field}
                        options={
                            options?.map((item) => ({
                              label: item.label,
                              value: item.key,
                            })) as any
                          }
                          
                        disabled={disabled}
                        placeholder={placeholder || (EN ? "Please select the information." : "กรุณาเลือกข้อมูล")}
                        onChange={(e) => {
                            field.onChange(e.value);
                            console.log("Selected value:", e.value);
                            handleChange(e);
                        }}
                        filter={filter}
                    />
                )}
            />
        </div>
    );
}

export default DropdownInput;
