import { supabase } from "@/utils/supabase/supabaseClient";

// Function for signing in
async function signIn(email: string, password: string) {
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            throw new Error(error.message);
        }

        return user;
    } catch (error) {
        console.error('Sign in error:', error);
        throw error;
    }
}

// Function for signing up
async function signUp(email: string, password: string) {
    try {
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            throw new Error(error.message);
        }

        return user;
    } catch (error) {
        console.error('Sign up error:', error);
        throw error;
    }
}