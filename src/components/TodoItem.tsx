"use client";

import { prisma } from "@/db";

const TodoItem = ({ todo, toggleTodoCompleted }) => {
  return (
    <li>
      <input
        id={todo.id}
        type="checkbox"
        className="peer mr-2 cursor-pointer"
        defaultChecked={todo.complete}
        onChange={(e) => toggleTodoCompleted(todo.id, e.target.checked)}
      />
      <label
        className="text-slate-100 hover:text-slate-200 peer-checked:line-through peer-checked:text-slate-400 cursor-pointer"
        htmlFor={todo.id}
      >
        {todo.title}
      </label>
    </li>
  );
};

export default TodoItem;
