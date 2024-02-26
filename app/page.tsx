import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import RegisterForm from "@/components/Form/RegisterForm";
import SignInSignUpForm from "@/components/Form/SignInSignUpForm";
import AuthButton from "@/components/AuthButton";

export default async function Index() {
  const supabase = createClient();

  const {data}:any =  await supabase.auth.getUser()

  console.log('data:',data);
  
  return (
    <div>
      <Header />
      <h1>Welcome New user</h1>
      <AuthButton/>
    </div>
  );
}
