// import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative font-spartan flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-full  flex-grow ">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
<div>Hii</div>
      </footer>
    </div>
  );
}
