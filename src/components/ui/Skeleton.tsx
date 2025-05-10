import * as React from "react";
import { cn } from "@/lib/utils";

// Skeleton component for loading states
// Follows design rules: uses only allowed colors, border radius, and animation
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  rounded?: string;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, rounded = "rounded-lg", style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--off-white)] animate-pulse",
          rounded,
          className
        )}
        style={{
          width,
          height,
          ...style,
        }}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

export { Skeleton }; 