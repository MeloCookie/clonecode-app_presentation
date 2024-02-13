import Header from '@/app/layouts/header/header'
import Footer from '@/app/layouts/footer'
export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main id="wrap-main" className="h-screen w-screen">
      <div className="flex flex-col h-screen bg-white"
      >
        <Header />
        <div className="overflow-scroll h-full">
          {children}
        </div>
      </div>
    </main>
  );
}
