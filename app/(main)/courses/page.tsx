import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./_components/list";

async function CoursesPage() {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);
  return (
    <div className="h-full w-[912px] px-2 mx-auto">
      <div className="text-2xl font-bold text-neutral-700">
        Language Courses
      </div>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
}

export default CoursesPage;
