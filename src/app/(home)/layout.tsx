import Header from "@/app/layouts/header";
import React from 'react'
export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header />
      <main id="wrap-main" className="overflow-scroll h-full">
          {children}
      </main>
    </div>
  )
}
