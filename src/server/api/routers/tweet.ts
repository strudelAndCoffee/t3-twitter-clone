import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const tweetRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input: { text }, ctx }) => {
      const tweet = await ctx.db.tweet.create({
        data: { content: text, userId: ctx.session.user.id },
      });

      return tweet;
    }),
});
