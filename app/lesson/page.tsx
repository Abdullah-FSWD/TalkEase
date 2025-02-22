import { redirect } from "next/navigation";

import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { Quiz } from "./_components/quiz";

async function LessonPage() {
  const userProgressData = getUserProgress();
  const lessonData = getLesson();
  const userSubscriptionData = getUserSubscription();
  const [userProgress, lesson, userSubscription] = await Promise.all([
    userProgressData,
    lessonData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
}

export default LessonPage;
