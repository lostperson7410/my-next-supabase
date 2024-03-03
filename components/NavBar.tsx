import Link from "next/link";
import AuthButton from "./AuthButton";

const NavBar = async () => {


    const menu = [
        {
            name:'Home',
            title:'Home',
            path:'/'
        },
        {
            name:'About',
            title:'About',
            path:'/about'
        },
        {
            name:'Contact',
            title:'Contact',
            path:'/contact'
        },
    ]


  return (
    <nav className="z-10 sticky top-0 p-2 bg-zinc-900 items-center flex flex-row justify-between">
      <div className="flex gap-1 flex-row">
        {
            menu?.map((item,index)=> (
                <Link key={index} href={item?.path}>{item?.title}</Link>
            ))
        }
      </div>

      <div>
        <AuthButton/>
      </div>
    </nav>
  );
};

export default NavBar;
