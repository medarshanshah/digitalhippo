import { ExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

// ExpressContext brought from server.ts to tell typescript the kind of context we need
const t = initTRPC.context<ExpressContext>().create()
export const router = t.router

// its a public endpoint, anyone can call it
export const publicProcedure = t.procedure