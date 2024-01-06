import { initTRPC } from "@trpc/server";

const t = initTRPC.context().create()
export const router = t.router

// its a public endpoint, anyone can call it
export const publicProcedure = t.procedure