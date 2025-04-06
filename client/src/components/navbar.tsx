import { NAVBAR_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <div
      style={{
        height: `${NAVBAR_HEIGHT}px`,
      }}
      className={cn("fixed top-0 w-full z-50 shadow-xl", className)}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href={"/"}
            className="cursor-pointer hover:text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                width={24}
                height={24}
                src={"/logo.svg"}
                alt="Rentiful Logo"
                className="size-6"
              />
              <div className="text-lg font-bold">
                RENT
                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  IFUL
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-primary-200 hidden md:block">
          Discover your perfect rental apartment with our advanced search
        </p>

        <div className="flex items-center gap-5">
          <Link href={"/signin"}>
            <Button
              className="text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
              variant={"outline"}
            >
              Sign In
            </Button>
          </Link>

          <Link href={"/signup"}>
            <Button
              className="text-white border-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
              variant={"outline"}
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
