import { cn } from "@/lib/utils";

export default function HeadSection({ children, className, ...props }) {
  return (
    <h1
      className={cn(
        "font-bold text-[24px] sm:text-[32px] md:text-[40px]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
