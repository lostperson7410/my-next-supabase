import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";

export default async function Index() {
  const supabase = createClient();

  const {data}:any =  await supabase.auth.getUser()

  console.log('data:',data);
  


  return (
    <div>
      <Header />
      <p>this is user Meta data</p>
      <p>username: {data.user.user_metadata.username}</p>
      <p>fullname: {data.user.user_metadata.full_name}</p>
    </div>
  );
}
