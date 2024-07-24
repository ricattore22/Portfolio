import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Author({ className, ...props }) {
  return (
    <>
      <Link
        href="/"
        className={cn("font-itim text-[18px] tracking-tighter", className)}
      >
        Richards Griffiano
      </Link>
    </>
  );
}
