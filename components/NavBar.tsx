import Link from "next/link";
import AuthButton from "./AuthButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations } from "next-intl/server";
import { getNextLocaleValue } from "@/utils/lang/language";

const NavBar = async ({...props}) => {

  // const languageByCookie = await getNextLocaleValue();

    const menu = [
        {
            name:'Home',
            title:'Home',
            path:`/`
        },
        {
            name:'Register',
            title:'Register',
            path:`/register`
        },
        {
            name:'Note',
            title:'Note',
            path:`/notes`
        },
    ]


  return (
    <nav className="z-10 sticky top-0 p-2 bg-zinc-900 items-center flex flex-row justify-between">
      <div className="flex gap-1 flex-row">
        {
            menu?.map((item,index)=> (
                <Link key={index} locale={false} href={`${item?.path}`}>{item?.title}{props?.lang}</Link>
                ))
              }
      </div>
      <div>
        <LanguageSwitcher/>
      </div>

      <div>
        <AuthButton/>
      </div>
    </nav>
  );
};

export default NavBar;
