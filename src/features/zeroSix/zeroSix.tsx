"use client";
import styles from "./zeroSix.module.css";
import React from "react";
import { DndContext } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { SortableContext, useSortable } from "@dnd-kit/sortable";

export const ZeroSix = () => {
  const columns = [
    { id: "CREATED", tasks: ["test", "test2"] },
    {
      id: "IN_PROGRESS",
      tasks: ["test", "test2"],
    },
    { id: "COMPLETED", tasks: ["test", "test2"] },
  ];
  const columnIds = columns.map((column) => ({ id: column.id }));
  return (
    <main className={`${styles.main} main`}>
      <DndContext>
        <SortableContext items={columnIds}>
          {columns.map((column) => (
            <Column key={column.id} id={column.id} tasks={column.tasks} />
          ))}
        </SortableContext>
      </DndContext>
    </main>
  );
};

const Column = ({ id, tasks }: { id: string; tasks: string[] }) => {
  const { setNodeRef, listeners, transition, transform, attributes } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div ref={setNodeRef} style={style}>
      <div {...attributes} {...listeners}>
        {id}
      </div>
      {tasks.map((task) => (
        <div key={task}>{task}</div>
      ))}
    </div>
  );
};
