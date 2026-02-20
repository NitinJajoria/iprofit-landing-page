"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

interface RootShellProps {
  children: React.ReactNode;
}

export default function RootShell({ children }: RootShellProps) {
  const pathname = usePathname();
  const hideChrome = pathname.startsWith("/studio");

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <Header />
      <main className="relative z-0">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
