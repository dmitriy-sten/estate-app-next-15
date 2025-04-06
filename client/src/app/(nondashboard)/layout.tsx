import { Navbar } from "@/components/navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="size-full">
      <Navbar />
      <main
        className={`h-full flex w-full flex-col`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
}
