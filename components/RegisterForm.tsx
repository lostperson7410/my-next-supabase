'use client';

import { supabase } from '@/utils/supabase/supabaseClient';
import { useState } from 'react';
import { registerUser } from './formAction/registerAction';

export default function RegisterForm() {

    return (
        <div className=' ml-2 mr-2 flex-1 flex flex-col w-full'>
            <form action={registerUser} className='flex flex-col gap-2'>
                    <input
                    className=' bg-white text-slate-900 rounded-sm'
                        name='fullname'
                        placeholder='fullname'
                        required
                    />
                    <input
                    className=' bg-white text-slate-900 rounded-sm'
                        name='username'
                        placeholder='username'
                        required
                    />
                    <button type='submit' className='w-full text-slate-900 bg-emerald-400'>Submit</button>
            </form>
        </div>
    );
}