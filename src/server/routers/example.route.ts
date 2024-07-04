import { z } from "zod";
import { procedure, router } from "../trpc";
import Pet from "@/src/models/Example.model";
import type { TDefaultResponse } from "@/src/lib/definition";

export const petRoute = router({
  add: procedure
    .input(
      z.object({
        name: z.string(),
        owner_name: z.string(),
        species: z.string(),
        age: z.number().optional(),
        poddy_trained: z.boolean().optional(),
        diet: z.array(z.string()).optional(),
        image_url: z.string(),
        likes: z.array(z.string()).optional(),
        dislikes: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const data = await Pet.create(input);
      const message = data ? "Pet entry created" : "Failed to create pet entry";

      return {
        data,
        message,
      } satisfies TDefaultResponse;
    }),
  getByID: procedure.input(z.string()).query(async ({ input }) => {
    const data = await Pet.findById(input);
    const message = data ? "Pet entry created" : "Failed to create pet entry";

    return {
      data,
      message,
    } satisfies TDefaultResponse;
  }),
  getAll: procedure.query(async () => {
    const data = await Pet.find({});
    const message = data ? "Pet entry created" : "Failed to create pet entry";

    return {
      data,
      message,
    } satisfies TDefaultResponse;
  }),
});
