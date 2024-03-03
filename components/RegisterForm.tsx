'use client';

import { supabase } from '@/utils/supabase/supabaseClient';
import { useEffect, useState } from 'react';
import { registerUser } from './formAction/registerAction';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '@/lib/features/userProfile/userProfileSlice';
import { redirect } from 'next/navigation';
import { data } from 'autoprefixer';

export default function RegisterForm() {

    const dispatch = useDispatch()
    const userRudex = useSelector(selectUser)

    const handleSubmit = async (e :FormData) => {
        
        try {
            const response = await registerUser(e)
            if (response && response?.success) {
                dispatch(setUser(response?.data))                
                redirect("/login?message=Check email to continue sign in process")
                
            } else {
                console.log('this is return error',response?.error);
                redirect("/login?message=Could not authenticate user");
            }
        } catch (error) {
            console.log('❌❌❌❌❌❌', error);
            redirect("/login?message=Could not authenticate user");
        }

    }

    return (
        <div className=' ml-2 mr-2 flex-1 flex flex-col w-full'>
            <form action={handleSubmit} className='flex flex-col gap-2'>
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