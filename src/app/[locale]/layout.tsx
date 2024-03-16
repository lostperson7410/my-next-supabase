import { GeistSans } from "geist/font/sans";
import "../globals.css";
import StoreProvider from "../StoreProvider";
import NavBar from "@/components/NavBar";
import React from "react";

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};

}) {
  console.log('locale:',locale);
  return (
    <main className="min-h-screen flex flex-col items-center">
      {children}
    </main>
  );
}
