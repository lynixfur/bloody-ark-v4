import { NextAuthOptions } from "next-auth";
import { NextRequest } from 'next/server';
import DiscordProvider from "next-auth/providers/discord";
import SteamProvider from "./SteamProvider";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";

export const authOptions = (req: NextRequest): NextAuthOptions => {
    return {
        adapter: PrismaAdapter(prisma),
        providers: req ? [
            SteamProvider(req, {
                clientSecret: process.env.STEAM_SECRET!,
                callbackUrl: process.env.STEAM_CALLBACK || '',
            }),
        ] : [],
        secret: process.env.NEXTAUTH_SECRET!,
        session: {
            maxAge: 259200 // 3 Days
        },
        callbacks: {
            async session({ session }) {
                const prismaUser = await prisma.user.findUnique({
                    where: {
                        email: session.user?.email!,
                    },
                    include: {
                        accounts: true,
                    },
                });

                const steamAccount = prismaUser?.accounts.find(a => a.provider == "steam");
                if (!!steamAccount) {
                    // @ts-expect-error
                    session.user.steamId = steamAccount?.providerAccountId;
                }

                // @ts-expect-error
                session.user.role = prismaUser.role;

                return session;
            },
        },
    }
}