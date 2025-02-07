import { cn } from "@/lib/utils";
import Image from "next/image";

type ResultCardProps = {
  value: number;
  variant: "points" | "hearts";
};

export function ResultCard({ value, variant }: ResultCardProps) {
  const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";

  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "hearts" && "bg-rose-400 border-rose-400",
        variant === "points" && "bg-orange-400 border-orange-400"
      )}
    >
      <div
        className={cn(
          "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
          variant === "hearts" && "bg-rose-500",
          variant === "points" && "bg-orange-400"
        )}
      >
        {variant === "hearts" ? "Hearts" : "Points"}
      </div>
      <div
        className={cn(
          "rounded-2xl bg-white flex items-center justify-center p-6 font-bold text-lg",
          variant === "hearts" && "text-rose-500",
          variant === "points" && "text-rose-400"
        )}
      >
        <Image
          src={imageSrc}
          alt="Icon"
          height={30}
          width={30}
          className="mr-1.5"
        />
        {value}
      </div>
    </div>
  );
}
