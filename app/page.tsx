import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import RegisterForm from "@/components/Form/RegisterForm";
import SignInSignUpForm from "@/components/Form/SignInSignUpForm";
import AuthButton from "@/components/AuthButton";
import NavBar from "@/components/NavBar";

export default async function Index() {
  const supabase = createClient();

  const {data}:any =  await supabase.auth.getUser()

  console.log('data:',data);
  
  return (
    <div>
     <Header />
     <h1 className=" text-2xl">🚨🚨============\\ Feature //=========== 🚨🚨</h1><br/>
     <h1 className="text-xl">✅ Login/Register</h1>
     <h1 className="text-xl">✅ Upload image</h1>
     <h1 className="text-xl">❌ Todolist</h1>
     <h1 className="text-xl">❌ Payment</h1>
     <h1 className="text-xl">❌ i18n</h1>
     <h1 className="text-xl">✅ Redux</h1>
     <h1 className="text-xl">🤮 Customize Component</h1>
    </div>
  );
}
