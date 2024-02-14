'use client';
import Header from "@/app/layouts/header/header";
import FixedButton from "@/app/layouts/fixedButton";
import React, {useEffect, useState} from 'react'
export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollCallback = (event: React.UIEvent) => {
    console.log(event.currentTarget?.scrollTop)
    return event.currentTarget?.scrollTop
  };
  const [isChange,setChange] = useState(false)
  const handleScroll = (event: React.UIEvent) => {
    if (event.currentTarget.scrollTop > 0){
      setChange(true)
    }else {
      setChange(false)
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header isChange={isChange}/>
      <main id="wrap-main" onScroll={handleScroll} className="overflow-scroll h-full">
        {children}
      </main>
      <FixedButton />
    </div>
  )
}
