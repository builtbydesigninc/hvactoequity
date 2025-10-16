"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  image,
  name,
  title,
  className,
}: {
  image: string;
  name: string;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-start w-full relative",
        className
      )}
    >
      <div className="rounded-3xl w-full relative overflow-hidden border border-white/[0.2] flex items-center justify-center aspect-square p-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-white font-helvetica text-lg font-semibold">
          {name}
        </h3>
        <p className="text-[#9CA3AF] font-helvetica text-sm mt-1">{title}</p>
      </div>
    </div>
  );
};

