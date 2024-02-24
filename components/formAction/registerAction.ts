'use server'

import { setUser } from "@/lib/features/userProfile/userProfileSlice";
import { createClient } from "@/utils/supabase/server";
    
import { useDispatch } from 'react-redux';

const supabase = createClient()


export const registerUser = async (formDate : FormData) =>{
    const {data} = await supabase.auth.getUser()

    console.log('this is server action');
    
    const fullname = formDate.get('fullname')
    console.log("🚀 ~ registerUser ~ fullname:", fullname)
    const username = formDate.get('username')
    console.log("🚀 ~ registerUser ~ username:", username)

    console.log("🚀 ~ registerUser ~ user:", data?.user?.id)

    // const res = await supabase.from('profiles').update({
    //     full_name: fullname,
    //     username: username,
    //     updated_at: new Date(),
    // }).eq('id',data?.user?.id).select()
    const res = await supabase.auth.updateUser({data:{username: username,full_name: fullname}})
    return res?.data
}