'use client';

import { supabase } from '@/utils/supabase/supabaseClient';
import { useEffect, useState } from 'react';
import { registerUser } from './formAction/registerAction';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '@/lib/features/userProfile/userProfileSlice';

export default function RegisterForm() {

    const dispatch = useDispatch()
    const userRudex = useSelector(selectUser)

    const handleSubmit = async (e :FormData) => {
        const response = await registerUser(e)
        dispatch(setUser(response?.user))
    }

    useEffect(() => {
        console.log("userRudex: ",userRudex);
        
    }, [userRudex]);

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