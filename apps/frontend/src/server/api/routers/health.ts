import { env } from "@/env.mjs";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { ServiceHealth } from "@acme/backend";
import axios from "axios";

export const healthRouter = createTRPCRouter({
  healthCheck: publicProcedure.query(async () => {
    const { data } = await axios.get<ServiceHealth>(`${env.BACKEND_URL}/health`);
    return data;
  }),
});
