import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ShimmerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  background?: string;
  borderColor?: string;
  className?: string;
}

const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#4A5568",
      background = "#1A1A1A",
      borderColor = "#4A5568",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex h-12 animate-shimmer items-center justify-center rounded-full border px-6 font-helvetica font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
          `border-[${borderColor}]`,
          `bg-[linear-gradient(110deg,${background},45%,${shimmerColor},55%,${background})]`,
          "bg-[length:200%_100%]",
          `focus:ring-[${shimmerColor}]`,
          `focus:ring-offset-[${background}]`,
          className
        )}
        style={{
          borderColor: borderColor,
          backgroundImage: `linear-gradient(110deg, ${background}, 45%, ${shimmerColor}, 55%, ${background})`,
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };

