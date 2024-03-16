import React from "react";
import './locale.css'


export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};

}) {
  return (
    <main className="locale-Main-Container">
      {children}
    </main>
  );
}
