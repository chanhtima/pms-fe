import React, { useState } from 'react'; 
import { Steps } from 'primereact/steps';
import { MenuItem } from 'primereact/menuitem';

export default function TemplateStep()  {
    const items: MenuItem[] = [
        {
            label: 'Personal Info'
        },
        {
            label: 'Reservation'
        },
        {
            label: 'Review'
        }
    ];

    return (
        <div className="card">
            <Steps model={items} />
        </div>
    )
}