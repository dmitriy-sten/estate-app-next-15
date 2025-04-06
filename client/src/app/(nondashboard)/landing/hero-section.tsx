import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("relative h-screen", className)}>
      <Image
        src={"/landing-splash.jpg"}
        fill
        alt="Rentiful Rental Platform Hero section"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>
  );
};
