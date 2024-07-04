import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/src/server/routers/_app";
import dbConnect from "@/src/lib/database";
// export API handler
// @link https://trpc.io/docs/v11/server/adapters
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: async () => {
    await dbConnect();
    return {};
  },
});
