import Image from "next/image";
import { redirect } from "next/navigation";

import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Item } from "./_components/item";

async function ShopPage() {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="flex flex-col items-center w-full">
          <Image src="/shop.svg" alt="Shop" height={90} width={90} />
        </div>
        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
          Shop
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
          Spend your points on cool stuff.
        </p>
        <Item
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </FeedWrapper>
    </div>
  );
}

export default ShopPage;
