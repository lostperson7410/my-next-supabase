'use client';

import React from "react";

const SignInSignUpForm = () =>{


    // const SignIn = () =>{
    //     'use server'
    //     console.log('Signin or Sign up');
    // }
    // const SignUp = () =>{
    //     'use server'
    //     console.log('Signin or Sign up');
    // }

    return (
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>
    )
}

export default SignInSignUpForm;