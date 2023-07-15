import Link from "next/link";
import { prisma } from "@/db";
import TodoItem from "@/components/TodoItem";

async function toggleTodoCompleted(id: string, checked: boolean) {
  "use server";

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete: checked,
    },
  });
}

const Home = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="flex items-center justify-between my-8">
        <h1 className="text-4xl">Todos</h1>
        <Link
          className="border border-slate-100 rounded px-2 py-1 text-slate-100 hover:bg-slate-100 hover:text-slate-800"
          href="/new"
        >
          New Todo
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoCompleted={toggleTodoCompleted}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
