import { gql, useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  visible: string;
}

export function Sidebar(props: SidebarProps) {
  const { data } = useGetLessonsQuery();
  
  return (
    <aside className={`lg:w-[348px] lg:block ${props.visible} lg:relative absolute top-0 z-50 bg-gray-700 p-6 border-l border-gray-600 w-full min-h-full`}>
      <span className="font-bold text-2xl pb-6 mb-5 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}