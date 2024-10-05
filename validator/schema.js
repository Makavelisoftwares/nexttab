import { z } from "zod";

export const BlogForm = z.object({
  heading: z.string({
    required_error: "Required Header",
  }),
  description: z.string({
    required_error: "Required description",
  }),
});
