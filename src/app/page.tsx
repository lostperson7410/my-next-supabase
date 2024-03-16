import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import {getTranslations} from 'next-intl/server';

export default async function Index() {
  const supabase = createClient();


  const {data}:any =  await supabase.auth.getUser()

  console.log('data:',data);
  const t = await getTranslations('Index');

  
  return (
    <div>
      <p>{t('title')}</p>
     <Header />
     <h1 className=" text-2xl">🚨🚨============\\ Feature //=========== 🚨🚨</h1><br/>
     <h1 className=" text-2xl">⭕️⭕️ Current Version : V 1.5 ⭕️⭕️</h1><br/>
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
