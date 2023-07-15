import { prisma } from "@/db";
import { redirect } from "next/navigation";
import { z } from "zod";

// const createTodo = async (data: FormData) => {
async function createTodo(data: FormData) {
  "use server";

  const titleSchema = z.string().nonempty("Title is required");
  const title = data.get("title")?.valueOf() as string;


  try {
    titleSchema.parse(title);

    await prisma.todo.create({
      data: {
        title,
      },
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/");
}

const Page = () => {
  return (
    <>
      <header className="flex items-center justify-between my-8">
        <h1 className="text-4xl">New Todo</h1>
      </header>
      <form action={createTodo} className="flex flex-col space-y-4 sm:w-1/3">
        <label htmlFor="title">Title</label>
        <input
          className="border border-slate-100 rounded px-2 py-1 text-slate-100 bg-transparent"
          name="title"
          type="text"
        />
        <button
          className="border border-slate-100 rounded px-2 py-1 text-slate-100 hover:bg-slate-100 hover:text-slate-800"
          type="submit"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default Page;
