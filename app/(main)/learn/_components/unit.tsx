import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";

type UnitProps = {
  id: number;
  title: string;
  description: string;
  order: number;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export function Unit({
  id,
  title,
  description,
  order,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: UnitProps) {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              locked={isLocked}
              current={true || isCurrent}
              percentage={activeLessonPercentage}
              totalCount={lessons.length - 1}
            />
          );
        })}
      </div>
    </>
  );
}
