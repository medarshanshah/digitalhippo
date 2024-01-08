import { appRouter } from "@/trpc"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

const handler = (req: Request) => {
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,

        //ts got confused which context it should go with- the local one or express one
        //@ts-expect-error - context already passed from express middleware
        createContext: () => ({})
    })
}

export { handler as GET, handler as POST }