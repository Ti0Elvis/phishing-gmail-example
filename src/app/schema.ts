import { z } from "zod";

export const schema = z.object({
  email: z.any(),
  password: z.any(),
});
