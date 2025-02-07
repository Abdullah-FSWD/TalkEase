import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/db/queries";
import { Quiz } from "../_components/quiz";

type LessonIdPageProps = {
  params: {
    lessonId: number;
  };
};

async function LessonIdPage({ params }: LessonIdPageProps) {
  const userProgressData = getUserProgress();
  const lessonData = getLesson(params.lessonId);

  const [userProgress, lesson] = await Promise.all([
    userProgressData,
    lessonData,
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
      userSubscription={null}
    />
  );
}

export default LessonIdPage;
