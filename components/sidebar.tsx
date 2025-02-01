import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItems } from "@/components/sidebar-items";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "flex lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          {/* <Image src="talkease.svg" height={100} width={100} alt="talkease" /> */}
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Talk Ease
          </h1>
        </div>
      </Link>
      <div className="flex flex-col flex-1 gap-y-2">
        <SidebarItems label="learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItems
          label="leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItems label="quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItems label="shop" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSwitchSessionUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
}
