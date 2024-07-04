import { z } from "zod";
import { procedure, router } from "../trpc";
import { petRoute } from "./example.route";

export const appRouter = router({
  pet: petRoute,
});

// export type definition of API
export type AppRouter = typeof appRouter;
