import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: any;
  description: string;
  href?: string;
  cta?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-gradient-to-b from-[#0F0F10] to-[#151515] border border-[#222222]",
        "transform-gpu transition-all duration-300 ease-out hover:border-[#333]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
      <div className="relative z-10 flex flex-col gap-4 p-8">
        <h3 className="text-xl font-bold text-white font-helvetica">{name}</h3>
        <p className="text-[#9CA3AF] text-base leading-relaxed font-helvetica">{description}</p>
      </div>
      {background && (
        <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {background}
        </div>
      )}
    </div>
  );
}

