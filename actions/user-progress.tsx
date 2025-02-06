"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import db from "@/db/drizzle";

import { getCourseById, getUserProgress } from "@/db/queries";
import { challengeProgress, challenges, userProgress } from "@/db/schema";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { error } from "console";

export async function upsertUserProgress(courseId: number) {
  const { userId } = await auth();
  const user = await currentUser();

  if (!user || !userId) {
    throw new Error("Unauthorized");
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("Course not found!");
  }

  // TODO: add units and lessons

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    });
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");

    // return true;
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  });
  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");

  return true;
}

export async function reduceHearts(challengeId: number) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const currentUserProgress = await getUserProgress();

  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(userProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId)
    ),
  });

  const practice = !!existingChallengeProgress;

  if (practice) {
    return { error: "practice" };
  }

  if (!currentUserProgress) {
    throw new Error("User progress not found!");
  }

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  if (!challenge) {
    throw new Error("Challenge not found");
  }

  const lessonId = challenge.id;

  if (currentUserProgress.hearts === 0) {
    return { error: "hearts" };
  }

  await db
    .update(userProgress)
    .set({
      hearts: Math.max(currentUserProgress.hearts - 1, 0),
    })
    .where(eq(userProgress.userId, userId));

  revalidatePath("/shop");
  revalidatePath("/learn");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath(`/lesson/${lessonId}`);
}
