import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Rey", lastName: "Pan" };

  return (
    <main className="flex flex-col md:flex-row w-full h-screen font-inter">
      <Sidebar />
      <div className="flex size-full root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        <div>
          <MobileNav />
        </div>
      </div>
      {children}
    </main>
  );
}
