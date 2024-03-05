'use server'

import { setUser } from "@/lib/features/userProfile/userProfileSlice";
import { createClient } from "@/utils/supabase/server";
import { isEmpty } from "lodash";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { v4 as uuidv4} from "uuid"

export const registerUser = async (formDate : FormData,imageUrl:any) => {    
    const origin = headers().get("origin");
    const username = formDate.get("username") as string;
    const profile_img = imageUrl as string;
    const email = formDate.get("email") as string;
    const password = formDate.get("password") as string;
    const supabase = createClient();


    const { error,data } = await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{username: username, email:email, profile_img:profile_img},
            emailRedirectTo:`${origin}/auth/callback`,
        },
    })

    if (error) {
        return {success:false, error:error};
    }

    return {success:true, data:data};
}