'use server'

import { setUser } from "@/lib/features/userProfile/userProfileSlice";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const registerUser = async (formDate : FormData) => {
    const origin = headers().get("origin");
    const username = formDate.get("username") as string;
    const email = formDate.get("email") as string;
    const password = formDate.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{username: username, email:email,},
            emailRedirectTo:`${origin}/auth/callback`,
        },
    })

    if (error) {
        return redirect("/login?message=Could not authenticate user");
    }
        return redirect("/login?message=Check email to continue sign in process");
    }