"use server";

import { db } from "@/lib/db";

export const CreateABlogPost = async (title, description, image) => {
  if (!title || !description) {
    return { err: "missing field" };
  }

  const createBlog = await db.blog.create({
    data: {
      title,
      description,
      image,
    },
  });

  if (!createBlog) {
    return { err: "failed creating the blog" };
  }

  return { success: "blog created successful" };
};
