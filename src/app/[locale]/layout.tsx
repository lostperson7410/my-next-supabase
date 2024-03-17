import React from "react";
import './locale.css'
import NavBar from "@/components/NavBar";
import { usePathname } from 'next/navigation';


export default function LocaleLayout({
  children,
  params: {locale},
  ...props
}: {
  children: React.ReactNode;
  params: {locale: string};

}) {
  return (
    <>
    <NavBar/>
    <main className="locale-Main-Container">
      {children}
    </main>
    </>
  );
}
