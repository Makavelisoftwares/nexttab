"use server";

const { db } = require("@/lib/db");

export const createSub = async (name, email) => {
  if (!email) {
    return { err: "provide an email address" };
  }

  await db.news.create({
    data: {
      name,
      email,
    },
  });

  return { success: "ok" };
};
