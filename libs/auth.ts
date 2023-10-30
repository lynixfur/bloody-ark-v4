import { NextAuthOptions } from "next-auth";
import { NextRequest } from 'next/server';
import DiscordProvider from "next-auth/providers/discord";
import SteamProvider from "./SteamProvider";

export const authOptions = (req: NextRequest): NextAuthOptions => {
    return {
        //adapter: PrismaAdapter(prisma),
        providers: req ? [
            SteamProvider(req, {
                clientSecret: process.env.STEAM_SECRET!,
                callbackUrl: process.env.STEAM_CALLBACK || '',
            }),
            DiscordProvider({
                clientId: process.env.DISCORD_CLIENT_ID || '',
                clientSecret: process.env.DISCORD_CLIENT_SECRET || '',

            })
        ] : [],
        secret: process.env.NEXTAUTH_SECRET!,
        session: {
            maxAge: 259200 // 3 Days
        },
        callbacks: {
            async session({ session }) {
                /*const prismaUser = await prisma.user.findUnique({
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
                const discordAccount = prismaUser?.accounts.find(a => a.provider == "discord");
                if (!!discordAccount) {
                    // @ts-expect-error
                    session.user.discordId = discordAccount?.providerAccountId;
                }*/
                
                // @ts-expect-error 
                session.user.role = "user";

                return session;
            },
        },
    }
}