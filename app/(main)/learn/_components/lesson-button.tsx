"use client";

type LessonButtonProps = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentae: number;
};

export function LessonButton({}: LessonButtonProps) {
  return <div></div>;
}
