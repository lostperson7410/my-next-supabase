'use client';

import { supabase } from '@/utils/supabase/supabaseClient';
import { useState } from 'react';
import { registerUser } from '../formAction/registerAction';

export default function RegisterForm() {
    return (
        <div className=' ml-2 mr-2 flex-1 flex flex-col w-full'>
            <form action={registerUser} className='flex w-full items-center justify-start flex-col gap-2'>
                    
                <div className='flex-row flex gap-10'>
                    <div className='flex-col flex items-center justify-center'>
                        <div className=' w-40 h-40 bg-white rounded-full'>
                            {/* 1 */}
                        </div>
                    </div>
                    <div className='flex-col flex'>
                        <label className="text-md" htmlFor="password">
                        Fullname
                        </label>
                        <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="text"
                        name="fullname"
                        // placeholder="••••••••"
                        required
                        />
                        <label className="text-md" htmlFor="password">
                        Username
                        </label>
                        <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="text"
                        name="username"
                        // placeholder="••••••••"
                        required
                        />
                        <button type='submit'  className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
                        Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}