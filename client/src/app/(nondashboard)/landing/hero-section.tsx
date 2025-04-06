"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Start you journey to finding the perfect place to call home
          </h1>
          <p className="text-xl text-white mb-8 ">
            Explore our wide range of rental properties to fit your lifestyle
            and needs!
          </p>

          <div className="flex justify-center">
            <Input
              type="text"
              onChange={() => {}}
              //   value={"search query"}
              className="bg-white w-full max-w-lg rounded-none rounded-l-xl border-none h-12"
              placeholder="Search by city, neighborhood or address"
            />
            <Button className="rounded-none h-12 rounded-r-lg bg-secondary-500 hover:bg-secondary-700">
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
