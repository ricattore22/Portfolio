import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export default function AvailableForWork({ available }) {
  return (
    <>
      <Badge
        variant="outline"
        className="px-[16px] py-[8px] border-2 border-primary font-bold text-[12px] sm:text-[14px] gap-[12px]"
      >
        <div
          className={cn(
            available ? "bg-green-500" : "bg-red-500",
            "min-w-[14px] min-h-[14px] border border-primary rounded-full",
            "transition-all ease-in-out duration-150"
          )}
        ></div>
        {available ? "Available for Work" : "Not Available for Work"}
      </Badge>
    </>
  );
}
