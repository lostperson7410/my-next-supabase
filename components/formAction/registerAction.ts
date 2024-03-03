'use server'

import { setUser } from "@/lib/features/userProfile/userProfileSlice";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { v4 as uuidv4} from "uuid"


export const UploadImageProfile = async (file:File) => {
    console.log("🚀 ~ registerUser ~ UploadImage:", file)
    const supabase = createClient();
    const {data,error} = await supabase.storage.from("attachments").upload(uuidv4(),file)
    console.log("🚀 ~ UploadImageProfile ~ data:", data)
    
}

export const registerUser = async (formDate : FormData) => {
    console.log("🚀 ~ registerUser ~ formDate:", formDate)
    
    const origin = headers().get("origin");
    const username = formDate.get("username") as string;
    const profile_img = formDate.get("profile_img") as string;
    const email = formDate.get("email") as string;
    const password = formDate.get("password") as string;
    const supabase = createClient();


    // const { error,data } = await supabase.auth.signUp({
    //     email,
    //     password,
    //     options:{
    //         data:{username: username, email:email,},
    //         emailRedirectTo:`${origin}/auth/callback`,
    //     },
    // })

    // if (error) {
    //     return {success:false, error:error};
    // }

    // return {success:true, data:data};
}