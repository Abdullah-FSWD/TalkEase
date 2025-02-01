import { getCourses } from "@/db/queries";
import { List } from "./_components/list";

async function CoursesPage() {
  const courses = await getCourses();
  return (
    <div className="h-full w-[912px] px-2 mx-auto">
      <div className="text-2xl font-bold text-neutral-700">
        Language Courses
      </div>
      <List courses={courses} activeCourseId={1} />
    </div>
  );
}

export default CoursesPage;
