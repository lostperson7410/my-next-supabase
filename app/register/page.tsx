'use client'

import RegisterForm from '@/components/Form/RegisterForm';
import { useState } from 'react';

export default function RegisterPage() {
    return (
        <div className='w-full flex flex-1 justify-center items-center'>
            <RegisterForm/>
        </div>
    );
}