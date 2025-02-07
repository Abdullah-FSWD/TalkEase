import Image from "next/image";
import { redirect } from "next/navigation";

import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Item } from "./_components/item";
import { getUserProgress, getUserSubscription } from "@/db/queries";

async function ShopPage() {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
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
          hasActiveSubscription={isPro}
        />
      </FeedWrapper>
    </div>
  );
}

export default ShopPage;
